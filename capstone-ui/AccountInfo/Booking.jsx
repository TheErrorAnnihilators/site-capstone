import '../index.css';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import ActivityCards from '../BookingPages/ActivityCards'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import backgroundImage from './Assets/backgroundimage.jpg'
import HotelCard from '../BookingPages/HotelCard';
import { useState, useEffect } from 'react'
import pfp from '../../public/assets/user.png'
import axios from 'axios'
import FlightsCard from '../BookingPages/FlightCard';
import { teal } from 'color-name';





function Booking({ itinerary, authenticated, cost, setCost }) {
    const [the_itinerary, set_the_itinerary] = useState(null);
    const [loading, setLoading] = useState(true);
    const [itineraryPresent, setItineraryPresent] = useState(false)
    const [unsavedChanges, setUnsavedChanges] = useState(false); // Add this state
    const [thefinalcost, setthefinalcost] = useState(0); // Add this state

    const hotel_price = 500
    //itinerary.Hotel.priceBreakdown.grossPrice.value.toFixed(2)

    window.addEventListener('beforeunload', (event) => {
        event.returnValue = `Are you sure you want to leave?`;
      });


    let storageitem = localStorage.getItem("Itinerary");
    function fetch() {
        if (itinerary != null && (itinerary.Hotel != null || itinerary.Activities != [] || itinerary.flight != null)) {
            console.log("?", itinerary)
            set_the_itinerary(itinerary);

            setItineraryPresent(true)
            setLoading(false);
            localStorage.setItem("Itinerary", JSON.stringify(itinerary))
        } else if (storageitem != null && storageitem.Hotel != null) {
            set_the_itinerary(JSON.parse(storageitem));
            setLoading(false);
            setItineraryPresent(true);
            setUnsavedChanges(true);
            console.log("the itinerary ", itinerary)
        } else {
            setLoading(true);
            setItineraryPresent(false);
            setUnsavedChanges(false);
        }
        // if (storageitem != null && storageitem.Hotel != null) {
        //     set_the_itinerary(JSON.parse(storageitem));
        //     setLoading(false);
        //     setItineraryPresent(true);
        //     setUnsavedChanges(true);
        // } else {
        //     setLoading(true);
        //     setItineraryPresent(false);
        //     setUnsavedChanges(false);
        // }

    }
    // useBeforeUnload(
    //     React.useCallback(() => {
    //         if (unsavedChanges) {
    //             localStorage.setItem("Itinerary", JSON.stringify(the_itinerary));
    //         }
    //     }, [unsavedChanges, the_itinerary])
    // );


    useEffect(() => {

    fetch();
    console.log("is itinerary null", itinerary)
        const handleBeforeUnload = (event) => {
            if (itineraryPresent && loading) {
                event.preventDefault();
                event.returnValue = ''; // This empty string will trigger the browser prompt.
                localStorage.setItem("Itinerary", JSON.stringify(the_itinerary));

            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        if (itinerary === null) {
            set_the_itinerary(JSON.parse(localStorage.getItem("Itinerary")));
        }
    }, [the_itinerary]);

  



    return (
        <>
           
       <BookingMenu itinerary={the_itinerary} itineraryPresent={itineraryPresent} loading={loading} authenticated={authenticated} set_the_itinerary={set_the_itinerary} cost={cost} setCost={setCost} setthefinalcost={setthefinalcost} thefinalcost={thefinalcost}/>
               
        </>
    );
}



function BookingMenu({ itinerary, itineraryPresent, loading, authenticated, set_the_itinerary,cost, setCost, setthefinalcost, thefinalcost }) {



    const [email, setEmail] = useState(null);


    // console.log("itinerary flight", itinerary.flight, " logging itinerary", itinerary);

    async function fetchUserDataFromToken(token, userId) {
        
        try {
            // Make an API call to fetch user data using the token
            const response = await axios.get(`https://nomadiafe.onrender.com/api/users/${userId}`, {
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

    setthefinalcost(cost);


   // setCost(0);

    console.log(loading);
    console.log("cost",thefinalcost)
    
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
                <div className="h-full flex justify-center bg-slate-900">
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
                        <p className="mt-8 font-black">

                        </p>
                            <Link to='/Account' className='text-black'>
                            <button className="w-3/5 h-10 flex justify-center items-center rounded-md mt-5 shadow-md">
                                Account
                            </button>
                            </Link>
                            <Link to='/Itineraries' className='text-black'>
                            <button className="w-3/5 h-10 flex justify-center items-center rounded-md mt-5 shadow-md">
                                Itineraries
                            </button>
                            </Link>
                            <button className="w-3/5 h-10 flex justify-center items-center rounded-md mt-5 shadow-md">
                                Latest booking
                            </button>
                            {/* <Link to='/Favorites' className='text-black'>
                                <span className="w-3/5 h-10 bg-blue-500 flex flex-row justify-center text-2xl font-black pb-2 rounded-lg mt-5 border border-white border-2 shadow-md">
                                    Favorites
                                </span>
                            </Link> */}
                        </div>
                    </div>
                    <div className="w-full flex flex-col bg-black bg-opacity-60 px-2">
                        <div>
                        
                        <h1 className="text-4xl text-white mb-2 mt-4" >Latest booking</h1>

                        </div>
                       
                     
                        <div className="border-t border-black-500 border-2 mb-10" />
                        {!loading ? (
                            <>
                            <div className="flex flex-col rounded-md shadow-md border border-blue-500 overflow-y-scroll h-100">
                            {itinerary != null && (
                                                    (itinerary.Hotel != null) ||
                                                    (itinerary.Activities != null && itinerary.Activities.length > 0) ||
                                                    (itinerary.flight != null)
                                                    ) && (
                                <>
                                <div className="p-3 overflow-show bg-white mb-3">
                                    
                                    <div className="flex flex-col justify-between">
                                        <div className="font-bold text-2xl">{itinerary?.Hotel?.name}</div>
                                       <div>${itinerary?.Hotel?.priceBreakdown?.grossPrice?.value?.toFixed(2)}</div>
                                       <div className="text-gray-500 mb-3">Total price</div>
                                        <div
                                            className={
                                                itinerary?.Hotel?.reviewScoreWord === 'Good' ||
                                                itinerary?.Hotel?.reviewScoreWord === 'Very Good' ||
                                                itinerary?.Hotel?.reviewScoreWord === 'Excellent'
                                                ? 'font-bold text-green-600'
                                                : ''
                                            }
                                        >
                                            {itinerary?.Hotel?.reviewScoreWord}
                                            {itinerary?.Hotel?.reviewScoreWord === 'Excellent' ? '!' : ''}
                                        </div>
                                    </div>
                                </div>
                                </>
                                )}
                                <div>{itinerary != null && itinerary['Activities'].map((item, index) => {
                                    return (<div className="mb-3"><ActivityCards activity={item} checkout={true} key={index} /></div>)
                                })}{itinerary != null && itinerary['flight'] != null && itinerary['flight'].map((flight, index) => {
                                    const formattedDepartureOutbound = convertToNormalTime(flight.slices[0].segments[0].departingAt);
                                    const formattedArrivalOutbound = convertToNormalTime(flight.slices[0].segments[0].arrivingAt);
                                    const formattedDepartureInbound = convertToNormalTime(flight.slices[1].segments[0].departingAt);
                                    const formattedArrivalInbound = convertToNormalTime(flight.slices[1].segments[0].arrivingAt);
                                  
                                    function convertToNormalTime(dateTimeString) {
                                      const dateObj = new Date(dateTimeString);
                                      const hours = dateObj.getHours();
                                      const minutes = dateObj.getMinutes();
                                      const amPm = hours >= 12 ? 'pm' : 'am';
                                      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
                                      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
                                      return `${formattedHours}:${formattedMinutes} ${amPm}`;
                                    }
                                  
                                    return (
                                      <div className="flight-card-container bg-white" key={index}>
                                        <div>
                                          <div className='flex flex-row mb-[120px] mr-2'>
                                            {/* Airline Logo */}
                                            <img
                                              className='w-[50px] h-[50px] mr-[-20px] mt-3'
                                              src={flight.slices[0].segments[0].carrier.logoUrl}
                                              alt="Airline Logo"
                                            />
                                            {/* Formatted Departure Inbound */}
                                            <h1 className='ml-10 mt-4 text-4xl whitespace-nowrap'>
                                              {formattedDepartureInbound}
                                            </h1>
                                            <div className='flex flex-col'>
                                              <hr className="h-1 mt-[40px] w-[150px] my-8 bg-gray-200 border-0 ml-[10px] mb-[10px]" />
                                              {/* Airline Name */}
                                              <h1 className='text-2xl ml-[5px] mt-[-2px] text-blue-500 whitespace-nowrap'>
                                                {flight.slices[0].segments[0].carrier.name}
                                              </h1>
                                            </div>
                                            {/* Formatted Departure Outbound */}
                                            <h1 className='mr-[18px] ml-2 mt-4 text-4xl whitespace-nowrap'>
                                              {formattedDepartureOutbound}
                                            </h1>
                                          </div>
                                          <div className='flex flex-row'>
                                            {/* Airline Logo */}
                                            <img
                                              className='w-[50px] h-[50px] mt-[-100px] mr-5'
                                              src={flight.slices[1].segments[0].carrier.logoUrl}
                                              alt="Airline Logo"
                                            />
                                            {/* Formatted Arrival Inbound */}
                                            <h1 className='mt-4 text-4xl whitespace-nowrap mt-[-100px]'>
                                              {formattedArrivalInbound}
                                            </h1>
                                            <div className='flex flex-col'>
                                              <hr className="h-1 mt-[-80px] w-[150px] my-8 bg-gray-200 border-0 ml-[10px]" />
                                              {/* Airline Name */}
                                              <h1 className='text-2xl ml-[5px] mt-[-10px] text-blue-500 whitespace-nowrap'>
                                                {flight.slices[1].segments[0].carrier.name}
                                              </h1>
                                            </div>
                                            {/* Formatted Arrival Outbound */}
                                            <h1 className='mr-4 ml-2 mt-[-95px] text-4xl whitespace-nowrap'>
                                              {formattedArrivalOutbound}
                                            </h1>
                                          </div>
                                        </div>
                                        {/* Total Price */}
                                        <div className='flex flex-row'>
                                        <h1 className='text-3xl mt-5'>Total Price: </h1>
                                        <h1 className='text-3xl ml-2 mt-5 text-green-500'>${flight.totalAmount}</h1>
                                        <h1 className='text-sm mt-7 ml-[120px] text-gray-500'>*Total price for all travelers</h1>
                                        </div>
                                      
                                      </div>
                                    );
                                  })}
                                  
                            
                                </div>
                            </div>
                                
                            
                            </>
                        ) : (
                            <div className="flex justify-center items-center h-screen">
                                <Link to="/" className="text-blue-100 text-2xl">Go to homepage to start booking!</Link>
                            </div>
                        )}
                          {(itineraryPresent && itinerary.Hotel != null) ? (
                <div>

                    <h2 className='font-bold text-4xl text-white mr-2 mt-[50px]' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>Total: ${thefinalcost}</h2>
                    <hr className="mt-4 w-64 border-2 border-white" />
                    <div className="flex items-center mt-[100px]">
                        <h2 className='text-[25px] font-bold text-white mr-5'>Ready to check out?</h2>
                        <Link to='/Checkout'>
                            <h2 className="text-green-400 font-bold text-[25px] hover:text-green-200">Check out</h2>
                        </Link>
                    </div>
                </div>
                          ) : <p></p>
                
            }
                    </div>
                </div>
        
        </>
    );
}

export default Booking;
