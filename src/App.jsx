import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import{Routes,Route} from "react-router-dom"
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Loginpopup from './components/Loginpopup/Loginpopup'

const App = () => {

  const [showLogin,setShowLogin] = useState(false);




  return (
    <>
    {showLogin ? <Loginpopup setShowLogin={setShowLogin} /> : <> </>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
      </Routes>
    </div>

    <Footer />
    </>

  )
}

export default App