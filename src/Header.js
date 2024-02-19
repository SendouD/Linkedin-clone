import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HomeIcon from '@mui/icons-material/Home';
import HeaderOption from './HeaderOption.js';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { BusinessCenter } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import assest from './assets/baji.jpg'
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { login,logout,selectUser } from './features/userSlice';
import { useSelector } from "react-redux";
function Header() {
  
  const dispatch=useDispatch();
  const auth=getAuth();
  const logoutOfApp=()=>{
    dispatch(logout());
    auth.signOut();

  }
  return (
    <div className='header'>
       
        <div className="header__left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LOGO" />
            <div className="header__search">
                <SearchIcon/>

                <input type="text" placeholder='Search'/>
            </div>
        </div>
        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon}title="My Network"/>
            <HeaderOption Icon={BusinessCenter} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar="true" title="Me" onClick={logoutOfApp}/>
        </div>
    </div>
  )
}

export default Header
