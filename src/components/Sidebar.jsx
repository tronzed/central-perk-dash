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
                        <li className="dropdown">
                            <a href="#" className="nav-link has-dropdown">
                                <i className="fas fa-fire" />
                                <span>Dashboard</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="nav-link" href="index-0.html">
                                        General Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="index.html">
                                        Ecommerce Dashboard
                                    </a>
                                </li>
                            </ul>
                        </li>
                       
                        <li>
                            <a className="nav-link" href="blank.html">
                                <i className="far fa-square" /> <span>Blank Page</span>
                            </a>
                        </li>
                
                  
                       
                       
                   
                    
                     
                        <li>
                            <a className="nav-link" href="credits.html">
                                <i className="fas fa-pencil-ruler" /> <span>Credits</span>
                            </a>
                        </li>
                    </ul>
                    
                </aside>
            </div>

        </>

    );
}