import { link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function calculateNights(date1, date2) {
    if(date2 - date1 > 0){
      const differenceInMilli = date2 - date1;
      const milliInDay = 24 * 60 * 60 * 1000;
      const nights = Math.round(differenceInMilli/milliInDay);
      return nights;
    }
    return 0;
  }


function MyStaysPage(){

    
    const [stays, setStays ] = useState( [] );
    const authToken = localStorage.getItem("authToken");
    
    useEffect(()=> {
  
    axios.get('http://localhost:5005/api/stays',{ 
        headers: {
            authorization: "Bearer " + authToken
        }
    })
      .then((response)=>{
        console.log(response);
        setStays(response.data.stays)
      })
  
      .catch((error)=>{
        console.log(error);
      })
  
    }, [])
  
return(
<>
<h3> MY STAYS </h3>

<div className="staysContainer">
{stays.map((stay)=>{
return (


    <div className="staysCard">

               <div className="staysCardImage" style={{
                    backgroundImage: `url(${stay.planet.image})`
               }}>
               
               </div>   
               <p>
                {stay.planet.name}    
               </p>

               <p> 
                {new Date(stay.startDate).toDateString()}
              </p>

              <p>
                {new Date(stay.endDate).toDateString()}
              </p>

              <p>
                { calculateNights(new Date(stay.startDate), new Date(stay.endDate)) }
              </p>
               <p>
               $ {stay.totalPrice} GCS
              </p>

    </div>




)

})}

</div>




</>
)}
    
export default MyStaysPage;