import './App.css'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar';
import Header from './components/Header';

import Home from './pages/Home'
import Order from './pages/Order'
import Menu from './pages/Menu'
import Customers_Feedback from './pages/Customers_Feedback'
import Table_booking from './pages/Table_booking'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
              <Route path="/customer-feedback" element={<Customers_Feedback />} />
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
