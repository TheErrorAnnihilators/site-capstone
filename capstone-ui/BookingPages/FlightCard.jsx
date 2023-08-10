import '../index.css';
import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';

function FlightsCard({ flight, itinerary, setItinerary, checkout, FlightCost, setFlightCost, cost, setCost, hotelCost, key }) {
  const [formattedDepartureOutbound, setFormattedDepartureOutbound] = useState("");
  const [formattedArrivalOutbound, setFormattedArrivalOutbound] = useState("");
  const [formattedDepartureInbound, setFormattedDepartureInbound] = useState("");
  const [formattedArrivalInbound, setFormattedArrivalInbound] = useState("");
  const [selected, setSelected] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //console.log("The itienrary in flight card", itinerary);

    // Check if the selected flight is in the itinerary
    // setSelected(false);
    // console.log("itinerary???? ", itinerary);

    // console.log("itinerayflight ", itinerary.flight, " ", itinerary.flight.name, " ", flight.name);
    // setSelected(itinerary.flight && itinerary.flight.name === flight.name && itinerary.flight.name != null);
    useEffect(() => {
      if (loading) {
        return;
      }
      console.log(flight, " the data");
      setSelected(
        itinerary.flight &&
        itinerary.flight.length > 0 &&
        itinerary.flight[0].id === flight.id &&  // Compare flight IDs
        itinerary.flight[0].slices[0].segments[0].origin === flight.slices[0].segments[0].origin &&
        itinerary.flight[0].slices[0].segments[0].destination === flight.slices[0].segments[0].destination &&
        itinerary.flight[0].slices[0].segments[0].departingAt === flight.slices[0].segments[0].departingAt &&
        itinerary.flight[0].slices[0].segments[0].arrivingAt === flight.slices[0].segments[0].arrivingAt &&
        itinerary.flight[0].slices[1].segments[0].origin === flight.slices[1].segments[0].origin &&
        itinerary.flight[0].slices[1].segments[0].destination === flight.slices[1].segments[0].destination &&
        itinerary.flight[0].slices[1].segments[0].departingAt === flight.slices[1].segments[0].departingAt &&
        itinerary.flight[0].slices[1].segments[0].arrivingAt === flight.slices[1].segments[0].arrivingAt &&
        parseFloat(itinerary.flight[0].totalAmount) === parseFloat(flight.totalAmount)
      );
    }, [itinerary, flight]);
    


  const handleSelectFlight = () => {
    // If the button is disabled, prevent further actions
    console.log("enetered selected flight");
    if (loading) {
      return;
    }
    console.log("got here");
  
    // Toggle the selected state
    console.log("selected ", selected, " loading ", loading);
    let s = !selected;
    setSelected(s);
    console.log("selected ", selected, " loading ", loading);
  
    // Update the itinerary with the selected flight or remove it
    const updatedItinerary = {
      ...itinerary,
      flight: selected ? null : [flight], // Set to an array with either the selected flight or an empty array
    };
  
    // Calculate the total cost based on the selected flight in the updated itinerary
    const totalCost = selected ? parseFloat(hotelCost) : parseFloat(flight.totalAmount) + parseFloat(cost);

    console.log("hotelcost", hotelCost);

    console.log("cost ", cost, " totalcost ", totalCost.toFixed);
    setCost(totalCost.toFixed(2));

  
    setFlightCost(totalCost.toFixed(2)); // Update the FlightCost prop
  
    // Disable the button temporarily during the state update
    setLoading(true);
    console.log("selected ", selected, " loading ", loading);

  
    setTimeout(() => {
      setItinerary(updatedItinerary);
      setLoading(false);
    }, 800); // Adjust the delay as needed
    console.log("the itinerary", itinerary);
  };

  
 //console.log("flights", itinerary)
  function updateItinerary() {
    if (selected) {
      // Remove flight from itinerary
      setItinerary((prevState) => ({
        ...prevState,
        flight: prevState.flight.filter((item) => item.departingAt !== flight.departingAt),
      }));
      console.log("??", itinerary);
    } else {
      // Add flight to itinerary
      setItinerary((prevState) => ({
        ...prevState,
        flight: {flight},
      }));
    }
    setSelected((prevSelected) => !prevSelected);
  }
  useEffect(()=> {
  },[itinerary])

  function convertToNormalTime(dateTimeString) {
    const dateObj = new Date(dateTimeString);
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();

    const amPm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${amPm}`;
  }

  useEffect(() => {
    if (flight) {
      // Convert the outbound departure time to normal time format
      const formattedDepartureOut = convertToNormalTime(
        flight.slices[0].segments[0].departingAt
      );
      setFormattedDepartureOutbound(formattedDepartureOut);

      // Convert the outbound arrival time to normal time format
      const formattedArrivalOut = convertToNormalTime(
        flight.slices[0].segments[0].arrivingAt
      );
      setFormattedArrivalOutbound(formattedArrivalOut);

      // Convert the inbound departure time to normal time format
      const formattedDepartureIn = convertToNormalTime(
        flight.slices[1].segments[0].departingAt
      );
      setFormattedDepartureInbound(formattedDepartureIn);

      // Convert the inbound arrival time to normal time format
      const formattedArrivalIn = convertToNormalTime(
        flight.slices[1].segments[0].arrivingAt
      );
      setFormattedArrivalInbound(formattedArrivalIn);

      if (flight.slices.length === 0) {
        setLoading(true);
      } else {
        setLoading(false);
      }
    }
  }, [flight]);
  return (
    <div className='p-5 rounded-md'>
     
        <div className='border border-black-10 shadow-lg rounded-md'>
          <div className='flex justify-between'>
            <div className='p-3 flex'>
                <div>
                
                <div className="flex">
                <div>
                    <div className="text-xl mb-2 font-bold">Outbound</div>
                    <div className='flex mr-2 border-b pb-4'>
                        
                        <div className="mr-2">
                        <img
                            className='w-[50px] h-[50px] mr-[20px]'
                            src={flight.slices[0].segments[0].carrier.logoUrl}
                            alt="Airline Logo"
                        />
                    </div>
                    <div className="flex flex-col text-xl">
                        <h2 className='whitespace-nowrap'>
                            Depart: {formattedDepartureInbound}
                        </h2>
                        <h2> Arrive: {formattedDepartureOutbound}</h2>
                    </div>
                    <div className='flex mx-8 items-end'>
                        <div>
                            <h2 className='text-2xl text-blue-500'>
                            {flight.slices[0].segments[0].carrier.name}
                            </h2>
                        </div>
                    </div>
                    </div>
                </div>

                <div>
                    <div className="text-xl mb-2 font-bold">Inbound</div>
                    <div className='flex mr-2 border-b pb-4'>
                    <div className="mr-2">
                    <img
                        className='w-[50px] h-[50px] mr-[20px]'
                        src={flight.slices[1].segments[0].carrier.logoUrl}
                        alt="Airline Logo"
                    />
                  </div>
                  <div className="flex flex-col text-xl">
                    <h2 className='whitespace-nowrap'>
                        Depart: {formattedArrivalInbound}
                    </h2>
                    <h2> Arrive: {formattedArrivalOutbound}</h2>
                  </div>
                  <div className='flex mx-8 items-end'>
                    <div>
                        <h2 className='text-2xl text-blue-500'>
                        {flight.slices[1].segments[0].carrier.name}
                        </h2>
                    </div>
                  </div>
                    </div>
                </div>
                </div>
                </div>
                </div>
                <div className='flex p-5 flex-col'>
              {/* Total Price */}
              <div className="flex">
                <h2 className='text-xl mr-3 font-bold'>Total price: </h2>
                <h2 className='text-xl text-green-500'>${flight.totalAmount}</h2>
              </div>
              <div>
              <h2 className='text-sm text-gray-500'>Price for all travelers</h2>
              {/* Select button */}
              <div className="mt-4 mb-2">
              <button
              className={`rounded ${
                selected ? 'bg-green-600 text-gray-100' : ''
              }`}
              onClick={handleSelectFlight}
              disabled={loading || checkout}
              
            >
              {selected ? 'Selected' : 'Select'}
            </button>
            </div>
            </div>
            </div>
          </div>
        </div>
    
    </div>
  );
}

export default FlightsCard;
