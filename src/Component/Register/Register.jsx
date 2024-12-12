import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { IoEyeOffSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  // =================varible part===========================
  const navigate = useNavigate();
  // =================varible part===========================
  // =========================firebase========================
  const auth = getAuth();
  // =========================firebase========================
  // =======================useSate=================================
  const [name, setName] = useState('');
  const [nameError, setErrorName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // =======================useSate=================================
  // ===================funtionality==============================
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setErrorName('Enter Your Name');
    }
    if (!email) {
      setEmailError('Enter your Email');
    }
    if (!password) {
      setPasswordError('Enter your Password');
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  };
  // ===================funtionality==============================
  return (
    <>
      <div className="account">
        <div className="accoun_form">
          <h2 className="form_head">Create Account</h2>
          <div className="other_Account_Acces flex justify-around mt-7">
            <button className="google">
              <FaGoogle />
              <h3>Sign with Google</h3>
            </button>
            <button className="facebok">
              <FaFacebookF />
              <h3>Sign with Google</h3>
            </button>
          </div>
          <h3 className="text-4xl text-center mt-5 mb-5">--Or--</h3>
          <div className="input_box px-[220px] ">
            <div className="input_form py-3 ">
              <p className="text-2xl text-yellow-50">{nameError}</p>
              <input
                onChange={(e) => {
                  setName(e.target.value), setErrorName('');
                }}
                placeholder="Enter your Name"
                className="input"
                name="text"
                type="text"
              />
            </div>
            <div className="input_form py-3">
              <p className="text-2xl text-yellow-200">{emailError}</p>
              <input
                onChange={(e) => {
                  setEmail(e.target.value), setEmailError('');
                }}
                placeholder="Enter your Email"
                className="input"
                name="email"
                type="text"
              />
            </div>
            <div className="input_form py-3 relative">
              <FaEye className="absolute top-[25px] left-[265px] text-white" />
              <IoEyeOffSharp className="absolute top-[25px] left-[265px] text-yellow-100" />
              <input
                onChange={(e) => {
                  setPassword(e.target.value), setPasswordError('');
                }}
                placeholder="Enter your Password"
                className="input"
                name="text"
                type="text"
              />
              <p className="text-2xl text-yellow-200">{passwordError}</p>
            </div>
          </div>
          <div className="submit_btn">
            <button
              type="submit"
              onClick={handelSubmit}
              className="text-center text-4xl text-white mx-[230px] mt-10 bg-slate-400 px-10 active:scale-[1.1] py-3 rounded-xl"
            >
              Crete Account
            </button>
          </div>
          <p className="text-white text-2xl text-center mt-5">
            Already have an account?
            <span
              onClick={() => navigate('/login')}
              className="text-yellow-400 text-2xl active:scale-[1.1]"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
