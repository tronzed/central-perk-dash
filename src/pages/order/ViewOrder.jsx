import { useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

import { getSingleOrder, addSingleOrderStatus } from '../../utils/functions'

export default function ViewOrder() {


    const { id } = useParams();

    const [userData, setUserData] = useState();

    const [showLoader, setShowLoader] = useState(true);

    const getData = async () => {
        const data = await getSingleOrder(id);
        setUserData(data);
        setShowLoader(false);
    }

    const setStatus = async (val) => {
        await addSingleOrderStatus({ idBox: id, status: val });
        getData();
        setShowLoader(true);
    }

    useEffect(() => {
        getData();
    }, []);


    return (

        <>

            {/* Main Content */}
            <div className="main-content">

                <section className="section">

                    <SectionHeader />

                    <div className="section-body">
                        <Loader show={showLoader} />

                        <div className="invoice">
                            <div className="invoice-print">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="invoice-title">
                                            <h2>Order</h2>
                                            <div className="invoice-number">ID: {userData?.orderId || 'N/A'}</div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-md-12">

                                                <div className="table_booking_detail_box">
                                                    <ul>
                                                        <li><b>Customer Name</b>{userData?.name || 'N/A'}</li>
                                                        <li><b>Order Type</b>{userData?.orderType || 'N/A'}</li>
                                                        <li><b>Date Time</b>{userData?.date || 'N/A'} | {userData?.time || 'N/A'}</li>
                                                        <li><b>Status</b>

                                                            {
                                                                userData?.status == "confirmed" ? (
                                                                    <span className="badge badge-success">Confirmed</span>
                                                                ) : userData?.status == "cancelled" ? (
                                                                    <span className="badge badge-danger">Cancelled</span>
                                                                ) : userData?.status == "complete" ? (
                                                                    <span className="badge badge-primary">Complete</span>
                                                                ) : (
                                                                    <span className="badge badge-warning">Pending</span>
                                                                )
                                                            }

                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4 ">
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

                                                    {
                                                        userData?.cartData?.map((value, key) => (
                                                            <>
                                                                <tr key={key}>
                                                                    <td>1</td>
                                                                    <td>{value?.name}</td>
                                                                    <td className="text-center">${value?.price}</td>
                                                                    <td className="text-center">1</td>
                                                                    <td className="text-right">${value?.price}</td>
                                                                </tr>
                                                            </>
                                                        ))
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-lg-8">
                                                <div className="hide_me">
                                                    <div className="section-title">Payment Method</div>
                                                    <p className="section-lead">
                                                        The payment method that we provide is to make it easier for you
                                                        to pay invoices.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-right">
                                                <div className="invoice-detail-item">
                                                    <div className="invoice-detail-name">Subtotal</div>
                                                    <div className="invoice-detail-value">${userData?.total}</div>
                                                </div>
                                                <div className="invoice-detail-item">
                                                    <div className="invoice-detail-name">Shipping</div>
                                                    <div className="invoice-detail-value">$15</div>
                                                </div>
                                                <hr className="mt-2 mb-2" />
                                                <div className="invoice-detail-item">
                                                    <div className="invoice-detail-name">Total</div>
                                                    <div className="invoice-detail-value invoice-detail-value-lg">
                                                        ${userData?.total}
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

                                    {
                                        userData?.status === "confirmed" ?
                                            (<>
                                                <button onClick={() => setStatus('complete')} className="btn btn-primary btn-icon icon-left">
                                                    <i className="fas fa-check" /> Complete
                                                </button>
                                            </>) : userData?.status === "cancelled" ? (<>
                                            </>) : userData?.status === "complete" ? (
                                                <></>
                                            ) : (<>
                                                <button onClick={() => setStatus('cancelled')} className="btn btn-danger btn-icon icon-left">
                                                    <i className="fas fa-times" /> Cancel
                                                </button>
                                                <button onClick={() => setStatus('confirmed')} className="btn btn-success btn-icon icon-left">
                                                    <i className="fas fa-check" /> Approve
                                                </button>
                                            </>)
                                    }

                                </div>
                            </div>
                        </div>

                    </div>

                </section>
            </div>

        </>

    );

} 