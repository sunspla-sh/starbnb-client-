import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



function BookingPage() {
   
  const planetId = useParams().planetId;

  const [planet, setPlanet ] = useState(null);

  const [startDate, setStartDate] = useState(new Date());

  const [total, setTotal] = useState(null);
  
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() +1 );

  const [endDate, setEndDate] = useState(tomorrow);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(()=> {

  axios.get(`${process.env.REACT_APP_API_URL}/api/planet/${planetId}`)
    .then((response)=>{
      console.log(response);
      setPlanet(response.data)
    })

    .catch((error)=>{
      console.log(error);
    })

  }, [planetId])


function calculateNights(date1, date2) {
  if(endDate - startDate > 0){
    const differenceInMilli = date2 - date1;
    const milliInDay = 24 * 60 * 60 * 1000;
    const nights = Math.round(differenceInMilli/milliInDay);
    return nights;
  }
  return 0;
}


useEffect(()=> {
if(planet && endDate - startDate > 0){
// const differenceInMilli = endDate - startDate;
// const milliInDay = 24 * 60 * 60 * 1000;
const nights = calculateNights(startDate, endDate);
console.log(nights);
console.log(nights * planet.pricePerNight);
setTotal(nights * planet.pricePerNight)
}
}, [planet, startDate, endDate])


  
const navigate = useNavigate();

function handleBookingSubmit(){
  const authToken = localStorage.getItem('authToken');
const requestBody= { 
  planet: planetId,
  startDate: startDate,
  endDate: endDate,
  totalPrice: total,
 }

 axios.post(`${process.env.REACT_APP_API_URL}/api/stay`, requestBody, {
   headers: { 
     authorization: `Bearer ${authToken}`
   }
   
 })

 .then((response) =>{
  console.log(response)
  navigate("/mystays")
 })

 .catch((error) =>{
  console.log(error);
 })

}



  return (
      <div className="App" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: '5rem'
      }}>
        <header className="App-header"> </header>
       
       <h3> Book Your Stay </h3>

       { planet ? (
          
        <>
        <h1> { planet.name } </h1>
    
        <img src={ planet.image }/>

        <div>
      
        <h4>
                
       $ {  " " +  + planet.pricePerNight } GCS per night
        
        </h4>
{/*            
        <h4>
            
        { " " + planet.description }
        </h4> */}
           


       <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
      />
     


     <div className="totalPrice">

     <p>Your Total</p>
     <p> Price Per Night</p>
     <p>{ planet.pricePerNight }</p>
     <p> Number of Nights</p>
     <p>{ calculateNights(startDate, endDate) }</p> 
     <p>Total</p>
     <p>{ total }</p>

     </div>

     <button type="button" onClick={ handleBookingSubmit } className="bookingButton"> Book { planet.name } </button>



       </div>
             

        </>
        ): <p>loading....</p> }









      </div>
    );
  }


export default BookingPage;

