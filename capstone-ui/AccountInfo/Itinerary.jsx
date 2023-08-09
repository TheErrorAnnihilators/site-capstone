import '../index.css';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import backgroundImage from './Assets/backgroundimage.jpg'
import { useState, useEffect } from "react"
import data from './mockdata-hotels'
import HotelCard from '../BookingPages/HotelCard'
import mockItineraries from '../AccountInfo/mockitinerarydata'
import pfp from '../../public/assets/user.png'
import axios from 'axios';




function Itinerary({ arrivalDate, departureDate,
  travelers, destination, 
  destID, cost, setCost, authenticated
 }) {

  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    setSearchResults(data.results);
  }, []);

  return (
    <div>
     <ItineraryMenu searchResults={searchResults} authenticated={authenticated}/>
    </div>
    
  );
}

function ItineraryMenu({searchResults, authenticated}) {
  const [email, setEmail] = useState(null);
  async function fetchUserDataFromToken(token, userId) {
    console.log("???", token, userId);
    console.log("hereeee");
    
    try {
        // Make an API call to fetch user data using the token
        const response = await axios.get(`http://localhost:3002/api/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // Return the user data if successful
        return response.data;
    } catch (error) {
        // Handle errors appropriately
        console.error('Error fetching user data:', error);
        throw error;
    }
}

  useEffect(() => {
    const token = localStorage.getItem('token');
  
    if (token) {
      const userId = localStorage.getItem('userId');
      fetchUserData(token, userId);
    }
  }, []);

  const fetchUserData = async (token, userId) => {
    try {
      const user = await fetchUserDataFromToken(token, userId);
      setEmail(user.email);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  console.log("the data", email)

 
  return (
    <>
    <div className="flex w-screen h-screen px-64"
     style={{
      /* Set a fallback color in case the image is not loaded */
      backgroundColor: '#0f0c29', // Fallback color
      /* Use the linear-gradient property to create the gradient */
      backgroundImage: `url(${backgroundImage})`, // Use the imported image here
      backgroundSize: 'cover', // Adjust the background size as needed
    }}
    
    >

      {/* Main content */}
      <div className="h-full flex flex-grow items-center justify-center">
        
        <div className="w-1/3 flex-grow p-4 mb-10">
        <h1 className="text-5xl mb-20 ml-2 font-bold font-sans" style={{
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
                            color: '#f0f0f0', // White text color
                            transition: 'text-shadow 0.2s ease-in-out',
                            cursor: 'pointer',
                            // Add other styles to make it stand out more
                            letterSpacing: '2px',
                        }}>
                            Nomadia
                        </h1>         
            <img
                src={pfp} // Replace with the actual URL of the profile photo
                alt="Profile"
                className="ml-6 w-1/2 h-1/2 object-cover"
              />
              <p className="mt-8 font-black">
              {authenticated ? <strong>Email: </strong> : null} {{email} ? email : ''}

              </p>
            


             
              <Link to='/Account' className='text-black'>
                <span className="w-3/5 h-10 bg-blue-500 flex flex-row justify-center text-2xl font-black pb-2 rounded-lg mt-10 border border-white border-2 shadow-md">
                  Account
                </span>
              </Link>
                <span className="w-3/5 h-10 bg-blue-300 flex flex-row justify-center text-2xl font-black pb-2 rounded-lg mt-5 border border-white border-2 shadow-md">
                  Itineraries
                </span>
            <Link to='/booking' className='text-black'>
              <span className="w-3/5 h-10 bg-blue-500 flex flex-row justify-center text-2xl font-black pb-2 rounded-lg mt-5 border border-white border-2 shadow-md">
                  Booking
                </span>
            </Link>
            <Link to='/Favorites' className='text-black'>
                <span className="w-3/5 h-10 bg-blue-500 flex flex-row justify-center text-2xl font-black pb-2 rounded-lg mt-5 border border-white border-2 shadow-md">
                  Favorites
                </span>
              </Link>
            </div>
        </div>
        <div className="w-2/3 h-4/5 mb-20 flex flex-col mt-[-10px]">
            <div>
            <h1 className="text-4xl font-bold text-black mb-2 mt-10" style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.6)' }}>Itineraries</h1>

            </div>

            <div className="border-t border-black-500 border-2"/>

            {!authenticated && <p className="text-blue-100 text-2xl text-center mt-[300px]">Login/Register to view!</p>}

            <div className="flex flex-col min-h-screen">

              <div className="grid grid-cols-3 gap-6 mt-3">
               {/* { mockItineraries.length === 0 ? "No results found." :
                      mockItineraries.map((mockItinerary) => (
                          <ItineraryCards
                          mockItinerary={mockItinerary}
                          key={mockItinerary.id}
                          />
                      ))
                      
                  } */}
             </div>
          
          </div>
          

        </div>
      </div>
    

  </>

  );
}

function ItineraryCards({mockItinerary}){
  console.log("mock", mockItinerary)
  return(
    <div>
      <div>
        <h1>Itinerary {mockItinerary.id} </h1>
      </div>
      <div>
        <h3>Hotel: {mockItinerary.Hotel.name}</h3>
      </div>
    </div>

  );

}

export default Itinerary;

