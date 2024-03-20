import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import UserLeftbar from './Layout/UserLeftbar';
import { Footer } from '../../components/Footer';
import img from "../../assets/care_4.jpg"
import {FaRegSmileWink} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { removeAllFromCart } from '../.././redux/cartSlice';
const UserPanel = () => {
  

    let uname = localStorage.getItem('xuserName');

    const [timeOfDay, setTimeOfDay] = useState('');

    useEffect(() => {
        const currentHour = new Date().getHours();

        let greeting = '';
        if (currentHour >= 5 && currentHour < 12) {
            greeting = 'Good morning !';
        } else if (currentHour >= 12 && currentHour < 18) {
            greeting = 'Good afternoon !';
        } else {
            greeting = 'Good evening !';
        }

        setTimeOfDay(greeting);
    }, []);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        localStorage.clear();
        dispatch(removeAllFromCart());
        navigate('/login');
}

    return (
        <>
            <Navbar />
            {/* <UserLeftbar /> */}

            <div>
        <img className='bg1'src={img}/>
      </div>
      <div className='rest1'>
       
      </div>
            {/* <div className='mainx'> */}
                {/* <div className='titlebar'>
                {timeOfDay}
                </div> */}

                {/* <div className='user-data-display'>
                    <div className='user-profile-container'>

                        
                    </div>
                </div> */}
            {/* </div> */}

                        <div >
                            <h2 className="text-shadows-profile"> <FaRegSmileWink/> Welcome {uname}! </h2>
                        </div>
                        <div><Link to='/user/orders'><button className='serv_btn '>My Bookings</button></Link></div>
                        <div><Link to='/user/settings'><button className='profile_btn'>User Profile</button></Link></div>
                        <div><Link to='/pages/Ratings'><button className='review_btn'>Reviews</button></Link></div>
                        <div>
                            <button className='care_log_btn' onClick={logoutHandler}>
                            Logout
                                                </button>
                        </div>

            <Footer />
                        {/* <div>
                            <h1 className='making'>To care for those who once<br/> cared for us<br/> is one of the highest honors</h1>
                        </div> */}
        </>
    );
}

export default UserPanel;
