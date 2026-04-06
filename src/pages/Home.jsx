import { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";

import { getOrder, getMenu, getFeedback } from '../utils/functions'
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

export default function Home() {


    const [orderData, setOrderData] = useState();
    const [orderTotal, setOrderTotal] = useState();

    const [feedbackData, setFeedbackData] = useState();
    const [feedbackTotal, setFeedbackTotal] = useState();

    const [orderPending, setOrderPending] = useState();
    const [orderConfirmed, setOrderConfirmed] = useState();
    const [orderCompleted, setOrderCompleted] = useState();
    const [orderCancel, setOrderCancel] = useState();

    const [balance, setBalance] = useState();

    const [menuCount, setMenuCount] = useState();

    const [showLoader, setShowLoader] = useState(true);

    const getData = async () => {

        const data = await getOrder();

        const menuData = await getMenu();

        const feedbackData = await getFeedback();


        const result = data.flatMap(obj =>
            Object.values(obj)
        ).flatMap(obj =>
            Object.entries(obj).map(([key, value]) => ({
                id: key,
                ...value
            }))
        );

        setOrderTotal(result.length);

        setOrderConfirmed(result.filter(item => item.status === "confirmed").length);
        setOrderCompleted(result.filter(item => item.status === "complete").length);
        setOrderCancel(result.filter(item => item.status === "cancelled").length);
        setOrderPending(result.filter(item => item.status === undefined).length);

        setBalance(result.map(item => item.total).reduce((a, b) => a + b, 0));
        setMenuCount(menuData.length);

        setFeedbackTotal(feedbackData.length);
        setOrderData(result);
        setFeedbackData(feedbackData);

        setShowLoader(false);

    }

    useEffect(() => {
        getData();
    }, [])

    return (

        <>

            <Loader show={showLoader}/>

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
                                            <div className="card-stats-item-count">{orderPending || "0"}</div>
                                            <div className="card-stats-item-label">Pending</div>
                                        </div>
                                        <div className="card-stats-item">
                                            <div className="card-stats-item-count">{orderCancel || '0'}</div>
                                            <div className="card-stats-item-label">Canceled</div>
                                        </div>
                                        <div className="card-stats-item">
                                            <div className="card-stats-item-count">{orderConfirmed || '0'}</div>
                                            <div className="card-stats-item-label">Confirmed</div>
                                        </div>
                                        <div className="card-stats-item">
                                            <div className="card-stats-item-count">{orderCompleted || "0"}</div>
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
                                    <div className="card-body">{orderTotal}</div>
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
                                    <div className="card-body">{'$' + balance || 'N/A'} </div>
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
                                        <h4>Menu Items</h4>
                                    </div>
                                    <div className="card-body">{menuCount || 'N/A'}</div>
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
                                    <h4>Order</h4>
                                    <div className="card-header-action">
                                        <Link to="/order" className="btn btn-danger">
                                            View More <i className="fas fa-chevron-right" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <div className="table-responsive table-invoice">
                                        <table className="table table-striped">
                                            <tbody>
                                                <tr>
                                                    <th>Order ID</th>
                                                    <th>Customer</th>
                                                    <th>Status</th>
                                                    <th>Due Date</th>
                                                    <th>Action</th>
                                                </tr>


                                                {

                                                    orderData?.slice(0, 5)?.map((value, key) => (
                                                        <>
                                                            <tr className="ticket-item">
                                                                <td>{value?.orderId || 'N/A'}</td>
                                                                <td>{value?.userName || 'N/A'}</td>

                                                                <td> {
                                                                    value?.status == "confirmed" ? (
                                                                        <span className="badge badge-success">Confirmed</span>
                                                                    ) : value?.status == "cancelled" ? (
                                                                        <span className="badge badge-danger">Cancelled</span>
                                                                    ) : value?.status == "complete" ? (
                                                                        <span className="badge badge-primary">Complete</span>
                                                                    ) : (
                                                                        <span className="badge badge-warning">Pending</span>
                                                                    )
                                                                } </td>


                                                                <td>{value?.date || 'N/A'}</td>
                                                                <td>
                                                                    <Link to={'/view-order/' + value?.id} state={{ userId: value.userId, orderId: value.orderId }} className="btn btn-outline-secondary">
                                                                        View
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    ))

                                                }

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
                                    <h4>{feedbackTotal || 'N/A'}</h4>
                                    <div className="card-description">Customer Feedbacks</div>
                                </div>
                                <div className="card-body p-0">
                                    <div className="tickets-list">

                                        {

                                            feedbackData?.slice(0, 4)?.map((value, key) => (

                                                <>

                                                    <span className="ticket-item">
                                                        <div className="ticket-title">
                                                            <h4>{value.review}</h4>
                                                        </div>
                                                        <div className="ticket-info">
                                                            {/* <div>Laila Tazkiah</div> */}
                                                            {/* <div className="bullet" /> */}
                                                            <div className="text-primary">{value.date}</div>
                                                        </div>
                                                    </span>

                                                </>

                                            ))

                                        }

                                        <Link
                                            to="/customer-feedback"
                                            className="ticket-item ticket-more"
                                        >
                                            View All <i className="fas fa-chevron-right" />
                                        </Link>
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