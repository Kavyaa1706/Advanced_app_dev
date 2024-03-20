import React from "react";
import { Navbar } from '../components/Navbar';
import "../assets/AboutUs.css";
import img from "../assets/care_5.jpg"
import { Footer } from "../components/Footer";
function AboutUs (){
    return(
        <>
         <Navbar />
                <div>
            <h1 className='what'>
                What We're All About
            </h1>
            
            <p className='creating'>"Never be so busy as not to think of others"</p>
        </div>
        <div className='class'>

        </div>
        <div>
            <img className='uss' src={img}/>
        </div>
        <div>
            <p className='abtuspara'>
            <b>Welcome..!</b> to our revolutionary Crystal Events Booking Platform, where event planning and execution 
            reach new heights of efficiency and creativity. Our platform is your one-stop destination for orchestrating 
            unforgettable events of all scales and types, from intimate gatherings to grand corporate conferences. With an 
            extensive database of diverse venues, each meticulously detailed with descriptions, photos, and transparent pricing,
            finding the perfect setting for your event is effortless. Our Vendor Marketplace connects you with top-tier service providers,
            offering catering, decor, photography, and entertainment options, while our Event Planning Tools keep you organized with 
            customizable checklists, budget calculators, and real-time event tracking.
              <br/>
              <br/>
            Seamlessly manage ticketing, process secure payments, and access a wealth of expert resources in our Resource Library.
            With our Data Analytics tools, gain valuable insights into your event's performance, and our dedicated customer support team 
            is always ready to assist you. With our Event Organization Booking Platform, your event vision becomes a reality, as we simplify,
            streamline, and elevate the art of event planning.
                <br/>
                <br/>
            Crystal Events platform have revolutionized the way individuals and businesses organize events, offering a host of powerful tools and resources to streamline the planning process. These platforms typically provide a central hub where users can create, manage, and coordinate every aspect of their event. From setting budgets and selecting venues to choosing vendors and designing invitations, these platforms offer a comprehensive suite of features. Users can often browse a wide range of venue options, complete with detailed descriptions, pricing, and availability, making it easier to find the perfect setting for their event. Similarly, these platforms frequently offer vendor directories, helping users discover and hire professionals like caterers, photographers, DJs, and more, often with ratings and reviews to inform their choices.
            </p>
            
        </div>
        <div>
            <h1 className='fun'>
               CARE IS FAIR
            </h1>
        </div>
        <Footer/>
        </>
    )
}
export default AboutUs