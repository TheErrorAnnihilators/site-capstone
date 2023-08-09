import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BASE_URL = 'https://nomadiafe.onrender.com/api';

export default function Navbar({
    authenticated,
    setAuthenticated,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    phoneNumber,
    setPhoneNumber,
    name,
    setName,
 }) {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [loginError, setLoginError] = useState('');





  const navigate = useNavigate()

  async function handleLogout() {
    // Update authenticated state to false
    setAuthenticated(false);
  
    // Clear form fields

    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPhoneNumber('');
    setName('');
    localStorage.removeItem('token');
    localStorage.removeItem("password");
    localStorage.removeItem("Itinerary");



  
    // Navigate to the home page
    navigate('/');
  }

 

  async function handleRegister(e) {
    e.preventDefault();
    const userData = {
      name: name,
      password: password,
      email: email,
      phone_number: phoneNumber
    };

    localStorage.setItem("password", password);

    if (!/^\d{10}$/.test(phoneNumber)) {
        setPhoneError('Phone number must be 10 digits.');
        return;
      }

      
    try {
      const response = await axios.post('http://localhost:3002/api/register', userData);
      // Assuming the response contains a user object upon successful registration
      const { token, newUser } = response.data;
      localStorage.setItem("token", token)
      localStorage.setItem('userId', newUser.id); // Save the user ID



      // Update authenticated state to true
      setAuthenticated(true);
      setRegisterOpen(false); // Close the register modal after successful registration

      // Navigate to the "Account" page
      if (authenticated) {
        navigate('/'); 

      }

    } catch (error) {
      // Handle registration error
      if (error.response && error.response.status === 500) {
        // Email conflict error
        setEmailError('Email already exists. Please use a different email.');
    } else {
        // Other registration error
        setEmailError('Registration Failed');
    }
    console.error(error);

    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    const userData = {
      password: password,
      email: email,
    };
    localStorage.setItem("password", password);
    try {
      const response = await axios.post(`http://localhost:3002/api/login`, userData);
      // Assuming the response contains a token and user object upon successful login
      const { token, user } = response.data;

      // Save token in local storage or a secure cookie for future authenticated requests
      localStorage.setItem('token', token);
      localStorage.setItem('userId', user.id); // Save the user ID


      // Update authenticated state to true
      setAuthenticated(true);
      setLoginOpen(false); // Close the login modal after successful login

      // Navigate to the "Account" page
      if (authenticated) {
        navigate('/'); 

      }
    // This will trigger a full page reload
      // If you are using React Router's Switch and Route components for navigation, you can use:
      // history.push('/Account'); // Make sure to have history object from react-router-dom available
    } catch (error) {
      // Handle login error
      if (error.response && error.response.status === 400) {
        // Invalid login credentials
        setLoginError('Invalid email or password.');
    } else {
        // Other login error
        setLoginError('Login Failed');
    }
    console.error(error);
      console.error(error);
    }
  }

    return (
        <div className="px-56 bg-gray-100 bg-opacity-75 flex h-16 border-b border-blue-500 sticky top-0 z-10 justify-between">
        <Link to="/" className="flex">
          <div className="flex">
            <Button disabled={true}>Home</Button>
          </div>
        </Link>
        <Link to="/Account" className="flex">
          <div className="flex">
            <Button disabled={true}>Account</Button>
          </div>
        </Link>
        <div className="flex">
          {authenticated ? (
            <Button onClick={handleLogout}>Sign Out</Button>
          ) : (
            <>
              <Button>FAQ</Button>
              <Button onClick={() => setRegisterOpen(true)}>Sign up</Button>
              <Button onClick={() => setLoginOpen(true)}>Log in</Button>
            </>
          )}
                <Modal 
                    open={registerOpen}
                    >
                        <div className="flex justify-center items-center h-screen font-sans">
                            <div className="border w-72 bg-white border-blue-500 rounded-md px-3">
                                <div>
                                    <form onSubmit={handleRegister}>
                                        <div className="flex justify-between">
                                            <div><h2 className="text-2xl">Register</h2></div>
                                            <div title="Close register modal" className="flex cursor-pointer w-5 justify-end" onClick={() => setRegisterOpen(false)}>—</div>
                                        </div>
                                        <div>Save your itineraries and view past bookings.</div>
                                        <div className="bg-blue-500 w-full h-0.5 my-3"></div>
                                        <div>Name<span className="text-red-500">*</span></div>
                                        <input className="border text-center border-blue-500 rounded-md w-full mb-4" 
                                             onChange={(e) => {
                                                setName(e.target.value);
                                              }}
                                            type="name" required 
                                        />
                                        <div>Email<span className="text-red-500">*</span></div>
                                        <input className="border text-center border-blue-500 rounded-md w-full mb-4" 
                                             onChange={(e) => {
                                                setEmail(e.target.value);
                                                setEmailError(''); // Clear the error message when email changes
                                              }}
                                            type="email" required 
                                        />
                                        <div>PhoneNumber<span className="text-red-500">*</span></div>
                                        <input className="border text-center border-blue-500 rounded-md w-full mb-4" 
                                             onChange={(e) => {
                                                setPhoneNumber(e.target.value);
                                                setPhoneError(''); // Clear the error message when phone number changes
                                              }}
                                              type="text" // Using "text" type as it's a phone number
                                              required
                                            />
                                            {phoneError && (
                                              <p className="text-red-500 text-sm">{phoneError}</p>
                                            )}
                                        <div>Password<span className="text-red-500">*</span></div>
                                        <input className="border text-center border-blue-500 rounded-md w-full mb-4" 
                                            value={password} onChange={(e) => setPassword(e.target.value)}
                                            type="password" required 
                                        />
                                        <div>Confirm password<span className="text-red-500">*</span></div>
                                        <input className="border text-center border-blue-500 rounded-md w-full mb-2" 
                                            value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                                            type="password" required 
                                        />
                                        {(confirmPassword !== password) && (
                                            <div className="text-red-500 mb-3">Passwords do not match.</div>
                                        )}
                                        {emailError && (
                                            <p className="text-red-500 text-sm">{emailError}</p>
                                        )}
                                       
                                        <Button sx={{'border': '1px solid', 
                                                    'height' : '50px',
                                                    'width' : '100%',
                                                    'borderRadius' : '5px',
                                                    'marginBottom' : '10px'}}
                                                disabled={email === "" ||
                                                        password === "" ||
                                                        confirmPassword === "" ||
                                                        confirmPassword !== password
                                                        ? true : false}
                                                onClick={handleRegister}>Submit</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                </Modal>
                <Modal 
                    open={loginOpen}
                    >
                        <div class="flex justify-center items-center h-screen font-sans">
                            <div className="border w-72 bg-white border-blue-500 rounded-md px-3">
                                <div>
                                    <form onSubmit={handleLogin}>
                                        <div className="flex justify-between">
                                            <div><h2 className="text-2xl">Log in</h2></div>
                                            <div title="Close log in modal" className="flex cursor-pointer w-5 justify-end" onClick={() => setLoginOpen(false)}>—</div>
                                        </div>
                                        <div>View your saved itineraries and past bookings.</div>
                                        <div className="bg-blue-500 w-full h-0.5 my-3"></div>
                                        <div>Email<span className="text-red-500">*</span></div>
                                        <input
                                            className="border text-center border-blue-500 rounded-md w-full mb-4"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                setLoginError('');
                                            }}
                                            type="email"
                                            required
                                        />
                                        <div>Password<span className="text-red-500">*</span></div>
                                        <input
                                            className="border text-center border-blue-500 rounded-md w-full mb-4"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                                setLoginError('');
                                            }}
                                            type="password"
                                            required
                                        />
                                         {loginError && (
                                            <p className="text-red-500 text-sm">{loginError}</p>
                                        )}
                                        <Button sx={{'border': '1px solid', 
                                                    'height' : '50px',
                                                    'width' : '100%',
                                                    'borderRadius' : '5px',
                                                    'marginBottom' : '10px'}}
                                                disabled={email === "" ||
                                                        password === ""
                                                        ? true : false}
                                                onClick={handleLogin}>Submit</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                </Modal>
            </div>
        </div>
    )
}