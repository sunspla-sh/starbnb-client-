
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
      
     <p> Home </p>

   
  <div className="planetsContainer">
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
