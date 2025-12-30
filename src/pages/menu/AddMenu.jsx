import { useState } from "react";
import SectionHeader from "../../components/SectionHeader";

import { addMenu } from "../../utils/functions"
import { toast } from "react-toastify";

export default function AddMenu() {


    const [name, setName] = useState();
    const [type, setType] = useState();
    const [desc, setDesc] = useState();
    const [price, setPrice] = useState();
    const [status, setStatus] = useState();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { name, type, desc, price, status };

        try {
            await addMenu(data);
            toast.success('Great success!');
        } catch (error) {
            toast.error('having troble adding item');
            console.error(error);
        }

    }


    return (

        <>

            {/* Main Content */}
            <div className="main-content">
                <section className="section">

                    <SectionHeader />

                    <div className="section-body">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add</h4>
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
                                                <option>Select</option>
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
                                                value={status} onChange={(e) => setStatus(e.target.checked)}
                                            />
                                            <span className="custom-switch-indicator" />
                                            {/* <span className="custom-switch-description">
                                            I agree with terms and conditions
                                        </span> */}
                                        </label>
                                    </div>

                                </div>
                                <div className="card-footer text-right">
                                    <button className="btn btn-primary mr-1" type="submit">Add</button>
                                </div>

                            </form>


                        </div>

                    </div>

                </section>
            </div>

        </>

    );

} 