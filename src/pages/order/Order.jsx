import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import { useEffect, useState } from "react";

import { getOrder } from '../../utils/functions'

export default function Order() {


    const [data, setData] = useState();

    const getData = async () => {
        const data = await getOrder();
        setData(data);
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

                        <div className="card">
                            <div className="card-header">
                                <h4>Orders</h4>
                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive">

                                    <table className="table table-striped table-md">
                                        <tbody>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Customer Name</th>
                                                <th>Items</th>
                                                <th>Total Amount (₹)</th>
                                                <th>Order Type</th>
                                                <th>Order Status</th>
                                                <th>Order Date</th>
                                                <th>Actions</th>
                                            </tr>

                                            {
                                                data?.map((value, key) => {

                                                    const data2 = Object.values(value);

                                                    const data3 = [];

                                                    for (const item of data2) {

                                                        const [key, val] = Object.entries(item)[0];

                                                        data3.push({
                                                            id: key,
                                                            ...val
                                                        })

                                                    }

                                                    return (

                                                        data3?.map((value2, key) => (
                                                            <>
                                                                <tr>
                                                                    <td>{value2.orderId || 'N/A'}</td>
                                                                    <td>{value2.userName || 'N/A'}</td>
                                                                    <td>{

                                                                        value2.cartData.map((value, key) => {
                                                                            return (
                                                                                <>
                                                                                    <span>{value?.name}</span>
                                                                                    <span>x</span>
                                                                                </>
                                                                            );
                                                                        })

                                                                    }</td>
                                                                    <td>{'$' + value2.total || 'N/A'}</td>
                                                                    <td>{value2.orderType || 'N/A'}</td>
                                                                    <td> {
                                                                        value2?.status == "confirmed" ? (
                                                                            <span className="badge badge-success">Confirmed</span>
                                                                        ) : value2?.status == "cancelled" ? (
                                                                            <span className="badge badge-danger">Cancelled</span>
                                                                        ) : value2?.status == "complete" ? (
                                                                            <span className="badge badge-primary">Complete</span>
                                                                        ) : (
                                                                            <span className="badge badge-warning">Pending</span>
                                                                        )
                                                                    } </td>
                                                                    <td>{value2.date || 'N/A'}</td>
                                                                    <td>
                                                                        <div className="table_action_box">
                                                                            <Link to={'/view-order/' + value2?.id} state={{ userId: value2.userId, orderId: value2.orderId }} className="btn btn-outline-secondary">
                                                                                View
                                                                            </Link>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </>
                                                        ))

                                                    );

                                                })

                                            }


                                        </tbody>
                                    </table>

                                    <table className="table table-striped table-md hide_me">
                                        <tbody>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Customer Name</th>
                                                <th>Items</th>
                                                <th>Total Amount (₹)</th>
                                                <th>Order Type</th>
                                                <th>Order Status</th>
                                                <th>Order Date</th>
                                                <th>Actions</th>
                                            </tr>
                                            <tr>
                                                <td>#ORD1025</td>
                                                <td>John Doe</td>
                                                <td>Cheese Burger ×1, Fries ×1</td>
                                                <td>349</td>
                                                <td>Delivery</td>
                                                <td><span className="badge badge-warning">Preparing</span></td>
                                                <td>22 Dec 2025, 7:45 PM</td>
                                                <td>
                                                    <div className="table_action_box">
                                                        <a href="#" className="btn btn-outline-danger">
                                                            Delete
                                                        </a>
                                                        <a href="#" className="btn btn-outline-secondary">
                                                            Update
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#ORD1026</td>
                                                <td>John Doe</td>
                                                <td>Paneer Pizza ×1, Garlic Bread ×1</td>
                                                <td>599</td>

                                                <td>Delivery</td>
                                                <td><span class="badge badge-info">Out for Delivery</span></td>
                                                <td>22 Dec 2025, 8:10 PM</td>
                                                <td>
                                                    <div className="table_action_box">
                                                        <a href="#" className="btn btn-outline-danger">Delete</a>
                                                        <a href="#" className="btn btn-outline-secondary">Update</a>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>#ORD1027</td>
                                                <td>John Doe</td>
                                                <td>Veg Biryani ×2</td>
                                                <td>480</td>
                                                <td>Takeaway</td>
                                                <td><span class="badge badge-secondary">Pending</span></td>
                                                <td>22 Dec 2025, 8:25 PM</td>
                                                <td>
                                                    <div className="table_action_box">
                                                        <a href="#" className="btn btn-outline-danger">Delete</a>
                                                        <a href="#" className="btn btn-outline-secondary">Update</a>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>#ORD1028</td>
                                                <td>John Doe</td>
                                                <td>Chicken Wrap ×1, Cold Coffee ×1</td>
                                                <td>329</td>


                                                <td>Delivery</td>
                                                <td><span class="badge badge-primary">Ready</span></td>
                                                <td>22 Dec 2025, 8:40 PM</td>
                                                <td>
                                                    <div className="table_action_box">
                                                        <a href="#" className="btn btn-outline-danger">Delete</a>
                                                        <a href="#" className="btn btn-outline-secondary">Update</a>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>#ORD1029</td>
                                                <td>John Doe</td>
                                                <td>Masala Dosa ×1, Filter Coffee ×1</td>
                                                <td>189</td>
                                                <td>Delivery</td>
                                                <td><span class="badge badge-danger">Cancelled</span></td>
                                                <td>22 Dec 2025, 9:00 PM</td>
                                                <td>
                                                    <div className="table_action_box">
                                                        <a href="#" className="btn btn-outline-danger">Delete</a>
                                                        <a href="#" className="btn btn-outline-secondary">Update</a>
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