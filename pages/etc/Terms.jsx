import React from 'react'
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';
import {IoCaretBackOutline} from "react-icons/io5";
import PrivacySVG from '../../assets/ico/privacy.webp';
export const Terms = () => {
    return (
        <div className='main'>
            <Navbar />
            <div className='etc-wrapper'>
                <div className='etc-container shadow'>
                    {/* <h1 className='primary etc-title shadow'> Terms & Conditions</h1> */}
                    {/* <img src={PrivacySVG} alt="login-img" className='auth-svg' /> */}
                    <p className='etc-data'>
                    <div className='backk'>
            <Link className='iocare' to='/'>
                <IoCaretBackOutline></IoCaretBackOutline>
            </Link>
              </div>
                        <h1 className='had'>Terms & Conditions</h1><br />
                        Terms and Conditions for Our Event Organizing Booking Portal <br/><br/>
                        These Terms and Conditions ("Terms") govern your use of our Crystal Events platform. By accessing or using our platform, you agree to comply with these Terms. Please read them carefully.
                        <br /><br />
                        <b>1. Use of the Platform:</b><br/>
                        You must be at least 18 years old to use our platform. By using our services, you confirm that you meet this age requirement.
                        <br /><br/>
                        You agree to provide accurate and complete information when creating an account and using our services. You are responsible for maintaining the confidentiality of your account credentials.
                        <br/><br/>
                        You are solely responsible for all activities conducted through your account. Notify us immediately of any unauthorized use of your account or any other security breach.
                        <br/><br/>
                        <b>2. Booking and Payments:<br/></b>
                        When booking venues or services through our platform, you agree to abide by the terms and conditions set by the venue or service provider, including payment terms, cancellation policies, and any additional terms specific to the booking.
                        <br/><br/>
                        Payment processing is handled securely through our platform. By using our payment services, you agree to comply with our payment terms and authorize us to process your payments and share relevant information with payment service providers.
                        <br/><br/>
                        <b>3. User Content:</b><br/>
                        You retain ownership of any content you submit to our platform, including reviews, comments, messages, and photos ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute it for promotional and operational purposes.
                        <br/><br/>
                        You are solely responsible for the accuracy and legality of your User Content. We reserve the right to remove or edit User Content that violates our policies or is deemed inappropriate.
                        <br/><br/>
                        <b>4. Privacy:</b><br/>
                        Our privacy practices are governed by our Privacy Policy. By using our platform, you consent to the collection, use, and sharing of your information as described in our Privacy Policy.
                        <br/><br/>
                        <b>5. Prohibited Activities:</b><br/>
                        You agree not to engage in any of the following prohibited activities:<br/><br/>
                        Violating any applicable laws, regulations, or third-party rights.<br/>
                        Impersonating another person or entity.<br/>
                        Uploading or distributing malware or malicious code.<br/>
                        Attempting to gain unauthorized access to our platform or other users' accounts.<br/>
                        Engaging in any activity that disrupts, damages, or interferes with the operation of our platform.<br/><br/>
                        <b>6. Termination:</b><br/>
                        We reserve the right to suspend or terminate your account and access to our platform at our discretion, with or without cause. Termination may result from violations of these Terms or other policies.
                        <br/><br/>
                        <b>7. Limitation of Liability:</b><br/>
                        We do not guarantee the accuracy, completeness, or availability of information on our platform. We are not responsible for any damages, losses, or disputes arising from your use of our platform or interactions with other users or third parties.
                        <br/><br/>
                        <b>8. Changes to Terms</b><br/>
                        We may update these Terms at any time. We will notify you of significant changes through email or on our platform. Your continued use of our platform after such changes constitutes your acceptance of the updated Terms.
                        <br/><br/>
                        <b>9. Contact Us:</b><br/>
                        If you have any questions or concerns about these Terms and Conditions, please contact us at [FAQ].
                        <br/><br/>
                        These Terms and Conditions were last updated on <b>[01-09-2023].</b>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
