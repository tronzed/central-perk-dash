import SectionHeader from "../components/SectionHeader";

export default function AddMenu() {

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
                            <div className="card-body">


                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Food Type</label>
                                        <select class="form-control form-control-sm">
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
                                    <textarea class="form-control"></textarea>
                                </div>

                                <div className="form-group">
                                    <label>Price</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">$</div>
                                        </div>
                                        <input type="text" className="form-control currency" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Availability</label>
                                    <textarea class="form-control"></textarea>
                                </div>


                            </div>
                            <div className="card-footer text-right">
                                <button className="btn btn-primary mr-1" type="submit">Add</button>
                            </div>
                        </div>

                    </div>

                </section>
            </div>

        </>

    );

} 