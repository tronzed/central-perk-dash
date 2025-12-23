import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";

export default function CustomersFeedback() {

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
                                                <th>Feedback ID</th>
                                                <th>Customer Name</th>
                                                <th>Order ID</th>
                                                <th>Rating</th>
                                                <th>Feedback</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                            <tr>
                                                <td>#FB2001</td>
                                                <td>Rahul Sharma</td>
                                                <td>#ORD1025</td>
                                                <td>5 ⭐</td>
                                                <td>Food was delicious and delivered on time.</td>
                                                <td>22 Dec 2025</td>
                                                <td><span class="badge badge-success">Published</span></td>
                                                <td>
                                                    <div className="table_action_box">
                                                        <a href="#" className="btn btn-outline-danger">
                                                            Delete
                                                        </a>
                                                        <a href="#" className="btn btn-outline-secondary">
                                                            View
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>#FB2002</td>
                                                <td>Ananya Verma</td>
                                                <td>#ORD1026</td>
                                                <td>4 ⭐</td>
                                                <td>Great taste, but packaging could be better.</td>
                                                <td>22 Dec 2025</td>
                                                <td><span class="badge badge-success">Published</span></td>
                                                <td>
                                                    <div className="table_action_box">
                                                        <a href="#" className="btn btn-outline-danger">
                                                            Delete
                                                        </a>
                                                        <a href="#" className="btn btn-outline-secondary">
                                                            View
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>#FB2003</td>
                                                <td>Amit Patel</td>
                                                <td>#ORD1027</td>
                                                <td>2 ⭐</td>
                                                <td>Delivery was delayed and food was cold.</td>
                                                <td>23 Dec 2025</td>
                                                <td><span class="badge badge-warning">Pending</span></td>
                                                <td>
                                                    <div className="table_action_box">
                                                        <a href="#" className="btn btn-outline-danger">
                                                            Delete
                                                        </a>
                                                        <a href="#" className="btn btn-outline-secondary">
                                                            View
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>#FB2004</td>
                                                <td>Neha Singh</td>
                                                <td>#ORD1028</td>
                                                <td>3 ⭐</td>
                                                <td>Average experience, portion size was small.</td>
                                                <td>23 Dec 2025</td>
                                                <td><span class="badge badge-secondary">Hidden</span></td>
                                                <td>
                                                    <div className="table_action_box">
                                                        <a href="#" className="btn btn-outline-danger">
                                                            Delete
                                                        </a>
                                                        <a href="#" className="btn btn-outline-secondary">
                                                            View
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