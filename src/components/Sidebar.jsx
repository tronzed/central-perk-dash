import { Link } from "react-router-dom";

export default function Sidebar() {
    return (

        <>

            <div className="main-sidebar sidebar-style-2">
                <aside id="sidebar-wrapper">
                    <div className="sidebar-brand">
                        <a href="index.html"> <img className="img-res" src='../assets/img/logo_ms.png' alt="" /> </a>
                    </div>
                    <div className="sidebar-brand sidebar-brand-sm">
                        <a href="index.html">St</a>
                    </div>
                    <ul className="sidebar-menu">
                        <li>
                            <Link className="nav-link" to="/">
                                <i className="fas fa-pencil-ruler" /> <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="order">
                                <i className="fas fa-pencil-ruler" /> <span>Order</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="menu">
                                <i className="fas fa-pencil-ruler" /> <span>Menu</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="customer-feedback">
                                <i className="fas fa-pencil-ruler" /> <span>Customer Feedback</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="table-booking">
                                <i className="fas fa-pencil-ruler" /> <span>Table Booking</span>
                            </Link>
                        </li>
                    </ul>
                    
                </aside>
            </div>

        </>

    );
}