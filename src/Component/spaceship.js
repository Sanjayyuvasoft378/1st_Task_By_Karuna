import React, { useState } from "react";
export default function Spaceship() {
    const [snow, setSnow] = useState(0);
    const [valcano, setValcano] = useState(0);
    const [sky, setSky] = useState(0);
    const [sports, setSports] = useState(0);

  return (
    <div >
    <div style={{display:'flex',justifyContent:'space-between',}}>
    <div className="div2">
    <h1>Select color :</h1>
    <span class="border border-warning">
        
      <button className="Cbtn" onClick={()=>setSnow(0)} style={{backgroundColor: "red"}}>+0&#8364; <br /> Snow</button>&nbsp;&nbsp;&nbsp;
      <td><button className="Cbtn" onClick={()=>setSnow(100)} style={{backgroundColor: "green"}}>+100&#8364; <br />Valcano</button></td>&nbsp;&nbsp;&nbsp;
      <td><button className="Cbtn" onClick={()=>setSnow(150)} style={{backgroundColor: "blue"}}>+150&#8364; <br />Sky</button></td>&nbsp;&nbsp;&nbsp;
      </span>
    </div>

    <div className="div2">
    <h1>Select Power :</h1>
    <span class="border border-warning">
      <td><button onClick={()=>setValcano(0)} style={{backgroundColor: "red"}}>+0&#8364; <br />100MW</button></td>&nbsp;&nbsp;&nbsp;
      <td><button onClick={()=>setValcano(200)} style={{backgroundColor: "green"}}>+200&#8364; <br />150MW</button></td>&nbsp;&nbsp;&nbsp;
      <td><button onClick={()=>setValcano(500)} style={{backgroundColor: "blue"}}>+500&#8364; <br />200MW</button></td>&nbsp;&nbsp;&nbsp;
      </span> </div>
      <div className="div2">
    <th>
    <h1>Warp Drive :</h1>
    <span class="border border-warning">
      <td><button onClick={()=>setSky(0)} style={{backgroundColor: "red"}}>+0&#8364; <br />No</button></td>&nbsp;&nbsp;&nbsp;
      <td><button onClick={()=>setSky(1000)} style={{backgroundColor: "green"}}>+1000&#8364; <br />Yes</button></td>&nbsp;&nbsp;&nbsp;
      </span>
    </th>
    </div></div>
      <div className="div2" style={{float:"right",marginTop:'20px'}}>
    <h1>Select Power :</h1>
    <span class="border border-warning">
    <td><button style={{backgroundColor: "red"}}>Basic<br /><br />Air Conditioning <br />Cloth Seats <br />Fm Radio</button></td>&nbsp;
      <td><button onClick={()=>setSports(100)} style={{backgroundColor: "green"}}>Sports <br /> +100$ <br /> Air Conditioning <br />cloth Seats <br />Fm Radio</button></td>&nbsp;
      <td><button onClick={()=>setSports(500)} style={{backgroundColor: "green"}}>Lux <br /> +500$ <br /> Air Conditioning <br />Cloth Seats <br />Fm Radio</button></td>&nbsp;
      </span> </div>
    
    <tr><br />
        
      <div className="box">
    <h1>Select Option Packages :</h1><br />
    <span class="border border-warning">
      <td><h3>Base Price : 1000</h3></td>&nbsp;&nbsp;&nbsp;<br />
      <td><h3>Color :{snow} </h3></td>&nbsp;&nbsp;&nbsp;<br />
      <td><h3> Power : {valcano}</h3></td>&nbsp;&nbsp;&nbsp;<br />
      <td><h3>Warp Drive : {sky} </h3></td>&nbsp;&nbsp;&nbsp;<br />
      <td><h3>Option Package : {sports}</h3></td>&nbsp;&nbsp;&nbsp;<br />
      <td><h3>Total : {1000+snow+valcano+sky+sports}</h3></td>&nbsp;&nbsp;&nbsp;<br />
      </span>
      </div>
    </tr>
    </div>
  );

  }