import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Home, Hexagon, ShoppingCart, User } from 'lucide-react'
import { TbHomeHeart } from "react-icons/tb";

export const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('xuserToken') != 'null');
    const navigate = useNavigate();
    const homeRoute = () => {
        navigate('/')
    }
    const AboutUsRoute = () => {
        navigate('/pages/AboutUs')
    }
    const productRoute = () => {
        navigate('/products')
    }
    const cartRoute = () => {       
        navigate('/cart')
    }
    const authRoute = () => {
            if (!isLoggedIn) {
                navigate('/login');
            }
            else{
                navigate('/user/dashboard')
            }
    }
    return (
        <div>

            <div className='navbar shadow'>
                <div className='navbar-container'>
                    <div className='navbar-l'>
                    <div className='home-icon'>
                        <h2>
                            <TbHomeHeart />
                        </h2>
                    </div>
                    <h2 className='home' > Homage </h2>
                    </div>
                    <div className='navbar-r'>
                        <button className='navbar-btn' onClick={homeRoute}>
                            {/* <Home />  */}
                            Home
                        </button>
                        <button className='navbar-btn' onClick={AboutUsRoute}>
                            
                            About Us
                        </button>
                        <button className='navbar-btn' onClick={productRoute}>
                            {/* <Hexagon /> */}
                            Services
                        </button>
                        <button className='navbar-btn' onClick={cartRoute}>
                            {/* <MdFavoriteBorder />  */}
                            {/* Cart */}
                            Booking
                        </button>
                        <button className='navbar-btn1' onClick={authRoute}>
                           Login/SignUp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
