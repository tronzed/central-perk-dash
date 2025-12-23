import './App.css'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar';
import Header from './components/Header';

import Home from './pages/Home'
import Order from './pages/order/Order'
import Menu from './pages/menu/Menu'
import TableBooking from './pages/table_booking/TableBooking'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomersFeedback from './pages/feedback/CustomersFeedback';
import AddMenu from './pages/menu/AddMenu';
import EditMenu from './pages/menu/EditMenu';
import ViewBooking from './pages/table_booking/ViewBooking';
import ViewFeedback from './pages/feedback/ViewFeedback';
import ViewOrder from './pages/order/ViewOrder';

function App() {

  return ( 
    <>

      <BrowserRouter>

        <div id="app">
          <div className="main-wrapper main-wrapper-1">

            <Header />
            <Sidebar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/order" element={<Order />} />
              <Route path="/view-order" element={<ViewOrder />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/customer-feedback" element={<CustomersFeedback/>} />
              <Route path="/view-feedback" element={<ViewFeedback/>} />
              <Route path="/table-booking" element={<TableBooking />} />
              <Route path="/view-booking" element={<ViewBooking />} />
              <Route path="/add-menu" element={<AddMenu/>} />
              <Route path="/edit-menu" element={<EditMenu/>} />
            </Routes>

            {/* <Footer /> */}

          </div>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
