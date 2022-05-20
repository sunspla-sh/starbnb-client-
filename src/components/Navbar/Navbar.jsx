import { Link } from "react-router-dom";
import { useContext } from "react";                     // <== IMPORT 
import { AuthContext } from "../../context/auth.context";  // <== IMPORT
import { logOutUser } from "../../context/auth.context";
import logo from "../../images/logo.png"; // <== IMPORT

 
function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser} = useContext(AuthContext);   // <== ADD
 
  
  //  Update the rendering logic to display different content 
  //  depending on the user being logged in or not


  return (
  <>
   

    <nav className="navbar navbar-expand-md navbar-light" style={{height:'100px', backgroundColor: 'white'}}>
    <div class="container-fluid">
    <div className="navbar-brand">
    <Link to="/">
    <img src={ logo } width="240" height="80"/>
    </Link>
    </div>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
{/* 
    <div className="navbar-button"> */}
    <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
    <ul className="navbar-nav ml-auto  mb-2 mb-md-0">

    

    <li className="nav-item">
    <Link to="/">
     <button>Home</button>
     </Link>
    </li>
    {isLoggedIn && (
        <>
          <Link to="/mystays">
            <button>My Stays</button>
          </Link>       

          {/* <Link to="/user">
            <button>Profile</button>
          </Link>   */}

          <button onClick={logOutUser}>Logout</button>
        </>
      )}
 
      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
    
        </>

      )}

      
       </ul>
       
       </div>
   </div>
  </nav> 
 
       
  
      {/* {isLoggedIn && (
        <>
          <Link to="/mystays">
            <button>My Stays</button>
          </Link>        
          <Link to="/user">
            <button>Profile</button>
          </Link>  

          <button onClick={logOutUser}>Logout</button>
        </>
      )}
 
      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
    
        </>
        
      )} */}

<div className="welcome">
                 
 { user ? <p> Bright Suns, {user.name}</p> : <p> Bright Suns, Rayt! </p> }
     
 </div>  
    
      </>



  );
  
}






export default Navbar;