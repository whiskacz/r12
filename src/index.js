import React, { useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom/client';
import BlockChart from './components/blockChart';
import './css/index.css'

export default function R12App () {
    const [inputValue,setInputValue] = useState({
        ui:22,
        ux:33,
        data:85,
    })

    const refValue = useRef(null)

    useEffect(()=> {
        refValue.current.focus()
    },[])

    let inputData = [
        { nameID: "ui", bgColor : "blue", status: inputValue.ui},
        { nameID: "ux", bgColor : "orange", status : inputValue.ux},
        { nameID: "data", bgColor : "yellow", status : inputValue.data}
    ]


    return (
       <div className="wrapper">
            <h1>Progress Bar</h1>
            <ul>Project status:
                <li>UI status <input type="number" min={0} max={100} ref={refValue} value={inputValue.ui} onChange={(e) => setInputValue({...inputValue, ui: e.target.value})}/></li>
                <li>UX status <input type="number" min={0} max={100} value={inputValue.ux} onChange={(e) => setInputValue({...inputValue, ui: e.target.value})}/></li>
                <li>DATA status <input type="number" min={0} max={100} value={inputValue.data} onChange={(e) => setInputValue({...inputValue, ui: e.target.value})}/></li>
            </ul>
            {inputData.map(
            (inputData, index) => (
                <BlockChart key={index} nameID={inputData.nameID} value={inputData.status} kolor={inputData.bgColor} />
            )   
            )}
            
       </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<R12App />)