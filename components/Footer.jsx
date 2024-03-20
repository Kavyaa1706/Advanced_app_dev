import React from 'react'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-l'>
                Copyright 2023 @ Crystal Events
            </div>
            <div className='footer-r'>
                <Link className='pp' to='/privacy'>Privacy Policy</Link>
                <Link className='pp' to='/terms'>Terms & Conditions</Link>
                <Link  className='pp' to='/admin/login'>Admin</Link>
                <Link className='pp' to='/faq'>FAQ</Link>
                {/* <Link to='/feedback' className='feedback-link'>Feedback</Link> */}
            </div>
        </div>

    </div>
  )
}
