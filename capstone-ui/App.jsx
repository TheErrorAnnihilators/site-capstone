import { useEffect, useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Homepage from './Homepage'
import Navbar from './Navbar'
import Footer from './Footer'
import Activities from './BookingPages/Activities';
import HotelsPage from './BookingPages/HotelsPage';
import './index.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Account from './AccountInfo/Account'
import Itinerary from './AccountInfo/Itinerary'
import Favorites from './AccountInfo/Favorites'
import Booking from './AccountInfo/Booking'
import Checkout from './AccountInfo/Checkout'
import FlightsPage from './BookingPages/FlightsPage';
import { useControlledValueWithTimezone } from '@mui/x-date-pickers/internals';
import axios from 'axios'


const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: ['Cairo', 'sans-serif'].join(','),
        textTransform: 'none',
        fontSize: 16,
      },
    },
});

function App() {
    const [filterFlights, setFilterFlights] = useState(false)
    const [filterActivities, setFilterActivities] = useState(true)
    const [filterHotels, setFilterHotels] = useState(true)
    const [destID, setDestID] = useState("")
    const [departureDate, setDepartureDate] = useState("")
    const [arrivalDate, setArrivalDate] = useState("")
    const [destination, setDestination] = useState("")
    const [travelers, setTravelers] = useState(1)
    const [authenticated, setAuthenticated] = useState(false)
    const [itinerary, setItinerary] = useState(
         {
            'Activities': [],
            'Hotel': null,
            'flight': null
          }
    );
    const [activities, setActivities] = useState ({})
    const [cost, setCost] = useState(0.00)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [userData, setUserData] = useState(null);
    
    window.addEventListener('beforeunload', (event) => {
      event.returnValue = `Are you sure you want to leave?`;
    });
   
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

    const addToItinerary = (item)=>{

        
        if ( itinerary.includes(item) || itinerary.some(item => item.category === 'hotel')) {
           console.log("already added ")
        }else{
            // itinerary.push(item)
            setItinerary([...itinerary, item])
        }
         // setItinerary(itinerary)
          console.log("Itinerary")
          console.log(itinerary)
          console.log(itinerary.length)
      }

      
      const fetchUserData = async (token, userId) => {
        try {
          const user = await fetchUserDataFromToken(token, userId);
          setUserData(user);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      useEffect(() => {
        const token = localStorage.getItem('token');
    
        if (token) {
          setAuthenticated(true); // Set authenticated status to true
    
          // Assuming you have the user's ID stored somewhere
          const userId =  localStorage.getItem("userId"); // Replace with the actual user ID
          fetchUserData(token, userId);
        }
      }, []);

      useEffect(() => {
        console.log("userdata changed", userData);
      }, [userData]);

      // let storageitem = JSON.parse(localStorage.getItem("Itinerary"));
    
      // useEffect(() => {
      //   console.log("itinerary updated", itinerary)
      //   localStorage.setItem("Itinerary", JSON.stringify(itinerary));
      //   console.log("itinerary has been updated", JSON.parse(localStorage.getItem("Itinerary")));
      // }, [itinerary]);
    
      
      
    return ( 
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
            <div className="font-sans">
                
                <Router>
                <Navbar
                        authenticated={authenticated}
                        setAuthenticated={setAuthenticated}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        confirmPassword={confirmPassword}
                        setConfirmPassword={setConfirmPassword}
                        phoneNumber={phoneNumber}
                        setPhoneNumber={setPhoneNumber}
                        name={name}
                        setName={setName}
                    />
                    <Routes>
                        <Route path="/" element={
                            <Homepage filterFlights={filterFlights} setFilterFlights={setFilterFlights}
                                    filterActivities={filterActivities} setFilterActivities={setFilterActivities}
                                    filterHotels={filterHotels} setFilterHotels={setFilterHotels}
                                    departureDate={departureDate} setDepartureDate={setDepartureDate}
                                    arrivalDate={arrivalDate} setArrivalDate={setArrivalDate}
                                    destination={destination} setDestination={setDestination}
                                    travelers={travelers} setTravelers={setTravelers}
                                    destID={destID} setDestID={setDestID}
                                    setActivities = {setActivities}
                            />
                        } />
                        <Route path="/activities" element={
                            <Activities itinerary ={itinerary}
                                        setItinerary = {setItinerary}
                                        addToItinerary = {addToItinerary}
                                        travelers={travelers}
                                        departureDate={departureDate}
                                        arrivalDate={arrivalDate}
                                        cost={cost}
                                        destination={destination}
                                        activities = {activities} /> }/>
                        <Route path="/hotels" element={
                            <HotelsPage 
                                    travelers={travelers}
                                    departureDate={departureDate}
                                    arrivalDate={arrivalDate}
                                    destination={destination}
                                    destID={destID} setDestID={setDestID}
                                    cost={cost} setCost={setCost}
                                    itinerary={itinerary} setItinerary={setItinerary}
                                    filterActivities={filterActivities} />} 

                        />
                         <Route path="/account" element={
                            <Account 
                            authenticated={authenticated}
                            setAuthenticated={setAuthenticated}
                            userData={userData}/>} 
                        />
                         <Route path="/Itineraries" element={
                            <Itinerary
                                    travelers={travelers}
                                    departureDate={departureDate}
                                    arrivalDate={arrivalDate}
                                    destination={destination}
                                    destID={destID} setDestID={setDestID}
                                    cost={cost} setCost={setCost}
                                    authenticated={authenticated}
                            />} 

                        />
                          <Route path="/Flights" element={
                            <FlightsPage itinerary={itinerary} setItinerary={setItinerary} destination={destination} arrivalDate={arrivalDate} departureDate={departureDate} 
                            travelers={travelers} cost={cost} setCost={setCost}/>} 
                        />
                         <Route path="/favorites" element={
                            <Favorites authenticated={authenticated}/>} 
                        />
                         <Route path="/booking" element={
                            <Booking itinerary={itinerary} authenticated={authenticated}/>} 
                        />
                         <Route path="/checkout" element={
                            <Checkout itinerary={itinerary} arrivalDate={arrivalDate} departureDate={departureDate} destination={destination}/>} 
                        />
                    </Routes>
                </Router>
                <Footer />
            </div>
        </ThemeProvider>
    </LocalizationProvider>
  )
}

export default App