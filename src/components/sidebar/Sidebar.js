import React from 'react'
import './Sidebar.css'
import {SidebarData} from './SidebarData'

function Sidebar() {
  return (
    <div className="fixed-top">
        <div className="sidebar">
          <ul className="sidebarList">
            {SidebarData.map((val,key)=>{
              return <li key={key} className="row">
                {val.title}
              </li>
            })}
          </ul>
        </div>
    </div>
  )
}

export default Sidebar
