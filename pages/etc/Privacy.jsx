import React from 'react'
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import {IoCaretBackOutline} from "react-icons/io5";
import { Link } from 'react-router-dom';
import PrivacySVG from '../../assets/ico/privacy.webp';
export const Privacy = () => {
  return (
    <div className='main'>
      <Navbar />
      <div className='etc-wrapper'>
        <div className='etc-container shadow'>
          {/* <h1 className='primary etc-title shadow'> Privacy Policy</h1> */}
          {/* <img src={PrivacySVG} alt="login-img" className='auth-svg' /> */}
          <p className='etc-data'>
              <div className='backk'>
            <Link className='iocare' to='/'>
                <IoCaretBackOutline></IoCaretBackOutline>
            </Link>
              </div>
            <h1 className='headd'>Privacy Policy</h1> <br/><br/>

            Welcome to Crystal Events. Protecting your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use our platform.
            <br /><br />
            1.Information Collection: We collect personal information, such as your name, email address, phone number, and payment information when you sign up for an account or use our services. Additionally, we gather event-related details, user-generated content, usage information, and employ cookies and similar technologies to enhance your experience.
            <br /><br />
            2. Use of Information: Your information is utilized to provide services like venue bookings, vendor connections, and event management tools. We may also personalize your experience, send important updates, analyze user behavior for improvements, and, if you opt-in, deliver marketing communications. Compliance with legal obligations is another purpose for which your data may be used.
            <br /><br />
            3. Data Sharing: We may share your information with event attendees, organizers, vendors, and service providers to facilitate event planning and platform operation. In response to legal requirements, we may disclose information to legal authorities. Your privacy remains a priority, and we take steps to protect your data.
            <br /><br/>
            4. Data Security: We employ reasonable measures to safeguard your information from unauthorized access, disclosure, alteration, or destruction. Although no online transmission is entirely secure, we strive to maintain the security of your data.
            <br /><br />
            5. Your Rights: You have rights regarding your data, including access, deletion, and the ability to opt-out of marketing communications. You can also manage cookie preferences in your browser settings. Please contact us with any questions or concerns regarding your privacy.
            <br /><br/>
            This Privacy Policy may be updated to reflect changes in our practices or to comply with legal requirements. We will notify you of significant changes through email or on our platform. Thank you for trusting Crystal Events.
            <br /><br />
            <br />
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
