import React, { useState } from 'react'
import { Navbar } from '../../components/Navbar'
import UserLeftbar from './Layout/UserLeftbar'
import { Footer } from '../../components/Footer'
import { editUser } from '../../service/api'
import img from "../../assets/bgg.jpg";
import {FcManager} from "react-icons/fc"
import { Link } from 'react-router-dom'
import CryptoJS from 'crypto-js'
import { GrFormPrevious } from "react-icons/gr";

export const Settings = () => {

    const uid = localStorage.getItem('xuserId')
    const [editData, setEditData] = useState({
        name: localStorage.getItem('xuserName'),
        phone: localStorage.getItem('xuserPhone'),
        email: localStorage.getItem('xuserEmail'),
        address: localStorage.getItem('xuserAddress'),
        isEnabled: 'true'
    })
    const [edit, setEdit] = useState(false)
    const handleEdit = () => {
        setEdit(!edit)
    }
    const handleSave = async () => {
        console.log(editData)
        await editUser(uid, editData)
        localStorage.setItem('xuserName', editData.name);
        localStorage.setItem('xuserPhone', editData.phone);
        localStorage.setItem('xuserAddress', editData.address);
        setEdit(!edit)

    }
    const handleChange = (e) => {
        e.preventDefault();
        setEditData({ ...editData, [e.target.id]: e.target.value })
    }
    return (
        <div className='mainx1'>
            
            <Navbar />
            
            {/* <UserLeftbar /> */}
            <div>
                <img className='bgg_prof' src={img}></img>
            </div>
            <div >
           <Link to='/user/dashboard'>
               
                    <h2 className='prev_prof'>
                        <GrFormPrevious />
                    </h2>
               
           </Link>
            </div>
            <div className='titlebar1'>
               <FcManager/>
            </div>
            <div className=''>
                
                {edit ?
                    

                     
                   
                        <div className='cont1'>
                            
                            <h1 className='edit-details'>Edit Profile</h1>
                              
                                    <div className='data-cont'>
                                        <div className='name-edit-cont'>
                                            <h4 className='name-cont'> Name :</h4>
                                            <input type="text" name="Name" id="name" value={editData.name} className='data-input bg-secondary-input black' onChange={handleChange} />
                                        </div>
                                        <div className='name-edit-cont'>
                                            <h4 className='name-cont'> Phone :</h4>
                                            <input type="text" name="Phone" id="phone" value={editData.phone} className='data-input bg-secondary-input black' onChange={handleChange} />
                                        </div>
                                        <div className='name-edit-cont'>
                                            <h4 className='name-cont'> Email* :</h4>
                                            <input type="text" name="Email" id="email" value={editData.email} className='data-input bg-secondary-input black' readOnly />
                                        </div>
                                        <div className='name-edit-cont'>
                                            <h4 className='name-cont'> Address :</h4>
                                            <textarea className='data-input bg-secondary-input black' rows='' value={editData.address} onChange={handleChange} id='address' />
                                        </div>
                                    </div>
                            
                        
                        
                            <button onClick={handleSave} className='edit-btn-cont'>Save</button>
                            <div>
                            </div>

                    </div>
                    :
                

                        <div className='cont'>
                            <h1 className='cont-wel'><span className='primary pl-1'> {editData.name} </span></h1>

                        

                            
                                
                                    <div>
                                        <div className='name-edit'>
                                            <h4 className='name'> Name :</h4>
                                            <h1 className=''>{editData.name}</h1>
                                        </div>
                                                                    
                                                                       
                                        
                                                                        <div className='name-edit'>
                                        <h4 className='name'> Phone :</h4>
                                        <h1 className=''>{editData.phone}</h1>
                                                                        </div>
                                                                        <div className='name-edit'>
                                        <h4 className='name'> Email :</h4>
                                        <h1 className=''>{editData.email}</h1>
                                                                        </div>
                                                                    
                                                                   
                                        
                                                                        <div className='name-edit'>
                                        <h4 className='name'> Address :</h4>
                                        <h1 className=''>{editData.address}</h1>
                                                                        </div>
                                    </div>
                           
                        

    
                                    <div>
                                        <button onClick={handleEdit} className='edit-btn'>Edit</button>
                                    </div>
                                        <div>
                                            <h1 className='wel-come'>WELCOME! {editData.name}</h1>
                                        </div>
                    </div>
                }
            </div>
            <Footer />
        </div>
    )
}