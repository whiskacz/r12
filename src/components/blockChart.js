import React from 'react'
import '../css/BlockChart.css'

export default function BlockChart( { nameID, value, kolor }) {
  
    const percentStyle = {
        
            position: "absolute",
            top:"0",
            left:"0",
            lineHeight: "30px",
            textAlign: "center",
            width: `${value}%`,
            backgroundColor: kolor,
            borderRadius: "10px",
            color: "white",
            
        
    }
  
    return (
    <div className='container'>
        <div className='full'></div>
        <div style={percentStyle}>{nameID}</div>
    </div>
  )
}
