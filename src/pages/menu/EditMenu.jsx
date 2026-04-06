import { useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader";

import { getEditMenu, editMenu } from '../../utils/functions';
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

export default function EditMenu() {

    const [name, setName] = useState();
    const [type, setType] = useState();
    const [desc, setDesc] = useState();
    const [price, setPrice] = useState();
    const [status, setStatus] = useState();
    const [img, setImg] = useState();
    const [imgUrlBox, setImgUrlBox] = useState();
    const [showLoader, setShowLoader] = useState(true);
    const [feature, setFeature] = useState();

    const { id } = useParams();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            let imgUrl = img;

            if (img != null) {

                const formData = new FormData();
                formData.append('file', img);
                formData.append("upload_preset", "tron_file_zed");
                formData.append("folder", "central-perk");

                const res = await fetch('https://api.cloudinary.com/v1_1/dyxkr50bl/image/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (!res.ok) {
                    throw new Error('having issue uploading img');
                }

                const imgBox = await res.json();
                imgUrl = imgBox.secure_url

            }


            const data = { id, name, type, desc, price, status, imgUrl, feature };

            await editMenu(data);
            toast.success('Item Edited');
            setShowLoader(false);

        } catch (error) {
            toast.error('unable to edit Item');
            console.error(error);
        }

    }

    function setUpFormImg(e) {
        setImgUrlBox(URL.createObjectURL(e.target.files[0]));
    }

    const getEditItem = async () => {

        const data = await getEditMenu(id);

        setName(data?.name);
        setType(data?.type);
        setDesc(data?.desc);
        setPrice(data?.price);
        setStatus(data?.status);
        setImgUrlBox(data?.imgUrl);
        setFeature(data.feature);
        setShowLoader(false);
    }

    useEffect(() => {
        getEditItem(id);
    }, []);

    return (

        <>

            {/* Main Content */}
            <div className="main-content">
                <section className="section">

                    <SectionHeader />

                    <div className="section-body">
                        <Loader show={showLoader} />

                        <div className="card">
                            <div className="card-header">
                                <h4>Input Text</h4>
                            </div>

                            <form onSubmit={handleSubmit} >
                                <div className="card-body">
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Name</label>
                                            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Food Type</label>
                                            <select class="form-control form-control-sm" value={type} onChange={(e) => setType(e.target.value)}>
                                                <option>Select value</option>
                                                <option>Veg</option>
                                                <option>Non-Veg</option>
                                                <option>Vegan</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="upload_img_box">
                                        {imgUrlBox && (
                                            <>
                                                <div className="img_box">
                                                    <img className="img-res" src={imgUrlBox} alt="product img" />
                                                    <button onClick={() => { setImgUrlBox(""); setImg(null) }}>X</button>
                                                </div>
                                            </>
                                        )}

                                        <div className="form-group">
                                            <label>Item Image</label>
                                            <div className="custom-file">
                                                <input disabled={imgUrlBox ? true : false} type="file" onChange={(e) => { setImg(e.target.files[0]); setUpFormImg(e) }} className="custom-file-input" id="customFile" />
                                                <label className="custom-file-label" for="customFile">Choose file</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea class="form-control" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label>Price</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">$</div>
                                            </div>
                                            <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" className="form-control currency" />
                                        </div>
                                    </div>

                                    <div className="form-group">


                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <div className="control-label">Status</div>
                                                <label className="custom-switch mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="custom-switch-checkbox"
                                                        className="custom-switch-input"
                                                        checked={status} onChange={(e) => setStatus(e.target.checked)}
                                                    />
                                                    <span className="custom-switch-indicator" />
                                                </label>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <div className="control-label">Feature Item</div>
                                                <label className="custom-switch mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="custom-switch-checkbox"
                                                        className="custom-switch-input"
                                                        checked={feature} onChange={(e) => setFeature(e.target.checked)}
                                                    />
                                                    <span className="custom-switch-indicator" />
                                                </label>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                                <div className="card-footer text-right">
                                    <button className="btn btn-primary mr-1" type="submit" onClick={() => setShowLoader(true)}>Update</button>
                                </div>

                            </form>


                        </div>

                    </div>

                </section>
            </div>

        </>

    );

} 