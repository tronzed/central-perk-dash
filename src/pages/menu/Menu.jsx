import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";

import { getMenu } from '../../utils/functions'
import { useEffect, useState } from "react";

export default function Menu() {

    const [menuData, setMenuData] = useState();

    useEffect(() => {

        (async () => {

            const data = await getMenu();

            setMenuData(data);

        })();


    }, []);

    return (

        <>

            {console.log(menuData, 'asdasd====')}

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
                                                <th className="">Name</th>
                                                <th>Food Type</th>
                                                <th>Price</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>


                                            {

                                                menuData?.map((value, key) => (
                                                    <>

                                                        <tr key={key}>
                                                            <td>{key + 1}</td>
                                                            <td>{value?.name}</td>
                                                            <td>{value?.name}</td>
                                                            <td>{value?.price}</td>
                                                            <td>{value?.name}</td>
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

                                                    </>
                                                ))

                                            }


                                            <tr>
                                                <td>1</td>
                                                <td>Cheese Burger</td>
                                                <td>Non-Veg</td>
                                                <td>199</td>
                                                <td><span class="badge badge-success">Available</span></td>
                                                <div className="table_action_box">
                                                    <a href="#" className="btn btn-outline-danger">
                                                        Delete
                                                    </a>
                                                    <a href="#" className="btn btn-outline-secondary">
                                                        Edit
                                                    </a>
                                                </div>
                                            </tr>

                                            <tr>
                                                <td>2</td>
                                                <td>Paneer Butter Masala</td>
                                                <td>Veg</td>
                                                <td>249</td>
                                                <td><span class="badge badge-success">Available</span></td>
                                                <div className="table_action_box">
                                                    <a href="#" className="btn btn-outline-danger">
                                                        Delete
                                                    </a>
                                                    <a href="#" className="btn btn-outline-secondary">
                                                        Edit
                                                    </a>
                                                </div>
                                            </tr>

                                            <tr>
                                                <td>3</td>
                                                <td>Chicken Biryani</td>
                                                <td>Non-Veg</td>
                                                <td>299</td>
                                                <td><span class="badge badge-warning">Limited</span></td>
                                                <div className="table_action_box">
                                                    <a href="#" className="btn btn-outline-danger">
                                                        Delete
                                                    </a>
                                                    <a href="#" className="btn btn-outline-secondary">
                                                        Edit
                                                    </a>
                                                </div>
                                            </tr>

                                            <tr>
                                                <td>4</td>
                                                <td>Veg Hakka Noodles</td>
                                                <td>Veg</td>
                                                <td>179</td>
                                                <td><span class="badge badge-danger">Out of Stock</span></td>
                                                <div className="table_action_box">
                                                    <a href="#" className="btn btn-outline-danger">
                                                        Delete
                                                    </a>
                                                    <a href="#" className="btn btn-outline-secondary">
                                                        Edit
                                                    </a>
                                                </div>
                                            </tr>

                                            <tr>
                                                <td>5</td>
                                                <td>Margherita Pizza</td>
                                                <td>Veg</td>
                                                <td>329</td>
                                                <td><span class="badge badge-success">Available</span></td>
                                                <div className="table_action_box">
                                                    <a href="#" className="btn btn-outline-danger">
                                                        Delete
                                                    </a>
                                                    <a href="#" className="btn btn-outline-secondary">
                                                        Edit
                                                    </a>
                                                </div>
                                            </tr>

                                            <tr>
                                                <td>6</td>
                                                <td>Chicken Shawarma</td>
                                                <td>Non-Veg</td>
                                                <td>219</td>
                                                <td><span class="badge badge-secondary">Inactive</span></td>
                                                <div className="table_action_box">
                                                    <a href="#" className="btn btn-outline-danger">
                                                        Delete
                                                    </a>
                                                    <a href="#" className="btn btn-outline-secondary">
                                                        Edit
                                                    </a>
                                                </div>
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