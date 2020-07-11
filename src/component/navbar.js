import React from 'react'
import "../App.css"
import imagepath from "../image/image.png";
export default function navbar() {
    return (
      <div className="covid ">
        <h1 style={{paddingRight:"25px"}}>COVID-19</h1>
        <img src={imagepath} alt="COVID" style={{paddingLeft:"40px"}} />
      </div>
    );
}
