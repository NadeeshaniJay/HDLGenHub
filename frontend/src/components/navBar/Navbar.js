import React ,{useState, useEffect}from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Navbar.css';
import {LogOut} from 'react-feather';
import {User} from 'react-feather';

//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//import background from '../images/background.png'

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      //alert(parsedUser);
    }
  }, []);
  const navigate = useNavigate();
  const handleSignIn = () => {
    // Handle sign-in logic, e.g., navigate to the login page
    navigate('/login');
  };
  const handleEdit = () =>{
    navigate('/edituser');
  };
  const handleSignUp = () => {
    // Handle sign-up logic, e.g., navigate to the registration page
    navigate('/registration');
  };
  const handleLogOut = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
    window.location.reload();
  }
if(user)
{
  
if(user.role==="student"){
  return(
    <header>
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">
            <span style={{ color: 'orange' }}>HDL </span> Gen Hub
          </Link>
        </li>
        <li className="nav-item"><Link to="/learn">Learn</Link></li>
        <li className="nav-item"><Link to="/about">About</Link></li>
        <li className="nav-item"><Link to="/help">Help</Link></li>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="search-button">Search</button>
        </div>
        <div className='space-fix'>

        </div>
        <div className="edit-user">
          <button onClick={handleEdit}><User></User></button>
        </div>
        <div className="log-out-button">
          <button onClick={handleLogOut}><LogOut></LogOut></button>
        </div>
      </ul>
    </nav>
  </header>
  );
}
else if(user.role==="teacher"){
  return(
    <header>
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" style={{marginLeft:"20px",minWidth:'200px'}}>
            <span style={{ color: 'orange'}}>HDL </span> Gen Hub
          </Link>
        </li>
        <li className="nav-item"><Link to="/courses">Courses</Link></li>
        <li className="nav-item"><Link to="/about">About</Link></li>
        <li className="nav-item"><Link to="/help">Help</Link></li>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="search-button">Search</button>
        </div>
        <div className="edit-user">
          <button onClick={handleEdit}><User></User></button>
        </div>
        <div className="log-out-button">
          <button onClick={handleLogOut}><LogOut></LogOut></button>
        </div>
      </ul>
    </nav>
  </header>
  );
}
else if(user.role==="admin"){
  return(
    <header>
    <nav className="navbar">
      <ul className="nav-list">
      <li className="nav-item">
      <Link to="/">
        <span style={{ color: 'orange' }}>HDL </span> Gen Hub
      </Link>
      </li>
        <li className="nav-item"><Link to="/setting">Setting</Link></li>
        <div className="auth-buttons">
          <button onClick={handleSignIn} className="sign-in-button">
          Sign In
          </button>
        </div>
        <div>
          <button onClick={handleLogOut} class="log-out-button "><LogOut></LogOut></button>
        </div>
      </ul>
    </nav>
  </header>
  );
}
}
else{
  return(
    <nav class="bg-white border-gray-200 fixed w-full z-20 border-b shadow-sm top-0 start-0">
      <div class="max-w-screen-xl flex items-center justify-between p-2">
        <div class="flex font-semibold">
          <li class="block flex-initial text-gray-900 rounded hover:text-amber-700 mx-10">
            <Link to="/"><span style={{ color: 'orange' }}>HDL </span> Gen Hub</Link>
          </li>
          <li class="block text-gray-900 rounded hover:text-black hover:scale-105"><Link to="/about">About</Link></li>
          <li class="block text-gray-900 rounded hover:text-black hover:scale-105 mx-10"><Link to="/help">Help</Link></li>
        </div>
        
      <div class="flex sm:order-2">
        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="sm:hidden text-gray-500 hover:bg-gray-10 rounded-lg text-sm p-2.5 me-1">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <span class="sr-only">Search icon</span>
        </button>
        
        <div class="relative hidden sm:block">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span class="sr-only">Search icon</span>
          </div>
          <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search..."/>
        </div>
      </div>
      </div>
    </nav>
  );
}
}

export default Navbar;
