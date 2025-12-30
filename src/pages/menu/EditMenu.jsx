import { useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader";

import { getEditMenu, editMenu } from '../../utils/functions';
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditMenu() {

    const [name, setName] = useState();
    const [type, setType] = useState();
    const [desc, setDesc] = useState();
    const [price, setPrice] = useState();
    const [status, setStatus] = useState();

    const { id } = useParams();

    const handleSubmit = async (e) => {

        e.preventDefault();

        const data = { id, name, type, desc, price, status };

        try {

            await editMenu(data);
            toast.success('Item Edited');

        } catch (error) {
            toast.error('unable to edit Item');
            console.error(error);
        }




    }

    const getEditItem = async () => {

        const data = await getEditMenu(id);

        console.log(data);

        setName(data.name);
        setType(data.type);
        setDesc(data.desc);
        setPrice(data.price);
        setStatus(data.status);

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

                                    <div className="form-group">
                                        <label>Item Image</label>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="customFile" />
                                            <label className="custom-file-label" for="customFile">Choose file</label>
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
                                        <div className="control-label">Status</div>
                                        <label className="custom-switch mt-2">
                                            <input
                                                type="checkbox"
                                                name="custom-switch-checkbox"
                                                className="custom-switch-input"
                                                checked={status} onChange={(e) => setStatus(e.target.checked)}
                                            />
                                            <span className="custom-switch-indicator" />
                                            {/* <span className="custom-switch-description">
                                            I agree with terms and conditions
                                        </span> */}
                                        </label>
                                    </div>

                                </div>
                                <div className="card-footer text-right">
                                    <button className="btn btn-primary mr-1" type="submit">Update</button>
                                </div>

                            </form>


                        </div>

                    </div>

                </section>
            </div>

        </>

    );

} 