import './App.css';
import { useState } from 'react';
import HotSauce from './sandbox';

function App() {
  const name = 'lancer';
  const age = 26;  

  // A function for handling states.
  const handleChange = () =>{
    setUserName('Lancer');
  }

  // Creating a state using useState('').
  const [userName, setUserName] = useState('Rider');


  return (
    <div>
      <h1>Hello {name} </h1>
      {age >= 18 ? <p>You're Old enough</p> : <p>You are a young person</p>}
      <p>My name is {name} and i'm {age} years old.</p>
      <p>The default username is {userName}</p>
      
      <button onClick={handleChange}>Click me to change name</button>
      {/* <h2></h2> */}

      <HotSauce userName={userName}/>
    </div>
  );
}

export default App;


// A react website can only refresh if the state or the prop changes

// Conditionals
// States - 
// Props
// Class
// Events
// List 
// forms


// Hooks
// 1. useState - saves a state of a current object, it is also used to create a state.
// 2. useContext
// 3. useEffect - to fetch data like APIs 
// 4. useRef
// 5. useCallback
// 6. useMemo

// whenever u want to use a hook in react, u have to bring it into react by importing the hook 
// whenever we create a state, we have a variable that holds the state value, and we have a function that changes the variable value.

// PROPS means Properties
// we use props when connecting 2 different compopnents.