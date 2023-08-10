import '../index.css';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import backgroundImage from './Assets/backgroundimage.jpg'
import { useState, useEffect } from "react"
import data from './mockdata-hotels'
import axios from "axios"
import HotelCard from '../BookingPages/HotelCard'
import mockItineraries from '../AccountInfo/mockitinerarydata'
import pfp from '../../public/assets/user.png'




function Itinerary({ arrivalDate, departureDate,
  travelers, destination, 
  destID, cost, setCost,
 userId, itinerary, authenticated }) {

  const [loading, setLoading] = useState(true)
  const [hasItineraries,setHasItineraries] = useState(false)
  console.log("ITINERARY", itinerary)

  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 5000)
}, [])

const [userItineraries, setUserItineraries] = useState(null)
  useEffect(() => {
   
    axios
    .get(`https://nomadiafe.onrender.com/api/users/${userId}/itineraries`)

    .then((response) => {
      console.log("successful")
      console.log("res", response.data)
      setUserItineraries(response.data)
      setHasItineraries(true)

    })
    .catch((error) => {
        console.error(error)
    })
}, []) // do on load

console.log("user itineraries",userItineraries)
console.log("userId", userId)

  return (
    // <div>
    //  <ItineraryMenu searchResults={searchResults}/>
    // </div>
     <>
    {/* {userItineraries === null && authenticated  && (
        <div>
            <div className="text-4xl px-56 mt-4 ml-5 w-screen h-screen">Loading Itineraries...  <CircularProgress /></div>
        </div>
    )} */}
    {/* { !authenticated && ( */}
            <ItineraryMenu userItineraries={userItineraries}  hasItineraries = {hasItineraries} authenticated={authenticated} />
    {/* )} */}
</>

    
  );
}

function ItineraryMenu({userItineraries,hasItineraries, authenticated}) {

  console.log("user itineraries",userItineraries)
  
 
  return (
    <>
    <div className="flex w-screen min-h-screen px-64 min-h-screen bg-slate-900"
     style={{
      /* Set a fallback color in case the image is not loaded */
      backgroundColor: '#0f0c29', // Fallback color
      /* Use the linear-gradient property to create the gradient */
      backgroundImage: `url(${backgroundImage})`, // Use the imported image here
      backgroundSize: 'cover', // Adjust the background size as needed
    }}
    
    >
      {/* Main content */}
      <div className="flex justify-center bg-slate-900">
        <div className="w-full mb-10 pl-10">
        <h1 className="text-5xl mb-10 ml-2 font-semibold font-sans mt-4" style={{
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
                            color: '#f0f0f0', // White text color
                            transition: 'text-shadow 0.2s ease-in-out',
                          
                            // Add other styles to make it stand out more
                            letterSpacing: '2px',
                        }}>
                            Nomadia
                        </h1>
                        <img
                src={pfp} // Replace with the actual URL of the profile photo
                alt="Profile"
                className="w-1/2"
              />

             
              <Link to='/Account' className='text-black'>
                <button className="w-3/5 h-10 flex justify-center items-center rounded-md mt-5 shadow-md">
                                Account
                </button>
              </Link>
              <button className="w-3/5 h-10 flex justify-center items-center rounded-md mt-5 shadow-md">
                                Itineraries
                </button>
            <Link to='/booking' className='text-black'>
            <button className="w-3/5 h-10 flex justify-center items-center rounded-md mt-5 shadow-md">
                                Lastest booking
            </button>
            </Link>
            {/* <Link to='/Favorites' className='text-black'>
                <span className="w-3/5 h-10 bg-blue-500 flex flex-row justify-center text-2xl font-black pb-2 rounded-lg mt-5 border border-white border-2 shadow-md">
                  Favorites
                </span>
              </Link> */}
            </div>
        </div>
        <div className="w-full flex flex-col bg-black bg-opacity-60 px-2">
            <div>
            <h1 className="text-4xl text-white mb-2 mt-4">Itineraries</h1>

            </div>

            <div className="border-t border-black-500 border-2"/>
            <div className="flex flex-col min-h-screen">

              <div className="grid grid-cols-3 gap-6 mt-3">
              {authenticated ? (
                userItineraries === null ? (
                  <div className="w-screen h-screen">
                    <div className="text-4xl px-56 mt-4 ml-5">
                      Fetching user itineraries... <CircularProgress />
                    </div>
                  </div>
                ) : userItineraries.length === 0 ? (
                  <p>No itineraries saved.</p>
                ) : (
                  userItineraries.map((userItinerary, index) => (
                    <ItineraryCards
                      userItinerary={userItinerary}
                      key={index}
                      index={index}
                    />
                  ))
                )
              ) : (
                <p className="text-blue-100 text-2xl text-center ml-[50px] mt-[300px] whitespace-nowrap">Log in or register to save and view your itineraries.</p>
              )}
             </div>
          
          </div>
          

        </div>
      </div>
    

  </>

  );
}

