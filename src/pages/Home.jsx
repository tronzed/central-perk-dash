import SectionHeader from "../components/SectionHeader";

export default function Home() {

    return (

        <>

            <div className="main-content" style={{ minHeight: 850 }}>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="card card-statistic-2">
                                <div className="card-stats">
                                    <div className="card-stats-title">
                                        Order Statistics -
                                        <div className="dropdown d-inline">
                                            <a
                                                className="font-weight-600 dropdown-toggle"
                                                data-toggle="dropdown"
                                                href="#"
                                                id="orders-month"
                                            >
                                                August
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-sm">
                                                <li className="dropdown-title">Select Month</li>
                                                <li>
                                                    <a href="#" className="dropdown-item">
                                                        January
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="dropdown-item">
                                                        February
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="dropdown-item">
                                                        March
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="dropdown-item">
                                                        April
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="dropdown-item">
                                                        May
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="dropdown-item">
                                                        June
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="dropdown-item">
                                                        July
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="dropdown-item active">
                                                        August
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="dropdown-item">
                                                        September
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="dropdown-item">
                                                        October
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="dropdown-item">
                                                        November
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="dropdown-item">
                                                        December
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-stats-items">
                                        <div className="card-stats-item">
                                            <div className="card-stats-item-count">24</div>
                                            <div className="card-stats-item-label">Pending</div>
                                        </div>
                                        <div className="card-stats-item">
                                            <div className="card-stats-item-count">12</div>
                                            <div className="card-stats-item-label">Shipping</div>
                                        </div>
                                        <div className="card-stats-item">
                                            <div className="card-stats-item-count">23</div>
                                            <div className="card-stats-item-label">Completed</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-icon shadow-primary bg-primary">
                                    <i className="fas fa-archive" />
                                </div>
                                <div className="card-wrap">
                                    <div className="card-header">
                                        <h4>Total Orders</h4>
                                    </div>
                                    <div className="card-body">59</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="card card-statistic-2">
                                <div className="card-chart">
                                    <div
                                        className="chartjs-size-monitor"
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            overflow: "hidden",
                                            pointerEvents: "none",
                                            visibility: "hidden",
                                            zIndex: -1
                                        }}
                                    >
                                        <div
                                            className="chartjs-size-monitor-expand"
                                            style={{
                                                position: "absolute",
                                                left: 0,
                                                top: 0,
                                                right: 0,
                                                bottom: 0,
                                                overflow: "hidden",
                                                pointerEvents: "none",
                                                visibility: "hidden",
                                                zIndex: -1
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    width: 1000000,
                                                    height: 1000000,
                                                    left: 0,
                                                    top: 0
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="chartjs-size-monitor-shrink"
                                            style={{
                                                position: "absolute",
                                                left: 0,
                                                top: 0,
                                                right: 0,
                                                bottom: 0,
                                                overflow: "hidden",
                                                pointerEvents: "none",
                                                visibility: "hidden",
                                                zIndex: -1
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    width: "200%",
                                                    height: "200%",
                                                    left: 0,
                                                    top: 0
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <canvas
                                        id="balance-chart"
                                        height={123}
                                        width={522}
                                        style={{ display: "block", width: 522, height: 123 }}
                                        className="chartjs-render-monitor"
                                    />
                                </div>
                                <div className="card-icon shadow-primary bg-primary">
                                    <i className="fas fa-dollar-sign" />
                                </div>
                                <div className="card-wrap">
                                    <div className="card-header">
                                        <h4>Balance</h4>
                                    </div>
                                    <div className="card-body">$187,13</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="card card-statistic-2">
                                <div className="card-chart">
                                    <div
                                        className="chartjs-size-monitor"
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            overflow: "hidden",
                                            pointerEvents: "none",
                                            visibility: "hidden",
                                            zIndex: -1
                                        }}
                                    >
                                        <div
                                            className="chartjs-size-monitor-expand"
                                            style={{
                                                position: "absolute",
                                                left: 0,
                                                top: 0,
                                                right: 0,
                                                bottom: 0,
                                                overflow: "hidden",
                                                pointerEvents: "none",
                                                visibility: "hidden",
                                                zIndex: -1
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    width: 1000000,
                                                    height: 1000000,
                                                    left: 0,
                                                    top: 0
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="chartjs-size-monitor-shrink"
                                            style={{
                                                position: "absolute",
                                                left: 0,
                                                top: 0,
                                                right: 0,
                                                bottom: 0,
                                                overflow: "hidden",
                                                pointerEvents: "none",
                                                visibility: "hidden",
                                                zIndex: -1
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    width: "200%",
                                                    height: "200%",
                                                    left: 0,
                                                    top: 0
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <canvas
                                        id="sales-chart"
                                        height={123}
                                        width={522}
                                        style={{ display: "block", width: 522, height: 123 }}
                                        className="chartjs-render-monitor"
                                    />
                                </div>
                                <div className="card-icon shadow-primary bg-primary">
                                    <i className="fas fa-shopping-bag" />
                                </div>
                                <div className="card-wrap">
                                    <div className="card-header">
                                        <h4>Revenue</h4>
                                    </div>
                                    <div className="card-body">4,732</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row hide_me">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Best Products</h4>
                                </div>
                                <div className="card-body">
                                    <div
                                        className="owl-carousel owl-theme owl-loaded owl-drag"
                                        id="products-carousel"
                                    >
                                        <div className="owl-stage-outer">
                                            <div
                                                className="owl-stage"
                                                style={{
                                                    transform: "translate3d(-1237px, 0px, 0px)",
                                                    transition: "0.25s",
                                                    width: 2228
                                                }}
                                            >
                                                <div
                                                    className="owl-item cloned"
                                                    style={{ width: "237.5px", marginRight: 10 }}
                                                >
                                                    <div>
                                                        <div className="product-item pb-3">
                                                            <div className="product-image">
                                                                <img
                                                                    alt="image"
                                                                    src="assets/img/products/product-4-50.png"
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <div className="product-details">
                                                                <div className="product-name">iBook Pro 2018</div>
                                                                <div className="product-review">
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="text-muted text-small">67 Sales</div>
                                                                <div className="product-cta">
                                                                    <a href="#" className="btn btn-primary">
                                                                        Detail
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="owl-item cloned"
                                                    style={{ width: "237.5px", marginRight: 10 }}
                                                >
                                                    <div>
                                                        <div className="product-item">
                                                            <div className="product-image">
                                                                <img
                                                                    alt="image"
                                                                    src="assets/img/products/product-3-50.png"
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <div className="product-details">
                                                                <div className="product-name">oPhone S9 Limited</div>
                                                                <div className="product-review">
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star-half" />
                                                                </div>
                                                                <div className="text-muted text-small">86 Sales</div>
                                                                <div className="product-cta">
                                                                    <a href="#" className="btn btn-primary">
                                                                        Detail
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="owl-item cloned"
                                                    style={{ width: "237.5px", marginRight: 10 }}
                                                >
                                                    <div>
                                                        <div className="product-item">
                                                            <div className="product-image">
                                                                <img
                                                                    alt="image"
                                                                    src="assets/img/products/product-1-50.png"
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <div className="product-details">
                                                                <div className="product-name">Headphone Blitz</div>
                                                                <div className="product-review">
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="far fa-star" />
                                                                </div>
                                                                <div className="text-muted text-small">63 Sales</div>
                                                                <div className="product-cta">
                                                                    <a href="#" className="btn btn-primary">
                                                                        Detail
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="owl-item"
                                                    style={{ width: "237.5px", marginRight: 10 }}
                                                >
                                                    <div>
                                                        <div className="product-item pb-3">
                                                            <div className="product-image">
                                                                <img
                                                                    alt="image"
                                                                    src="assets/img/products/product-4-50.png"
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <div className="product-details">
                                                                <div className="product-name">iBook Pro 2018</div>
                                                                <div className="product-review">
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="text-muted text-small">67 Sales</div>
                                                                <div className="product-cta">
                                                                    <a href="#" className="btn btn-primary">
                                                                        Detail
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="owl-item"
                                                    style={{ width: "237.5px", marginRight: 10 }}
                                                >
                                                    <div>
                                                        <div className="product-item">
                                                            <div className="product-image">
                                                                <img
                                                                    alt="image"
                                                                    src="assets/img/products/product-3-50.png"
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <div className="product-details">
                                                                <div className="product-name">oPhone S9 Limited</div>
                                                                <div className="product-review">
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star-half" />
                                                                </div>
                                                                <div className="text-muted text-small">86 Sales</div>
                                                                <div className="product-cta">
                                                                    <a href="#" className="btn btn-primary">
                                                                        Detail
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="owl-item active"
                                                    style={{ width: "237.5px", marginRight: 10 }}
                                                >
                                                    <div>
                                                        <div className="product-item">
                                                            <div className="product-image">
                                                                <img
                                                                    alt="image"
                                                                    src="assets/img/products/product-1-50.png"
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <div className="product-details">
                                                                <div className="product-name">Headphone Blitz</div>
                                                                <div className="product-review">
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="far fa-star" />
                                                                </div>
                                                                <div className="text-muted text-small">63 Sales</div>
                                                                <div className="product-cta">
                                                                    <a href="#" className="btn btn-primary">
                                                                        Detail
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="owl-item cloned active"
                                                    style={{ width: "237.5px", marginRight: 10 }}
                                                >
                                                    <div>
                                                        <div className="product-item pb-3">
                                                            <div className="product-image">
                                                                <img
                                                                    alt="image"
                                                                    src="assets/img/products/product-4-50.png"
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <div className="product-details">
                                                                <div className="product-name">iBook Pro 2018</div>
                                                                <div className="product-review">
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="text-muted text-small">67 Sales</div>
                                                                <div className="product-cta">
                                                                    <a href="#" className="btn btn-primary">
                                                                        Detail
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="owl-item cloned active"
                                                    style={{ width: "237.5px", marginRight: 10 }}
                                                >
                                                    <div>
                                                        <div className="product-item">
                                                            <div className="product-image">
                                                                <img
                                                                    alt="image"
                                                                    src="assets/img/products/product-3-50.png"
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <div className="product-details">
                                                                <div className="product-name">oPhone S9 Limited</div>
                                                                <div className="product-review">
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star-half" />
                                                                </div>
                                                                <div className="text-muted text-small">86 Sales</div>
                                                                <div className="product-cta">
                                                                    <a href="#" className="btn btn-primary">
                                                                        Detail
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="owl-item cloned"
                                                    style={{ width: "237.5px", marginRight: 10 }}
                                                >
                                                    <div>
                                                        <div className="product-item">
                                                            <div className="product-image">
                                                                <img
                                                                    alt="image"
                                                                    src="assets/img/products/product-1-50.png"
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <div className="product-details">
                                                                <div className="product-name">Headphone Blitz</div>
                                                                <div className="product-review">
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="far fa-star" />
                                                                </div>
                                                                <div className="text-muted text-small">63 Sales</div>
                                                                <div className="product-cta">
                                                                    <a href="#" className="btn btn-primary">
                                                                        Detail
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-nav disabled">
                                            <div className="owl-prev">prev</div>
                                            <div className="owl-next">next</div>
                                        </div>
                                        <div className="owl-dots disabled">
                                            <div className="owl-dot active">
                                                <span />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Top Countries</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="text-title mb-2">July</div>
                                            <ul className="list-unstyled list-unstyled-border list-unstyled-noborder mb-0">
                                                <li className="media">
                                                    <img
                                                        className="img-fluid mt-1 img-shadow"
                                                        src="assets/modules/flag-icon-css/flags/4x3/id.svg"
                                                        alt="image"
                                                        width={40}
                                                    />
                                                    <div className="media-body ml-3">
                                                        <div className="media-title">Indonesia</div>
                                                        <div className="text-small text-muted">
                                                            3,282 <i className="fas fa-caret-down text-danger" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <img
                                                        className="img-fluid mt-1 img-shadow"
                                                        src="assets/modules/flag-icon-css/flags/4x3/my.svg"
                                                        alt="image"
                                                        width={40}
                                                    />
                                                    <div className="media-body ml-3">
                                                        <div className="media-title">Malaysia</div>
                                                        <div className="text-small text-muted">
                                                            2,976 <i className="fas fa-caret-down text-danger" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <img
                                                        className="img-fluid mt-1 img-shadow"
                                                        src="assets/modules/flag-icon-css/flags/4x3/us.svg"
                                                        alt="image"
                                                        width={40}
                                                    />
                                                    <div className="media-body ml-3">
                                                        <div className="media-title">United States</div>
                                                        <div className="text-small text-muted">
                                                            1,576 <i className="fas fa-caret-up text-success" />
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6 mt-sm-0 mt-4">
                                            <div className="text-title mb-2">August</div>
                                            <ul className="list-unstyled list-unstyled-border list-unstyled-noborder mb-0">
                                                <li className="media">
                                                    <img
                                                        className="img-fluid mt-1 img-shadow"
                                                        src="assets/modules/flag-icon-css/flags/4x3/id.svg"
                                                        alt="image"
                                                        width={40}
                                                    />
                                                    <div className="media-body ml-3">
                                                        <div className="media-title">Indonesia</div>
                                                        <div className="text-small text-muted">
                                                            3,486 <i className="fas fa-caret-up text-success" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <img
                                                        className="img-fluid mt-1 img-shadow"
                                                        src="assets/modules/flag-icon-css/flags/4x3/ps.svg"
                                                        alt="image"
                                                        width={40}
                                                    />
                                                    <div className="media-body ml-3">
                                                        <div className="media-title">Palestine</div>
                                                        <div className="text-small text-muted">
                                                            3,182 <i className="fas fa-caret-up text-success" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <img
                                                        className="img-fluid mt-1 img-shadow"
                                                        src="assets/modules/flag-icon-css/flags/4x3/de.svg"
                                                        alt="image"
                                                        width={40}
                                                    />
                                                    <div className="media-body ml-3">
                                                        <div className="media-title">Germany</div>
                                                        <div className="text-small text-muted">
                                                            2,317 <i className="fas fa-caret-down text-danger" />
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Invoices</h4>
                                    <div className="card-header-action">
                                        <a href="#" className="btn btn-danger">
                                            View More <i className="fas fa-chevron-right" />
                                        </a>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <div className="table-responsive table-invoice">
                                        <table className="table table-striped">
                                            <tbody>
                                                <tr>
                                                    <th>Invoice ID</th>
                                                    <th>Customer</th>
                                                    <th>Status</th>
                                                    <th>Due Date</th>
                                                    <th>Action</th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="#">INV-87239</a>
                                                    </td>
                                                    <td className="font-weight-600">Kusnadi</td>
                                                    <td>
                                                        <div className="badge badge-warning">Unpaid</div>
                                                    </td>
                                                    <td>July 19, 2018</td>
                                                    <td>
                                                        <a href="#" className="btn btn-primary">
                                                            Detail
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="#">INV-48574</a>
                                                    </td>
                                                    <td className="font-weight-600">Hasan Basri</td>
                                                    <td>
                                                        <div className="badge badge-success">Paid</div>
                                                    </td>
                                                    <td>July 21, 2018</td>
                                                    <td>
                                                        <a href="#" className="btn btn-primary">
                                                            Detail
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="#">INV-76824</a>
                                                    </td>
                                                    <td className="font-weight-600">Muhamad Nuruzzaki</td>
                                                    <td>
                                                        <div className="badge badge-warning">Unpaid</div>
                                                    </td>
                                                    <td>July 22, 2018</td>
                                                    <td>
                                                        <a href="#" className="btn btn-primary">
                                                            Detail
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="#">INV-84990</a>
                                                    </td>
                                                    <td className="font-weight-600">Agung Ardiansyah</td>
                                                    <td>
                                                        <div className="badge badge-warning">Unpaid</div>
                                                    </td>
                                                    <td>July 22, 2018</td>
                                                    <td>
                                                        <a href="#" className="btn btn-primary">
                                                            Detail
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="#">INV-87320</a>
                                                    </td>
                                                    <td className="font-weight-600">Ardian Rahardiansyah</td>
                                                    <td>
                                                        <div className="badge badge-success">Paid</div>
                                                    </td>
                                                    <td>July 28, 2018</td>
                                                    <td>
                                                        <a href="#" className="btn btn-primary">
                                                            Detail
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-hero">
                                <div className="card-header">
                                    <div className="card-icon">
                                        <i className="far fa-question-circle" />
                                    </div>
                                    <h4>14</h4>
                                    <div className="card-description">Customer Feedbacks</div>
                                </div>
                                <div className="card-body p-0">
                                    <div className="tickets-list">
                                        <a href="#" className="ticket-item">
                                            <div className="ticket-title">
                                                <h4>Food was delicious and delivered on time.</h4>
                                            </div>
                                            <div className="ticket-info">
                                                <div>Laila Tazkiah</div>
                                                <div className="bullet" />
                                                <div className="text-primary">1 min ago</div>
                                            </div>
                                        </a>
                                        <a href="#" className="ticket-item">
                                            <div className="ticket-title">
                                                <h4>Great taste, but packaging could be better.</h4>
                                            </div>
                                            <div className="ticket-info">
                                                <div>Rizal Fakhri</div>
                                                <div className="bullet" />
                                                <div>2 hours ago</div>
                                            </div>
                                        </a>
                                        <a href="#" className="ticket-item">
                                            <div className="ticket-title">
                                                <h4>Delivery was delayed and food was cold.</h4>
                                            </div>
                                            <div className="ticket-info">
                                                <div>Syahdan Ubaidillah</div>
                                                <div className="bullet" />
                                                <div>6 hours ago</div>
                                            </div>
                                        </a>
                                        <a
                                            href="features-tickets.html"
                                            className="ticket-item ticket-more"
                                        >
                                            View All <i className="fas fa-chevron-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </>

    );

} 