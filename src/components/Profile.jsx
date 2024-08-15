import React from 'react'
import ProfileHeader from './ProfileHeader'
import '../styles/profile.css';
import userImage from '../assets/image.jpg';
import { BiBook } from 'react-icons/bi';

const courses = [
  {
    title: 'English',
    duration: '20 hours lesson',
    icon: <BiBook/>,
  },
  {
    title: 'Germany',
    duration: '20 hours lesson',
    icon: <BiBook/>,
  },
  {
    title: 'Japanese',
    duration: '20 hours lesson',
    icon: <BiBook/>,
  }
]
const Profile = () => {
  return (
    <div className='profile'>
      <ProfileHeader/>  
      <div className="user--profile">
        <div className="user--detail">
          <img src={userImage} alt=""/>
          <h3 className="username">Jhone Doe</h3>
          <span className='profession'>Teacher</span>
        </div>
        <div className="user-courses">
          {courses.map((coures) =>(
            <div className="course">
              <div className="course-detail">
                <div className="course-cover">{coures.icon}</div>
                <div className="course-name">
                  <h5 className='title'>{coures.title}</h5>
                  <span className="duration">{coures.duration}</span>
                </div>
              </div>
              <div className="action">:</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
