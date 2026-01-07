import { useParams } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";

import { getSingleBookingDetails, addSingleBookingStatus } from '../../utils/functions'
import { useEffect, useState } from "react";

export default function ViewBooking() {


    const { id } = useParams();

    const [userData, setUserData] = useState();


    const getBookingDetails = async () => {
        const res = await getSingleBookingDetails(id);
        setUserData(res);
    }

    useEffect(() => {
        getBookingDetails();
    }, [])

    return (
        <>

            {/* Main Content */}
            <div className="main-content">
                <section className="section">

                    <SectionHeader />

                    <div className="section-body">
                        <div className="invoice">
                            <div className="invoice-print">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="invoice-title">
                                            <h2>Booking Table</h2>
                                            <div className="invoice-number">ID: #TB1001</div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-md-12">

                                                <div className="table_booking_detail_box">
                                                    <ul>
                                                        <li><b>Customer Name</b>{userData?.name}</li>
                                                        <li><b>Phone</b>{userData?.phone}</li>
                                                        <li><b>Email</b>{userData?.email}</li>
                                                        <li><b>Guests Count</b>{userData?.peopleNo}</li>
                                                        <li><b>Table No</b>{userData?.tableNo}</li>
                                                        <li><b>Date</b>{userData?.date}</li>
                                                        <li><b>Time</b>{userData?.time}</li>
                                                        <li><b>Status</b>

                                                            {


                                                                userData?.status == "confirmed" ? (
                                                                    <span className="badge badge-success">Confirmed</span>
                                                                ) : userData?.status == "cancelled" ? (
                                                                    <span className="badge badge-danger">Cancelled</span>
                                                                ) : (
                                                                    <span className="badge badge-warning">Pending</span>
                                                                )


                                                            }

                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="row hide_me">
                                            <div className="col-md-6"></div>
                                            <div className="col-md-6 text-md-right">
                                                <address>
                                                    <strong>Order Date:</strong>
                                                    <br />
                                                    September 19, 2018
                                                    <br />
                                                    <br />
                                                </address>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4 hide_me">
                                    <div className="col-md-12">
                                        <div className="section-title">Order Summary</div>
                                        <p className="section-lead">All items here cannot be deleted.</p>
                                        <div className="table-responsive">
                                            <table className="table table-striped table-hover table-md">
                                                <tbody>
                                                    <tr>
                                                        <th data-width={40}>#</th>
                                                        <th>Item</th>
                                                        <th className="text-center">Price</th>
                                                        <th className="text-center">Quantity</th>
                                                        <th className="text-right">Totals</th>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Mouse Wireless</td>
                                                        <td className="text-center">$10.99</td>
                                                        <td className="text-center">1</td>
                                                        <td className="text-right">$10.99</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Keyboard Wireless</td>
                                                        <td className="text-center">$20.00</td>
                                                        <td className="text-center">3</td>
                                                        <td className="text-right">$60.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Headphone Blitz TDR-3000</td>
                                                        <td className="text-center">$600.00</td>
                                                        <td className="text-center">1</td>
                                                        <td className="text-right">$600.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-lg-8">
                                                <div className="section-title">Payment Method</div>
                                                <p className="section-lead">
                                                    The payment method that we provide is to make it easier for you
                                                    to pay invoices.
                                                </p>
                                            </div>
                                            <div className="col-lg-4 text-right">
                                                <div className="invoice-detail-item">
                                                    <div className="invoice-detail-name">Subtotal</div>
                                                    <div className="invoice-detail-value">$670.99</div>
                                                </div>
                                                <div className="invoice-detail-item">
                                                    <div className="invoice-detail-name">Shipping</div>
                                                    <div className="invoice-detail-value">$15</div>
                                                </div>
                                                <hr className="mt-2 mb-2" />
                                                <div className="invoice-detail-item">
                                                    <div className="invoice-detail-name">Total</div>
                                                    <div className="invoice-detail-value invoice-detail-value-lg">
                                                        $685.99
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="text-md-right">
                                <div className="table_detail_bottom_button">
                                    <button onClick={async () => { await addSingleBookingStatus({ idBox: id, status: 'cancelled' }); getBookingDetails(); }} className="btn btn-danger btn-icon icon-left">
                                        <i className="fas fa-times" /> Cancel
                                    </button>
                                    <button onClick={async () => { await addSingleBookingStatus({ idBox: id, status: 'confirmed' }); getBookingDetails(); }} className="btn btn-success btn-icon icon-left">
                                        <i className="fas fa-check" /> Approve
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>
            </div>

        </>

    );

} 