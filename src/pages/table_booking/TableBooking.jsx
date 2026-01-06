import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";

import { getBookingDetails } from '../../utils/functions'
import { useEffect, useState } from "react";

export default function TableBooking() {

    const [tabledata, setTabledata] = useState(null);

    const getTableData = async () => {

        const res = await getBookingDetails();

        if (res) {
            setTabledata(res);
        }
    }


    useEffect(() => {

        getTableData();

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
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>


                                            {


                                                tabledata?.map((value, index) => (

                                                    <>

                                                        <tr key={index}>
                                                            <td>#TB1001</td>
                                                            <td>{value?.name}</td>
                                                            <td>{value?.phone}</td>
                                                            <td>{value?.peopleNo}</td>
                                                            <td>{value?.tableNo}</td>
                                                            <td>{value?.date}</td>
                                                            <td>{value?.time}</td>
                                                            <td>

                                                                {
                                                                    value?.time == "confirmed" ? (
                                                                        <span className="badge badge-success">Confirmed</span>
                                                                    ) : value?.time == "cancelled" ? (
                                                                        <span className="badge badge-danger">Cancelled</span>
                                                                    ) : (
                                                                        <span className="badge badge-warning">Pending</span>
                                                                    )
                                                                }

                                                            </td>

                                                            <td>
                                                                <div className="table_action_box">
                                                                    <Link to={`/view-booking/${value?.id}`} className="btn btn-outline-secondary">View</Link>
                                                                    <a href="#" className="btn btn-outline-danger">Cancel</a>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                    </>

                                                ))


                                            }






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