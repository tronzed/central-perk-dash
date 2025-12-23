import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";

export default function TableBooking() {

    return (

        <>

            {/* Main Content */}
            <div className="main-content">
                <section className="section">

                    <SectionHeader />

                    <div className="section-body">

                        <div className="card">
                            <div className="card-header">
                                <h4>Booking Table</h4>
                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table table-striped table-md">
                                        <tbody>
                                            <tr>
                                                <th>Booking ID</th>
                                                <th>Customer Name</th>
                                                <th>Phone</th>
                                                <th>Guests</th>
                                                <th>Table No</th>
                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>Booking Type</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                            <tr>
                                                <td>#TB1001</td>
                                                <td>Rahul Sharma</td>
                                                <td>9876543210</td>
                                                <td>4</td>
                                                <td>T-05</td>
                                                <td>25 Dec 2025</td>
                                                <td>7:30 PM</td>
                                                <td>Dinner</td>
                                                <td><span class="badge badge-success">Confirmed</span></td>
                                                <td>
                                                    <div className="table_action_box">
                                                        <a href="#" className="btn btn-outline-secondary">View</a>
                                                        <a href="#" className="btn btn-outline-danger">Cancel</a>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>#TB1002</td>
                                                <td>Ananya Verma</td>
                                                <td>9123456789</td>
                                                <td>2</td>
                                                <td>T-02</td>
                                                <td>25 Dec 2025</td>
                                                <td>8:00 PM</td>
                                                <td>Dinner</td>
                                                <td><span class="badge badge-warning">Pending</span></td>
                                                <td>
                                                    <div className="table_action_box">
                                                        <a href="#" className="btn btn-outline-secondary">View</a>
                                                        <a href="#" className="btn btn-outline-danger">Cancel</a>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>#TB1003</td>
                                                <td>Amit Patel</td>
                                                <td>9988776655</td>
                                                <td>6</td>
                                                <td>T-08</td>
                                                <td>26 Dec 2025</td>
                                                <td>1:30 PM</td>
                                                <td>Lunch</td>
                                                <td><span class="badge badge-info">Seated</span></td>
                                                <td>
                                                    <div className="table_action_box">
                                                        <a href="#" className="btn btn-outline-secondary">View</a>
                                                        <a href="#" className="btn btn-outline-danger">Cancel</a>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>#TB1004</td>
                                                <td>Neha Singh</td>
                                                <td>9090909090</td>
                                                <td>3</td>
                                                <td>T-03</td>
                                                <td>26 Dec 2025</td>
                                                <td>9:00 PM</td>
                                                <td>Dinner</td>
                                                <td><span class="badge badge-danger">Cancelled</span></td>
                                                <td>
                                                    <div className="table_action_box">
                                                        <a href="#" className="btn btn-outline-secondary">View</a>
                                                        <a href="#" className="btn btn-outline-danger">Cancel</a>
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