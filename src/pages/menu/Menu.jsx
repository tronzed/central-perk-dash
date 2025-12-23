import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";

export default function Menu() {

    return (

        <>

            {/* Main Content */}
            <div className="main-content">
                <section className="section">

                    <SectionHeader />

                    <div className="section-body">

                        <div className="add_box_cover">
                            <Link to="/add-menu" class="btn btn-primary">Add Food Item</Link>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h4>Menu</h4>
                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table table-striped table-md">
                                        <tbody>
                                            <tr>
                                                <th>#</th>
                                                <th className="full_th_box">Name</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Irwansyah Saputra</td>
                                                <td>
                                                    <div className="badge badge-success">Active</div>
                                                </td>
                                                <td>
                                                    <div className="table_action_box">
                                                        <a href="#" className="btn btn-outline-danger">
                                                            Delete
                                                        </a>
                                                        <a href="#" className="btn btn-outline-secondary">
                                                            Edit
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Hasan Basri</td>
                                                <td>
                                                    <div className="badge badge-success">Active</div>
                                                </td>
                                                <td>
                                                    <div className="table_action_box">
                                                        <a href="#" className="btn btn-outline-danger">
                                                            Delete
                                                        </a>
                                                        <a href="#" className="btn btn-outline-secondary">
                                                            Edit
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Kusnadi</td>
                                                <td>
                                                    <div className="badge badge-danger">Not Active</div>
                                                </td>
                                                <td>
                                                    <div className="table_action_box">
                                                        <a href="#" className="btn btn-outline-danger">
                                                            Delete
                                                        </a>
                                                        <a href="#" className="btn btn-outline-secondary">
                                                            Edit
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Rizal Fakhri</td>
                                                <td>
                                                    <div className="badge badge-success">Active</div>
                                                </td>
                                                <td>
                                                    <div className="table_action_box">
                                                        <a href="#" className="btn btn-outline-danger">
                                                            Delete
                                                        </a>
                                                        <a href="#" className="btn btn-outline-secondary">
                                                            Edit
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Isnap Kiswandi</td>
                                                <td>
                                                    <div className="badge badge-success">Active</div>
                                                </td>
                                                <td>
                                                    <div className="table_action_box">
                                                        <a href="#" className="btn btn-outline-danger">
                                                            Delete
                                                        </a>
                                                        <a href="#" className="btn btn-outline-secondary">
                                                            Edit
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer text-right">
                                <nav className="d-inline-block">
                                    <ul className="pagination mb-0">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#" tabIndex={-1}>
                                                <i className="fas fa-chevron-left" />
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">
                                                1 <span className="sr-only">(current)</span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                <i className="fas fa-chevron-right" />
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>



                    </div>

                </section>
            </div>

        </>

    );

} 