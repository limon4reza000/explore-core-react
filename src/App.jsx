
import './App.css'
import ToDo from './Todo'
import Foods from './Todo'

function App() {

  const time = 50;
  return (
    <>
      <h1>React Core Concepts</h1>
      {/* <ToDo task="Learn React" isActive={true}></ToDo>
      <ToDo task="Learn JavaScript" isActive={false}></ToDo> */}

      <Foods
        food="I,m Hungry"
        isHungry={true}
        time={time}>
      </Foods>

      <Foods
        food="I,m Hungry"
        isHungry={false} >
      </Foods>


      {/* <Person></Person>
      <Student></Student>
      <Developer name="Limon" technology="React"></Developer>
      <Developer name="Reza" technology="JavaScript"></Developer>
      <Developer name="Jane" technology="Python"></Developer>
      <Device name="iPhone" brand="Apple" price={270000}></Device>
      <Device name="Xiaomi" brand="Xiaomi" price={15000}></Device>
      <Device name="Samsung" brand="Samsung" price={20000}></Device>
      <Player name="Sakib" runs="100"></Player>
      <Player name="Tamim"></Player>
      <Books name="Ophekkha" author="Humayun Ahmed" price="400 Tk"></Books>
      <Books name="Megh Boleche Jabo Jabo" author="Humayun Ahmed" price="450 Tk"></Books>
      <Books name="Tomake" author="Humayun Ahmed" price="500 Tk"></Books>
      <Pet></Pet> */}
    </>
  )
}

function Books({ name, author, price }) {
  return (
    <div style={{
      border: '2px solid blue',
      padding: '10px',
      marginTop: '10px',
      marginBottom: '10px',
      borderRadius: '20px',
    }}>
      <h2>Books : {name}</h2>
      <p>Author : {author}</p>
      <p>Price : {price}</p>
    </div>
  )
}

function Person() {
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


function Student() {
  return (
    <div className='student'>
      <p>Name : </p>
      <p>Department :</p>
    </div>
  )
}


function Developer(props) {
  console.log(props);
  return (
    <div style={{
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

function Device(props) {
  // console.log(props);
  return (
    <div style={{
      border: '2px solid red',
      padding: '10px',
      marginTop: '10px',
      marginBottom: '10px',
      borderRadius: '20px'
    }}>

      <h2>Device : {props.name}</h2>
      <p>Brand : {props.brand}</p>
      <p>Price : {props.price}</p>
    </div>
  )
}


function Player({ name, runs = 0 }) {
  return (
    <div style={{
      border: '2px solid salmon',
      padding: '20px',
      marginTop: '10px',
      marginBottom: '10px',
      borderRadius: '20px'
    }}>
      <h2>Player
        <p>Name : {name}</p> </h2>
      <p>Runs : {runs}</p>
    </div>
  )
}



function Pet() {
  const name = "Tommy";
  const age = 3;
  return (
    <p>I am a pet : Name : {name}, Age: {age}</p>
  )
}


export default App
