import React from 'react';
import "../assets/Contact.css";
import{AiOutlineInstagram} from "react-icons/ai"
import{CgMail} from "react-icons/cg"
import{FiPhone} from "react-icons/fi"
import { Link } from 'react-router-dom';
//import Layout from '../components/Layout'
function Contact() {
    return (
        <>
        <div >
                <div>
                    <h1 className='cnt'> Contact Us </h1>
                </div>
                <div>
                    <p className='contactpara'>
                    We are proud to have a team of dedicated and compassionate caregivers who are committed to providing the highest standard of care. Each member of our team undergoes thorough screening, training, and background checks to ensure the safety and well-being of our clients.
                    </p>
                </div>
            </div>

                <Link to="https://www.instagram.com/">
                    <div >
                        <h1 className='insta'><AiOutlineInstagram/></h1>
                        <p className='instaid'>- homage.nk</p>
                    </div>
                </Link>
                <Link to="https://mail.google.com/">
                    <div >
                        <h1 className='gmail'><CgMail/></h1>
                        <p className='gmailid'>- homage@gmail.com</p>
                    </div>
                </Link>
                <div >
                    <h2 className='phone'><FiPhone/></h2>
                    <p className='phoneid'>- +91 7867972099</p>
                </div>

        </>
    )
}

export default Contact