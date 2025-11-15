import { useState } from 'react'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>






      <BrowserRouter>

        <div id="app">
          <div className="main-wrapper main-wrapper-1">

            <Header />
            <Sidebar />

            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>

            <Footer />

          </div>
        </div>
      </BrowserRouter>






    </>
  )
}

export default App
