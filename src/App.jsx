import './App.css'
import Sidebar from './components/Sidebar';
import Header from './components/Header';

import Home from './pages/Home'
import Order from './pages/order/Order'
import Menu from './pages/menu/Menu'
import TableBooking from './pages/table_booking/TableBooking'

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import CustomersFeedback from './pages/feedback/CustomersFeedback';
import AddMenu from './pages/menu/AddMenu';
import EditMenu from './pages/menu/EditMenu';
import ViewBooking from './pages/table_booking/ViewBooking';
import ViewFeedback from './pages/feedback/ViewFeedback';
import ViewOrder from './pages/order/ViewOrder';
import { ToastContainer } from 'react-toastify';
import Login from './pages/authbox/Login';
import SignUp from './pages/authbox/SignUp';

function AppLayout() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/sign-up";

  return (
    <div id="app">
      <div className="main-wrapper main-wrapper-1">

        {!hideLayout && <Header />}
        {!hideLayout && <Sidebar />}
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/view-order/:id" element={<ViewOrder />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/customer-feedback" element={<CustomersFeedback />} />
          <Route path="/view-feedback/:id" element={<ViewFeedback />} />
          <Route path="/table-booking" element={<TableBooking />} />
          <Route path="/view-booking/:id" element={<ViewBooking />} />
          <Route path="/add-menu" element={<AddMenu />} />
          <Route path="/edit-menu/:id" element={<EditMenu />} />

          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>

      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
