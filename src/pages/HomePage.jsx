
import { useState, useEffect } from "react";
import axios from "axios";
import PlanetCard from "../components/PlanetCard/planetCard";
import { Link } from "react-router-dom";



function HomePage() {

  const [planets, setPlanets ] = useState( [] );

  useEffect(()=> {

  axios.get('http://localhost:5005/api/planets')
    .then((response)=>{
      console.log(response);
      setPlanets(response.data.planetsArray)
    })

    .catch((error)=>{
      console.log(error);
    })

  }, [])



  return (
    <div className="App">
      <header className="App-header"/>

    {/* <hero className="hero-container">
    <img className="hero-image" src="https://www.maturetimes.co.uk/wp-content/uploads/2019/12/Star-Wars-Episode-IX-The-Rise-of-Skywalker-848x478.jpg"/>
    </hero> */}
      


   <div className="hero-container"> 
     <div>
     
       <img src={"https://qph.cf2.quoracdn.net/main-qimg-f1326d6e290eb51121696c1e5f825f77.webp"}>
       </img>
       <div class="centered">Adventure Awaits.</div>
     </div>
    </div>   


   
  <div className="planetsContainer">
    <h3> Featured Stayed </h3>

    
     { planets.map((planet)=>{
       return (
  
      <div className="planetCard-container">
        <Link to={`/planet/${planet._id}`}>
        < PlanetCard planetData={ planet } /> 
        </Link>
        </div> 
       )
   
     })}
     </div>






    </div>

  );


  






}

export default HomePage;
