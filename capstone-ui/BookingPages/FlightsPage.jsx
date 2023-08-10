import '../index.css';
import { useState, useEffect } from 'react';
import FlightCard from './FlightCard';
import { CircularProgress } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from 'react-tippy';



function FlightsPage({ setItinerary, itinerary, destination, arrivalDate, 
                       departureDate, travelers, cost, setCost,
                       departureIATA, arrivalIATA, userId, setFlightCost, FlightCost, setHotelCost, hotelCost, cabinClass, setCabinClass, authenticated }) {

    const navigate = useNavigate();

    


    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [cabinClass, setCabinClass] = useState("");
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [itinerariesSaved, setItinerariesSaved] = useState(0)
    const [savedItinerary, setSavedItinerary] = useState({
        userId: 1,
        hotelData:{
            name: "",
            city:"",
            price:0,
            check_in:"",
            check_out:""
        },
        activities:[
            {
            name: "",
            city:"",
            price:0,
            check_in:"",
            check_out:""
         },
    ],
 
        flightData:{
            origin: "",
            destination: "",
            departing_at:"",
            arriving_at: "",
            carrier:{
                name:""
            }


    }
    })

    const [flightsFound, setFlightsFound] = useState(true);

  
    useEffect(() => {
      setFlightsFound(searchResults.length > 0);
    }, [searchResults]);
  
    const handleOnClick = (option) => {
      console.log("Selected option:", option);
    
      if (option === "Premium Economy" && cabinClass !== "premium_economy") {
        console.log("Setting cabin class to Premium Economy");
        setCabinClass("premium_economy");
      } else if (option === "Economy" && cabinClass !== "economy") {
        console.log("Setting cabin class to Economy");
        setCabinClass("economy");
      } else if (option === "First" && cabinClass !== "first") {
        console.log("Setting cabin class to First");
        setCabinClass("first");
      } else if (option === "Business" && cabinClass !== "business") {
        console.log("Setting cabin class to Business");
        setCabinClass("business");
      }
    };
    
    async function setFlight() {
        departureDate= departureDate;
        arrivalDate= arrivalDate;
        // setCabinClass(cabinClass); 
        travelers = travelers;
      
        let flight = {
            "numTravelers": travelers.toString(),
            "origin": departureIATA,
            "destination": arrivalIATA,
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
    console.log("RES",searchResults)
    setLoading(false);
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
   
    useEffect(() => {
        setFlight();
      }, [cabinClass]);

      useEffect(() => {
      }, [savedItinerary]);

    useEffect(() => {
      let totalprice = cost + FlightCost;
      console.log("totalprice updated", totalprice);
    }, [cost])

    useEffect(() => {
        console.log(itinerary)
    }, [])

//for save for later feature
      const handleOnSubmit = async (e) => {
        e.preventDefault();
       // if (itinerary['Activities'].length !== 0 && itinerary.Hotel !== null && itinerary.flight !== null){

        
        // Update the state using the setSavedItinerary function
        setSavedItinerary({
            hotelData: {
                name: itinerary.Hotel.name,
                city: itinerary.Hotel.wishlistName,
                price: itinerary.Hotel.priceBreakdown.grossPrice.value.toFixed(2),
                check_in: itinerary.Hotel.checkinDate,
                check_out: itinerary.Hotel.checkoutDate,

            },
            activities:itinerary.Activities.map(activity => ({ 
                //itinerary.Activities[0].name
                //itinerary.Activities[0].location.locality
                    name: activity.name,
                    city: activity.location.locality,
                    price: 0,
                    check_in: itinerary.Hotel.checkinDate,
                    check_out: itinerary.Hotel.checkoutDate,
                })),
            
                //origin and destination are flipped in res
            flightData: {
                origin: departureIATA, //itinerary.flight[0].slices[0].segments[0].destination, //or  departureIATA
                destination: arrivalIATA, //itinerary.flight[0].slices[0].segments[0].origin, // or arrivalIATA
                departing_at: itinerary.flight[0].slices[0].segments[0].departingAt,
                arriving_at:itinerary.flight[0].slices[0].segments[0].arrivingAt,
                carrier: {
                    name: itinerary.flight[0].slices[0].segments[0].carrier.name,
                    website: itinerary.flight[0].slices[0].segments[0].carrier.website
                },
            },
        });
        setItinerary({'Activities' : [],
                        'Hotel' : null,
                        'flight': null})
        setCost(0.00)
        setItinerariesSaved(itinerariesSaved + 1)
       

    };

    useEffect(() => {

      let auserId = localStorage.getItem("userId");
        
        const submitData = async () => {
            try {
        
                const response = await axios.post(
                    `https://nomadiafe.onrender.com/api/users/${userId}/itineraries`,
                    savedItinerary
                );
                console.log(savedItinerary)
                console.log("successful", response.data.results);
                navigate("/account")
            } catch (error) {
                console.error(error);
            }
        };

        // Call the submitData function when itinerariesSaved changes
        submitData();
    }, [itinerariesSaved]);
      return (
        <>
          {!loading && (
            <div className="flex flex-col w-screen h-screen">
              <div className="flex w-screen h-screen px-56 bg-slate-900 overflow-scroll">
                <div className="relative shadow-lg py-4 px-8 bg-white w-screen h-screen overflow-scroll">
                  <div className="flex border-b">
                    <div>
                      <div className="flex">
                        <div className="mr-2 text-4xl">Flights to</div>
                        <div className="font-semibold text-blue-500 text-4xl">
                          {destination.toUpperCase() || localStorage.getItem("Destination").toUpperCase() || ""}
                        </div>
                      </div>
                      <div className="flex-auto">
                        <div className="text-2xl flex flex-col mt-3">
                          <div>
                            {arrivalDate} to {departureDate}
                          </div>
                          <div className="mb-3">
                            {travelers} {travelers > 1 ? 'guests' : 'guest'}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <div className="text-2xl font-bold">Total trip cost: ${cost}</div>
                      <div>
                        <div>Excluding taxes and fees.</div>
                        <div className="flex flex-col">
                          <button
                            disabled={itinerary['flight'] === null || itinerary == {}}
                            onClick={() => {
                              navigate('/booking');
                            }}
                            className={
                              itinerary['flight'] == null
                                ? 'bg-gray-100 text-gray-400'
                                : ''
                            }
                          >
                            {!flightsFound || itinerary['flight'] === null
                              ? 'Select a flight to continue'
                              : 'Continue'}
                          </button>
                          {authenticated && (
                          <Tooltip
                            title={
                              !flightsFound || savedItinerary.flightData === null ||
                              savedItinerary.hotelData === null ||
                              savedItinerary.activities === null
                                ? 'Incomplete Itinerary'
                                : ''
                            }
                            position="bottom"
                            trigger="mouseenter"
                            arrow={true}
                            style={{ maxWidth: '100px' }}
                          >
                            <button
                              disabled={
                                !flightsFound ||
                                savedItinerary.flightData === null ||
                                savedItinerary.hotelData === null ||
                                savedItinerary.activities === null
                              }
                              onClick={handleOnSubmit}
                              className={
                                !flightsFound ||
                                savedItinerary.flightData === null ||
                                savedItinerary.hotelData === null ||
                                savedItinerary.activities === null
                                  ? 'bg-gray-100 text-gray-400'
                                  : ''
                              }
                            >
                              Save For Later
                            </button>
                          </Tooltip>
                        )}

                          {!authenticated && <Tooltip
                            title={
                              !flightsFound || itinerary['flight'] === null || itinerary['hotel'] == null || itinerary['Activities'] == []
                                ? 'Login/Register to save'
                                : ''

                            }
                            position="bottom"
                            trigger="mouseenter"
                            arrow={true}
                            style={{ maxWidth: '100px' }} // Adjust the maxWidth value as needed
                          >
                            {/* Your "Save For Later" button code */}
                            <button
                              disabled={!flightsFound || itinerary['flight'] === null || itinerary['hotel'] == null || itinerary['Activities'] == []}
                              onClick={handleOnSubmit}
                              className={
                                !flightsFound || itinerary['flight'] === null || itinerary['hotel'] == null || itinerary['Activities'] == []
                                  ? 'bg-gray-100 text-gray-400'
                                  : ''
                              }
                            >
                              Save For Later
                            </button>
                          </Tooltip>}



                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full lg:max-w-sm flex flex-row mr-[270px] mb-[10px]">
                    <h2 className="text-2xl mr-[10px] mt-8">
                      Cabin class:
                    </h2>
                    <select
                      value={cabinClass}
                      onChange={(e) => setCabinClass(e.target.value)} // Update the cabin class directly
                      className="w-[200px] p-1 text-black mt-8 bg-white border-white-2 rounded-md shadow-xl cursor-pointer outline-md appearance-none focus:border-indigo-600 mb-5 text-center text-2xl"
                    >
                      {["Economy", "First", "Business", "Premium Economy"].map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                  </div>
                  <div className="flex flex-col">
                  {searchResults.length > 0 ? (
                    searchResults.map((item, index) => (
                      <FlightCard
                        key={index}
                        flight={item}
                        itinerary={itinerary}
                        setItinerary={setItinerary}
                        selectedFlight={selectedFlight}
                        onSelectFlight={handleSelectFlight}
                        setFlightCost={setFlightCost}
                        FlightCost={FlightCost}
                        setCost={setCost}
                        cost={cost}
                        hotelCost={hotelCost}
                        checkout={false}
                      />
              ))
            ) : (
              <div className="text-2xl px-56 mt-4 ml-5">
                No flights have been found for the selected criteria.
              </div>
            )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {loading && (
            <div className="w-screen h-screen">
              <div className="text-4xl px-56 mt-4 ml-5">Fetching flights... <CircularProgress /> </div>
            </div>
          )}
        </>
      );}      
export default FlightsPage;
