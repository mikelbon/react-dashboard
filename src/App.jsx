import React from 'react'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className="dashboard">
      <Sidebar/>
      <div className="dashboard-content">
        <Content/>
        <Profile/>
      </div>
    </div>
  )
}

export default App