function ItineraryCards({userItinerary, index}){
  const activityNames = userItinerary.activities.map(activity => activity.name);
  const id = index + 1

  function convertToNormalTime(dateTimeString) {
    const dateObj = new Date(dateTimeString);
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();

    const amPm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${amPm}`;

  }
  
    const startDate = new Date(userItinerary.hotel.check_in);
    const endDate = new Date(userItinerary.hotel.check_out);
    const formattedStartDate = `${
      (startDate.getMonth() + 1).toString().padStart(2, '0')
    }-${
      startDate.getDate().toString().padStart(2, '0')
    }-${
      startDate.getFullYear()
    }`;
    const formattedEndDate = `${
      (endDate.getMonth() + 1).toString().padStart(2, '0')
    }-${
      endDate.getDate().toString().padStart(2, '0')
    }-${
      endDate.getFullYear()
    }`;
  
   
  
  const departure = convertToNormalTime(userItinerary.flight.departing_at)
  const arrival = convertToNormalTime(userItinerary.flight.arriving_at)
  //SECOND console.log ("TIME",convertToNormalTime(userItinerary.flight.arriving_at))
  //FIRST console.log ("TIME 2",convertToNormalTime(userItinerary.flight.departing_at))
  console.log( "DATE",userItinerary.hotel.check_in)
  

  console.log("mock", userItinerary)
  return(
    <div className='cursor-pointer flex flex-col rounded-md shadow-md border border-blue-500 overflow-y-scroll'>
      <div className='p-3 overflow-show bg-white mb-3' style={{ flex: 1 }}>
        <div className='font-bold text-2xl h-10 overflow-scroll text-black'>
         Itinerary {id}
        </div>
        <div className='flex text-center'>
        <div className='flex flex-col'>
          <div className='font-bold'>
            Hotel: 
          </div>
        </div>
        <div className='flex flex-col ml-2'>
          {userItinerary.hotel.length === 0 ? "No hotels selected." : `${userItinerary.hotel.name}` }
        </div>
        </div>
        <div>
        <div className='underline font-bold'>
          Activities
        </div>
        <div>
            {userItinerary.activities.length === 0 ? "No activities selected." :
            <ul>
                {activityNames.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
            }
        </div>
        <div className='underline font-bold'>
          Flight
        </div>
        <div>
          {departure} - {arrival}
        </div>

        <div className='flex flex-col ml-2'>
         <p className='text-gray-500'> {userItinerary.hotel.length === 0 ? "No flight selected." : `${userItinerary.flight.carrier_name}` } </p>
        </div>
        <div className='flex flex-col ml-2 '>
          <p className='text-gray-500'>{userItinerary.flight.origin} - {userItinerary.flight.destination}</p>
        </div>
        <div>
          <h3>Total Price: ${userItinerary.hotel.price}</h3>
        </div>
        <div>
          Dates: {formattedStartDate} - {formattedEndDate}
        </div>
        </div>
      </div>
    </div>

  );

}


export default Itinerary;

