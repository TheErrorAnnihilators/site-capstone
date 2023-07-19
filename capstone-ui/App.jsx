import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Homepage from './Homepage'
import Navbar from './Navbar'
import Footer from './Footer'
import './index.css'

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
    const [filterHotels, setFilterHotels] = useState(false)

    const [departureDate, setDepartureDate] = useState(null)
    const [arrivalDate, setArrivalDate] = useState(null)

    const [destination, setDestination] = useState(null)

    const [travelers, setTravelers] = useState(null)

    const [budget, setBudget] = useState(null)

    
    return ( 
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme} >
            <div className="w-screen h-screen">
                <Navbar />
                <Homepage filterFlights={filterFlights} setFilterFlights={setFilterFlights}
                        filterActivities={filterActivities} setFilterActivities={setFilterActivities}
                        filterHotels={filterHotels} setFilterHotels={setFilterHotels}
                        departureDate={departureDate} setDepartureDate={setDepartureDate}
                        arrivalDate={arrivalDate} setArrivalDate={setArrivalDate}
                        destination={destination} setDestination={setDestination}
                        travelers={travelers} setTravelers={setTravelers}
                        budget={budget} setBudget={setBudget}
                />

              
                <Footer />
                
            </div>
        </ThemeProvider>
    </LocalizationProvider>
  )
}

export default App