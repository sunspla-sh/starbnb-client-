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
    <nav className="navbar">
    
   
    <div className="logo">
    <Link to="/">
    <img src={ logo }/>
    </Link>
    </div>

    <div className="navbar-button">

    <Link to="/">
     <button>Home</button>
     </Link>
 
 
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
      </div>
       

      { user ? <p> Bright Suns, {user.name}</p> : <p> Bright Suns, Rayt! </p> }

    </nav>
  );
}
 
export default Navbar;