import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
var BLE = require("./BLEConnect")
var writeData = "11"
function App() {
  const [serviceUUID,setserviceUUID]=useState("0000cafe-0000-1000-8000-00805f9b34fb")
  const [charateristicUUID,setcharateristicUUID]=useState("00000003-0000-1000-8000-00805f9b34fb")

  return (
    <div className="App">
      <header className="App-header">
      <label>
          Version: 1
    </label>
        <label>
          serviceUUID
    </label>
        <input

          value={serviceUUID}
          onChange={(event: any) => { setserviceUUID( event.target.value) }}
        />

        <label>
          charateristicUUID
    </label>
        <input

          value={charateristicUUID}
          onChange={(event: any) => { setcharateristicUUID(event.target.value) }}
        />


        <br/>
        <button onClick={() => {
          BLE.connect(serviceUUID,charateristicUUID)

        }}>SCAN</button>

        <div>
          <input
            onChange={(event: any) => { writeData = event.target.value }}
          />

          <button onClick={() => {
            BLE.writeData(writeData)

          }}>Write Data</button>
        </div>
        <br />
        <button onClick={() => {
          BLE.receiveData()

        }}>Read Data</button>
      </header>
    </div>
  );
}

export default App;
