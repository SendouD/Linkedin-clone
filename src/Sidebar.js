import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import imgasset from "./assets/baji.jpg"
import { useSelector } from "react-redux";
import { login,logout,selectUser } from './features/userSlice';
function Sidebar() {
  const user=useSelector(selectUser);
  
    const recentItems=(topic)=>{
        return(
            <div className="sidebar__recentItems">
            <span className="sidebar__hash">
              #
            </span>
            <p>{topic}</p>


        </div>
        );

    };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="background image" />
        <Avatar className="sidebar__avatar" src={user.photoURL} >{user?.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Profile viewers</p>
          <p className="sidebar__statnumber">669</p>
        </div>
        <div className="sidebar__stat">
          <p>Post impressions </p>
          <p className="sidebar__statnumber">40</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems('reactjs')}
        {recentItems('DSA')}
        {recentItems('leetCode')}
      </div>
    </div>
  );
}

export default Sidebar;
