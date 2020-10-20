import React, { useContext } from 'react';
import './Navbar.css'
import logo from '../../resources/logos/Group 1329.png'
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <Link to='/home'><div className="logo ml-5">
            <img src={logo} alt=""/>
          </div></Link> 
          
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to='/home' className="nav-link mr-5" >Home <span class="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-5" href="#">Destination</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-5" href="#">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-5" href="#">Blog</a>
            </li>
          
             {loggedInUser.isSignedIn? <button class="btn btn-primary mr-5" type="submit">{loggedInUser.name}</button>:
              <button class="btn btn-primary my-2 my-sm-0 mr-5" type="submit">Register</button>}
            <button class="btn btn-dark my-2 my-sm-0 mr-5 " type="submit">Admin</button>
          
          </ul>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;