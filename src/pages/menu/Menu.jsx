import { Link, Links } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";

import { getMenu, deleteMenuItem } from '../../utils/functions'
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Menu() {

    const [menuData, setMenuData] = useState();

    const getMenuItmes = async () => {
        const data = await getMenu();
        setMenuData(data);
    };


    const handleDel = async (val) => {

        try {

            const result = await deleteMenuItem(val);

            if (result) {
                toast.success('Item Deleted !');
                getMenuItmes();

            } else {
                toast.error('Having trouble deleting item!');
            }

        } catch (error) {
            console.error(error);
        }

    }


    useEffect(() => {
        (async () => {
            const data = await getMenu();
            setMenuData(data);
        })();
    }, []);

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
                                                <th className="">Name</th>
                                                <th>Food Type</th>
                                                <th>Price</th>
                                                <th>Status</th>
                                                <th style={{ width: '200px' }}>Action</th>
                                            </tr>


                                            {

                                                menuData?.map((value, key) => (
                                                    <>

                                                        <tr key={key}>
                                                            <td>{key + 1}</td>
                                                            <td>{value?.name || 'N/A'}</td>
                                                            <td>{value?.type || 'N/A'}</td>
                                                            <td>{value?.price || 'N/A'}</td>
                                                            <td>{value?.status ? <span class="badge badge-success">Available</span> : <span class="badge badge-danger">Out of Stock</span>}</td>
                                                            <td>
                                                                <div className="table_action_box">
                                                                    <button onClick={() => { handleDel(value?.id); getMenuItmes() }} className="btn btn-outline-danger">
                                                                        Delete
                                                                    </button>
                                                                    <Link to={'/edit-menu/' + value?.id} className="btn btn-outline-secondary">
                                                                        Edit
                                                                    </Link>
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