import { useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader";

import { getFeedback } from '../../utils/functions';

export default function CustomersFeedback() {


    const [feedbackBox, setFeedbackBox] = useState();

    const getData = async () => {
        const data = await getFeedback();
        setFeedbackBox(data);
        // console.log(data, '---ddd---');
    }


    useEffect(() => {

        getData();

    }, [])

    return (

        <>

            {console.log(feedbackBox, '-------data-----ddd')}

            {/* Main Content */}
            <div className="main-content">
                <section className="section">

                    <SectionHeader />

                    <div className="section-body">

                        <div className="card">
                            <div className="card-header">
                                <h4>Customer Feedback</h4>
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
                                                <th>Actions</th>
                                            </tr>


                                            {

                                                feedbackBox?.map((val, key) => (
                                                    <>
                                                        <tr>
                                                            <td>{val?.feedbackId || 'N/A'}</td>
                                                            <td>{val?.orderData?.userName || 'N/A'}</td>
                                                            <td>{val?.orderData?.orderId || 'N/A'}</td>
                                                            <td>{val?.star || 'N/A'} ⭐</td>
                                                            <td>{val?.review || 'N/A'}</td>
                                                            <td>{val?.date || 'N/A'}</td>
                                                            <td style={{width: "200px"}}>
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