import React from 'react';
import {BiBookAlt, BiHome,BiTask,BiHelpCircle, BiStats, BiMessage,BiSolidReport } from 'react-icons/bi';
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className='menu'>
      <div className="logo">
        <BiBookAlt className="icon"/>
        <h2>RexBon</h2>
      </div>
      <div className="menu--list">
      <a href="#" className="item">
            <BiHome className="icon"/>
            Dashboard
        </a>
        <a href="#" className="item">
            <BiTask className="icon"/>
            Assignment
        </a>
        <a href="#" className="item">
            <BiSolidReport className="icon"/>
            Report
        </a>
        <a href="#" className="item">
            <BiStats className="icon"/>
            Stats
        </a>
        <a href="#" className="item">
            <BiMessage className="icon"/>
            Message
        </a>
        <a href="#" className="item">
            <BiHelpCircle className="icon"/>
            Help
        </a>
      </div>
    </div>
  )
}

export default Sidebar
