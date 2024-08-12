import React from 'react';
import {BiBookAlt, BiHome,BiTask,BiHelpCircle, BiStats, BiMessage,BiSolidReport } from 'react-icons/bi';
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className='menu'>
      <div className="logo">
        <BiBookAlt/>
        <h2>RexBon</h2>
      </div>
      <div className="menu--list">
      <a href="#" className="item">
            <BiHome/>
            Dashboard
        </a>
        <a href="#" className="item">
            <BiTask/>
            Assignment
        </a>
        <a href="#" className="item">
            <BiSolidReport/>
            Report
        </a>
        <a href="#" className="item">
            <BiStats/>
            Stats
        </a>
        <a href="#" className="item">
            <BiMessage/>
            Message
        </a>
        <a href="#" className="item">
            <BiHelpCircle/>
            Help
        </a>
      </div>
    </div>
  )
}

export default Sidebar
