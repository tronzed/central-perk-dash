import './App.css'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar';
import Header from './components/Header';

import Home from './pages/Home'
import Order from './pages/Order'
import Menu from './pages/Menu'
import Table_booking from './pages/Table_booking'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomersFeedback from './pages/CustomersFeedback';

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
              <Route path="/menu" element={<Menu />} />
              <Route path="/customer-feedback" element={<CustomersFeedback/>} />
              <Route path="/table-booking" element={<Table_booking />} />
            </Routes>

            {/* <Footer /> */}

          </div>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
