import React, {useState} from 'react'
import './Sidebar.css'
import { data } from '../../data/data'
import { CSVLink } from "react-csv";



function Sidebar() {

  const[altitude, setAltitude] = useState(0)

  const altitudeHandler = (event) => {
    setAltitude(event.target.value)
  }

  
  const showData = () => {
    const csvRow=[]
    const A = [['Latitude', 'Latitude', 'Longitude', 'Altitude']]
    //const A = []


    for(var i = 0; i < data.length; i++)
    {
      if(data[i].lat !== 0 && data[i].lng !== 0)
        A.push([data[i].lat, data[i].lng, altitude])
    }
    //console.log(A)
    
    for (var i = 0; i < A.length; ++i)
    {
      csvRow.push(A[i].join(","))
    }
    
    //console.log(csvRow)

    var csvString = csvRow.join("%0A")

    //console.log(csvString)

    var a = document.createElement("a")
    a.href='data:attachement/csv.' + csvString
    a.target = "_Blank"
    a.download = "testfile.csv"
    document.body.appendChild(a)
    a.click()


    //console.log(csvRow)

    
  }




  return (
    <div className="fixed-top">
        <div className="sidebar">
        <h1 className = "sidebarHeading">Settings</h1>
            <label className="sidebarLabels" >Altitude: </label>
            <input type= "text" onChange={altitudeHandler}></input>
            {/* <label className="sidebarLabels">X: </label>
            <input></input>
            <label className="sidebarLabels">Y: </label>
            <input></input>
            <label className="sidebarLabels">Distance from Object: </label>
            <input></input> */}

       
          <button className="button" onClick={showData} >Send Info</button>
       
        </div>
    </div>
  )
}

export default Sidebar
