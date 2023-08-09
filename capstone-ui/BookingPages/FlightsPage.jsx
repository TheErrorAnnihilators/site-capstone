import '../index.css';
import { useState, useEffect } from 'react';
import FlightCard from './FlightCard';
import airplane from '../../public/assets/airplane.jpg';
import flight from '../../public/assets/flight.png';

import clouds from '../../public/assets/clouds.jpg';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, filledInputClasses, CircularProgress } from '@mui/material'
import axios from 'axios'

import { useNavigate } from 'react-router-dom';




function FlightsPage({ setItinerary, itinerary, destination, arrivalDate, departureDate, travelers, dest_iata, origin_iata }) {

    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cabinClass, setCabinClass] = useState("economy");
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [cost, setCost] = useState(0)
    const navigate = useNavigate();

    
    
    dest_iata = "ORD"; // Replace with actual destination IATA code
    origin_iata = "JFK"; 
    
    async function setFlight() {
        departureDate= "2023-09-02";
        arrivalDate= "2023-09-04";
        setCabinClass("economy"); 
        travelers = "2";
      
        let flight = {
            "numTravelers": travelers.toString(),
            "origin": origin_iata,
            "destination": dest_iata,
            "departure_date": departureDate,
            "arrival_date": arrivalDate,
            "cabin_class": cabinClass
        } 

    if (flight.departure_date.length == 0) {
        flight = {
            "numTravelers": localStorage.getItem("numTravelers"),
            "origin": localStorage.getItem("origin"),
            "destination": localStorage.getItem("destination"),
            "departure_date": localStorage.getItem("departure_date"),
            "arrival_date": localStorage.getItem("arrival_date"),
            "cabin_class": localStorage.getItem("cabin_class")
        } 
        console.log("set flight?", flight);
      } 

      
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await axios.post('https://nomadiafe.onrender.com/api/flights', flight);
    localStorage.setItem("numTravelers", flight.numTravelers);
    localStorage.setItem("origin", flight.origin);
    localStorage.setItem("destination", flight.destination);
    localStorage.setItem("departure_date", flight.departure_date);
    localStorage.setItem("arrival_date", flight.arrival_date);
    localStorage.setItem("cabin_class", flight.cabin_class);




    setSearchResults(response.data);
    setLoading(false);

        let totalCost = 0;
    if (searchResults.length > 0) {
        totalCost = searchResults.reduce((acc, flight) => acc + parseFloat(flight.totalAmount), 0);
    }

    setCost(totalCost.toFixed(2));


    }
    const handleSelectFlight = (flight) => {
        if (selectedFlight === flight) {
          // If the same flight is clicked again, deselect it
          setSelectedFlight(null);
        } else {
          // Otherwise, select the clicked flight
          setSelectedFlight(flight);
        }
    };
    const handleOnClick = (option) => {
        if (option == "Premium Economy" && cabinClass != "premium_economy") {
            setCabinClass("premium_economy");
        } else if (option == "Economy" && cabinClass != "economy") {
            setCabinClass("economy");
        } else if (option == "First" && cabinClass != "first") {
            setCabinClass("first");
        } else if (option == "Business" && cabinClass != "business") {
            setCabinClass("business");
        }
       
        console.log(option);

    };

        
    useEffect(() => {
        console.log("itinerary updated in flights", itinerary)
        localStorage.setItem("Itinerary", JSON.stringify(itinerary));
    }, [itinerary]);

    
    useEffect(() => {
        setFlight();
      }, [cabinClass]);
    //     let item = {
        
    //         "totalAmount": "290.71",
    //         "totalCurrency": "USD",
    //         "slices": [
    //             {
    //                 "segments": [
    //                     {
    //                         "origin": "John F. Kennedy International Airport",
    //                         "destination": "O'Hare International Airport",
    //                         "departingAt": "2023-09-02T00:46:00",
    //                         "arrivingAt": "2023-09-02T01:56:00",
    //                         "carrier": {
    //                             "name": "Duffel Airways",
    //                             "logoUrl": "https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/ZZ.svg",
    //                             "website": null
    //                         }
    //                     }
    //                 ]
    //             },
    //             {
    //                 "segments": [
    //                     {
    //                         "origin": "O'Hare International Airport",
    //                         "destination": "John F. Kennedy International Airport",
    //                         "departingAt": "2023-09-04T02:19:00",
    //                         "arrivingAt": "2023-09-04T05:29:00",
    //                         "carrier": {
    //                             "name": "Duffel Airways",
    //                             "logoUrl": "https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/ZZ.svg",
    //                             "website": null
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
        
    // }
    return (
        <div className="w-screen h-screen">
          {loading && (
            <div>
              <div className="text-4xl px-56 mt-4 ml-5">Fetching flights...  <CircularProgress /></div>
            </div>
          )}
          {!loading && (
            <div className="flex w-screen h-screen px-56 bg-slate-900">
              <div className="relative shadow-lg py-4 px-8 bg-white w-screen overflow-y-scroll">
                <div className="border-b flex">
                  <div>
                    <div className="flex">
                      <div className="mr-2 text-4xl">Flights to </div>
                      <div className="font-semibold text-blue-500 text-4xl"> {destination.toUpperCase()}</div>
                    </div>
                    <div className="flex-auto">
                      <div className="text-2xl flex flex-col mt-3">
                        <div>{arrivalDate} to {departureDate}</div>
                        <div className="mb-3">{travelers} {travelers > 1 ? 'travelers' : 'traveler'}</div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <div className="text-2xl font-bold">Total trip cost: ${cost}</div>
                    <div>
                      <div>Excluding taxes and fees.</div>
                      <div>
                        <button
                          disabled={!itinerary.flights || itinerary.flights.length === 0}
                          onClick={() => {
                            navigate('/booking');
                          }}
                          className={!itinerary.flights || itinerary.flights.length === 0 ? `bg-gray-100 text-gray-400` : ``}
                        >
                          {!itinerary.flights || itinerary.flights.length === 0 ? 'Select flights to continue' : 'Continue'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {(searchResults.length !== 0) && (
                  <div className="grid grid-cols-1 gap-6 mt-3">
                    {searchResults.map((item, index) => (
                      <FlightCard
                        key={index}
                        flight={item}
                        itinerary={itinerary}
                        setItinerary={setItinerary}
                        checkout={true} // Set to true if this is the checkout page
                        cost={cost}
                        setCost={setCost}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      );
}

export default FlightsPage;
