import { useEffect, useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Homepage from './Homepage'
import Navbar from './Navbar'
import Footer from './Footer'
import Activities from './BookingPages/Activities'
import HotelsPage from './BookingPages/HotelsPage';
import './index.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: ['IBM Plex Sans', 'sans-serif'].join(','),
        textTransform: 'none',
        fontSize: 16,
      },
    },
});

function App() {
    const [filterFlights, setFilterFlights] = useState(false)
    const [filterActivities, setFilterActivities] = useState(false)
    const [filterHotels, setFilterHotels] = useState(true)

    const [destID, setDestID] = useState("")

    const [departureDate, setDepartureDate] = useState("")
    const [arrivalDate, setArrivalDate] = useState("")

    const [destination, setDestination] = useState("")

    const [travelers, setTravelers] = useState(1)

    const [authenticated, setAuthenticated] = useState(false)

    const [itinerary, setItinerary] = useState([])
    const [activities, setActivities] = useState ({})

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
      
      
    return ( 
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
            <div className="font-sans">
                <Navbar />
                <Router>
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
                                        destination={destination}
                                        activities = {activities} /> }/>
                        <Route path="/hotels" element={
                            <HotelsPage 
                                    travelers={travelers}
                                    departureDate={departureDate}
                                    arrivalDate={arrivalDate}
                                    destination={destination}
                                    destID={destID} setDestID={setDestID} />} 
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