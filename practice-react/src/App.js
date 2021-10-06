import React from 'react'
import axios from 'axios';
import './App.css';
// import reactDom from 'react-dom';

//https://randomuser.me/api

const initialCount = 0

const fetchRandomData=()=>{
  return axios.get('https://randomuser.me/api')
  .then(res => {
    console.log(res)})
  .catch(err => {
    console.log(err)})
}

  function App(){
  const [counter,setCounter] = React.useState(initialCount);
   
  return(
    <div className="App">
      <h1>{counter}</h1>
      
      <button onClick={()=>setCounter(initialCount)}>Reset</button>
      <button onClick={()=>setCounter(counter+1)}>Increase</button>
      <button onClick={()=>setCounter(counter-1)}>Decrease</button>
      <button onClick={()=>fetchRandomData()}>Fetch Data</button>
      
    </div> 
  )
}

  export default App;