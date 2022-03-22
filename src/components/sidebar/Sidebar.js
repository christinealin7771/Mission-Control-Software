import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="fixed-top">
        <div className="sidebar">
        <h1 className = "sidebarHeading">Settings</h1>
            <label className="sidebarLabels">Dimensions: </label>
            <input></input>
            <label className="sidebarLabels">X: </label>
            <input></input>
            <label className="sidebarLabels">Y: </label>
            <input></input>
            <label className="sidebarLabels">Distance from Object: </label>
            <input></input>
          <button className="button">Send Info</button>
        </div>
    </div>
  )
}

export default Sidebar
