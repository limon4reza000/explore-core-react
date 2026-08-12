// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Pet></Pet>
    </>
  )
}

function Person(){
  const name = "Limon";
  const age = 23;
  return (
    <p>I am a person : Name : {name}, Age: {age}</p> 
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
