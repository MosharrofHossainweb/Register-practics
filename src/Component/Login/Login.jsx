import React, { useState } from 'react'

import { FaGoogle } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { IoEyeOffSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
const Login = () => {
  // ====================Variable================
  const navigate = useNavigate()
  // ====================Variable================
   // =========================firebase========================
   const auth = getAuth();
   // =========================firebase========================
   // =======================useSate=================================
   const [showPassword, setShowPassword] = useState(false);
   
   const [email, setEmail] = useState('');
   const [emailError, setEmailError] = useState('');
   const [password, setPassword] = useState('');
   const [passwordError, setPasswordError] = useState('');
   // =======================useSate=================================
   // ===================funtionality==============================
   const handelShow = ()=>{
    setShowPassword(!showPassword)
   }
   const handelSubmit = (e) => {
     e.preventDefault();
    
     if (!email) {
       setEmailError('Enter your Email');
     }
     if (!password) {
       setPasswordError('Enter your Password');
     }}
  return (
    <>
       <div className="account">
        <div className="accoun_form pt-20">
          <h2 className="form_head pt-8 pb-9">Login</h2>
          
          <div className="input_box px-[220px] ">
            
            <div className="input_form py-3">
              <p className='text-yellow-500'>{emailError}</p>
              <input onChange={(e)=>{ setEmail(e.target.value),setEmailError('')}}
                placeholder="Enter your Email"
                className="input"
                name="text"
                type="text"
              />
            </div>
            <div className="input_form py-3 relative">
              <p className='text-yellow-700'>{passwordError}</p>
              {
                showPassword?

                (<FaEye onClick={handelShow} className='absolute top-[25px] left-[265px] text-white text-2xl'  />)
                :
              (<IoEyeOffSharp className='absolute top-[25px] left-[265px] text-yellow-100 text-2xl ' />)
              }

              <input
              onChange={(e)=>{setPassword(e.target.value),setPasswordError('')}}
                placeholder="Enter your Password"
                className="input"
                name="text"
                type="text"
              />
            </div>
          </div>
          <div className="submit_btn">
            <button type='submit'onClick={handelSubmit} className='text-center text-4xl text-white mx-[230px] mt-10 bg-slate-400 px-[100px] active:scale-[1.1] py-3 rounded-xl'>Login</button>
          </div>
          <p className='text-white text-2xl text-center mt-10'>Don't have an account?<span onClick={()=>navigate('/register')} className='text-yellow-400 text-2xl'>Register</span></p>
        </div>
      </div>
    </>
  )
}

export default Login;
