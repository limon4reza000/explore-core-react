// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  

  return (
    <>
      <h1>React Core Concepts</h1>
      <Person></Person>
      <Student></Student>
      <Developer name="Limon" technology="React"></Developer>
      <Developer name="Reza" technology="JavaScript"></Developer>
      <Developer name="Jane" technology="Python"></Developer>
      <Device name="iPhone" brand="Apple" price={270000}></Device>
      <Device name="Xiaomi" brand="Xiaomi" price={15000}></Device>
      <Device name="Samsung" brand="Samsung" price={20000}></Device>
      <Pet></Pet>
    </>
  )
}

function Person(){
  const name = "Limon";
  const age = 23;

  const personStyle = {
  color: "blue",
  backgroundColor: "lightgray",
  padding: "10px",
  borderRadius: "5px"
}

  return (
    <p style={personStyle} >I am a person : Name : {name}, Age: {age}</p> 
  )
}




function Student(){
  return (
    <div className='student'>
      <p>Name : </p>
      <p>Department :</p>
    </div>
  )
}


function Developer (props){
  console.log(props);
  return (
    <div style = {{
      border: '2px solid green',
      padding: '10px',
      marginTop: '10px',
      marginBottom: '10px',
      borderRadius: '20px'
    }}>

      <h3>Developer : {props.name} </h3>
      <p>Technology : {props.technology}</p>
      
    </div>
  )
}

function Device (props) {
  // console.log(props);
  return (
    <div style = {{
      border: '2px solid red',
      padding: '10px',
      marginTop: '10px',
      marginBottom: '10px',
      borderRadius: '20px'
    }}>

    <h2>Name : {props.name}</h2>
    <p>Brand : {props.brand}</p>
    <p>Price : {props.price}</p>
    </div>
  )
}



function Pet(){
  const name = "Tommy";
  const age = 3;
  return (
    <p>I am a pet : Name : {name}, Age: {age}</p> 
  )
}


export default App
