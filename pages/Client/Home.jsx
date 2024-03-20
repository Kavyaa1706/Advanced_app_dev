import React, { useState, useEffect } from 'react'
import { Navbar } from '../../components/Navbar'
import img from "../../assets/bgg.jpg";
import img1 from "../../assets/care_2.jpg";
import img2 from "../../assets/care_3.png";
import img3 from "../../assets/care_sup_1.png";
import img4 from "../../assets/care_sup_2.png";
import img5 from "../../assets/care_sup_3.png";
import "../../assets/Homepage.css";
//import Login from './Login';
import Contact from '../Contact';
//import {GiPartyPopper} from "react-icons/gi"
import { Footer } from '../../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { Facebook, Instagram, Github } from 'lucide-react'
const Home = () => {
    const nav = useNavigate()

    const routeProducts = () => {
        nav('/products')
    }


    return (
        <>
            <div className='mainx'>
                <Navbar/>
            </div>
           <div>
            <img className='bgb1 app-x-shadow' src={img1}></img>
           </div>
           <div>
            <img className='bgb' src={img}></img>
           </div>
           <div>
            <div>
                <h2  className='book_head'>Book Home Care Services
                  <br/>  Available 24/7</h2>
            </div>
            <div>
                <p className='book_para'>Get help with running errands, showering, toileting, companionship<br/> and other care support for your loved ones<br/> at home</p>
            </div>
            <div>
                <Link to="/user/dashboard">
                    <button className='get_button'>
                        Get Care Now
                    </button>
                </Link>
            </div>
            <div>
                <h3 className='care_ser'>What are home care services ?</h3>
                <p className='care_para'>
                Home care covers a range of care services, from basic personal care such as showering, to respite care, companionship and specialised care in the comfort of home.<br/> We aim to support those in our communities to continue living at home while receiving the support that they need.
                </p>
            </div>
           </div>
           <div>
            <img className='care_wheel_pic' src={img2}></img>
           </div>
           <div>
            <h2 className='offer'>
            What we offer
            </h2>
            <p className='care_offer_ser'>Our trained Care Professionals are able to help your loved ones out with the following activities:<br/><br/>

1. Personal hygiene<br/>
2. Light mobility exercises<br/>
3. Assistance with daily living<br/>
4. Companionship<br/>
5. Meal preparations and grocery shopping<br/>
6. Bed transfer<br/>
7. Medication reminders<br/>
8. Activities for dementia patients<br/>
9. Night care<br/>
10. Post-surgery care<br/>
11. Dementia care<br/>
12. Medical appointment escort<br/>
13. Vital signs monitoring<br/>
14. Check-in visits<br/>
<br/>
Our Care Pros are also able to assess potential safety risks in your home environment. They are able to recommend simple home modifications, such as placing a rug on a slippery floor, or installing grab bars in the toilets for seniors with high fall risk.</p>
           </div>
           <div>
            <h2 className='care_support'>
            Get support from our home care professionals 
            </h2>
           </div>
           <div>
            <img className='care_sup_1' src={img3}></img>
            <img className='care_sup_2' src={img4}></img>
            <img className='care_sup_3' src={img5}></img>
           </div>
           <div>
            <h3 className='get_care'>Get care from experienced, licensed <br/>Care Professionals</h3>
            <h3 className='get_care1'>Smooth booking process</h3>
            <h3 className='get_care2'>Receive care from your preferred<br/> Care Professional </h3>
           </div>
           <div>
            <Footer/>
           </div>
<div className='brown'></div>
<div className='con_care'><Contact/></div>
           
        </>

       
    )
}
export default Home;
