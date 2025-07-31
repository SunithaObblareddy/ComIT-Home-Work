import './App.css';
import Section from "./components/Section/Section";
import {useState} from "react";
//ternary operators: short syntax for if else
  //condition? true statement: false statement
//React hooks: hookup logic
function App(){
  const [counter, setCounter]=useState(0);//it is a react function. //react save this everytime it executes
  // usestate  fun will return two elements. first element is the state which is 0 and second is the function which update the state
  //virtual DOM: used by react to check the change between 

  console.log("rendering app component");
  function incrementCounter(){
    setCounter(counter+1);
  }

  return(
    <>
    <p>counter: {counter}</p>
    <button onClick={incrementCounter}>increment counter</button>
    <Section title="First" description="lorem" >
      <h1>thisis the content</h1>
    </Section>
  </> 
  );
  
} 
export default App;
