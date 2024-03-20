import React from 'react'
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';
import {IoCaretBackOutline} from "react-icons/io5";
import FaqSVG from '../../assets/ico/faq.webp';
import '../../assets/css/FAQ.css'
export const FAQ = () => {
    return (
        <div className='main'>
            <Navbar />
            <div className='etc-wrapper'>
                <div className='etc-container shadow'>
                    {/* <h1 className='primary etc-title shadow'> Frequently Asked Questions </h1> */}
                    {/* <img src={FaqSVG} alt="login-img" className='auth-svg' /> */}
                    <span className='etc-datax'>
                    <div className='backkk'>
            <Link className='iocare' to='/'>
                <IoCaretBackOutline></IoCaretBackOutline>
            </Link>
              </div>
                    <h1 className='faqhead'>Frequently Asked Questions</h1>
                        <div className="faq">
                            <input id="faq-a" type="checkbox" checked/>
                            <label htmlFor="faq-a">
                                <p className="faq-heading">1. What is your payment information ?</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">As people have different prefered methods, such as credit, debit, PayPal, etc you can make payment through these methods.</p>
                            </label>
                            <input id="faq-b" type="checkbox" />
                            <label htmlFor="faq-b">
                                <p className="faq-heading">2. Are discounts available?</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">There are discounts according to the event your booking, you can find them in your particular event booking registration form.</p>
                            </label>
                            <input id="faq-c" type="checkbox" />
                            <label htmlFor="faq-c">
                                <p className="faq-heading">3. How much duration it takes to complete our work?</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">We'll assign managers to decorate the required event and organize it so it takes 1 day.</p>
                            </label>
                            <input id="faq-d" type="checkbox" />
                            <label htmlFor="faq-d">
                                <p className="faq-heading">4. How much in advance should I book to avail your services?</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">You can pre-book the event in 2-3 weeks.</p>
                            </label>
                            <input id="faq-e" type="checkbox" />
                            <label htmlFor="faq-e">
                                <p className="faq-heading">5. Can I select my own package?</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">Yes, you can choose. We do customized packages.</p>
                            </label>
                            <input id="settings" type="checkbox" />
                            
                        </div>

                        <br />
                    </span>
                </div>
            </div>
            <Footer />
        </div>
    )
}
