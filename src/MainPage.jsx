import React,{ useState } from 'react';
import {Link} from 'react-router-dom';
export const MainPage=()=>{
    const [Rollno,setRollno]=useState(0);
    const [Name,setName]=useState("");
    const [phy,setPhy]=useState(0);
    const [chem,setChem]=useState(0);
    const [math,setMath]=useState(0);
    const [showData,setData]=useState([]);
 const roll=(e)=>{
  setRollno(e.target.value);
 }
 const nameFn=(e)=>{
   setName(e.target.value);
  }
  const phyFn=(e)=>{
   setPhy(e.target.value);
  }
  const chemFn=(e)=>{
   setChem(e.target.value);
  }
  const mathsFn=(e)=>{
   setMath(e.target.value);
  }
   const data={
     Rollno:Rollno,Name:Name,Physic:phy,Chemistry:chem,Maths:math
   }
  const done=(e)=>{
    e.preventDefault();
    
    fetch("http://localhost:3000/addStudent",{
     method:"POST",
     headers:{"Content-Type":"application/json"},
     body:JSON.stringify(data)
    })


  }


  const fetchData=()=>{
   fetch("http://localhost:3000/getStudent")
   .then((response)=>response.json()).then((data)=>setData(data))
  }
    return(
        <div>
             <h1>Student Information </h1>
         <form  method='POST'>
          rollNo:
          <input type="number"  name="rollno" onChange={roll}  required/><br/><br/>
          Name:
          <input type="text"  name="name" onChange={nameFn} required/><br/><br/>
          Physic:
          <input type="number"  name="Physic" onChange={phyFn} required/><br/><br/>
          Chemistry:
          <input type="number"  name="Chemistry" onChange={chemFn} required/><br/><br/>
          Maths:
          <input type="number"  name="Maths" onChange={mathsFn} required/><br/><br/>
          <button type='submit' onClick={done} > <Link to="/NewMsg">Add</Link> </button>  

          <button onClick={fetchData}>show data</button>
         </form>
         <div>
         {showData.map((d)=><p>{d.Name}</p>)}
         </div>
        </div>
    )
}