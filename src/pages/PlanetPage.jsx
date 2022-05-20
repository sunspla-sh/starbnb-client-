import {  useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
// import SimpleImageSlider from "react-simple-image-slider";
import { AuthContext } from "../context/auth.context";



// import { id } from "react-router-dom";




function PlanetPage() {

    const planetId = useParams().planetId;
    const { user } = useContext(AuthContext);
    const [planet, setPlanet ] = useState(null);

    

    useEffect(()=> {
        
  
    axios.get(`http://localhost:5005/api/planet/${planetId}`)
      .then((response)=>{
        console.log(response);
        setPlanet(response.data)
      })
  
      .catch((error)=>{
        console.log(error);
      })
  
    }, [planetId])
  
    

 
    return (
      <div className="App">
        <header className="App-header"> </header>
         
  

        {/* { planet && <p>{ planet.name }</p> } */}
        { planet ? (
          
          <>
        <h1> { planet.name } </h1>
       

        <img src={ planet.image }/>
       
        
{/* const images = [
        <img src={ `${planet.image1}` }/>,
        <img src={ `${planet.image2}` }/>,] */}


       
      {/* <SimpleImageSlider className="imageSlider"
        width={896}
        height={504}
        images={planet.image1 + planet.image2}
        showBullets={true}
        showNavs={true}
        /> */}

          <div>
            
            <h4>    
            $ {  " " +  + planet.pricePerNight } GCS per night
            </h4>
           
            <h4>
                { " " + planet.description }
            </h4>

              <p> 
                  climate:
              { " " + planet.climate }, 
              </p> 
              
              <p> 
                  gravity:
              { " " + planet.gravity } 
              </p>

              <p> 
                  terrain:
              { " " + planet.terrain }, 
              </p> 
 
              <p> 
                  population:
              { " " + planet.population } 
              </p>

              </div>
            { user ? (
                <Link to={`/booking/create/${planetId}`}>
                <button type="button"> Book { planet.name } </button>
                </Link> 
            ) : (
                <Link to={'/login'}>
                <button type="button"> Login to book { planet.name } </button>
                </Link> 
            )}
              

              </>
         ): <p>loading....</p> }
  
  
      </div>
     
    );
  }







export default PlanetPage;

