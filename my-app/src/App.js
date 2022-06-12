import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
const reducer=(state,action)=>{
  switch(action.type){
    case "DECREMENT":{
      return state-1;
    }
    case "INCREMENT":{
      return state+1;
    }
    default:{
      return state;
    }
  }

}

function App() {
  const[state,dispatch]=useReducer(reducer,0);
  return (
    <div className="App">
      <div>{state}</div>
      <div>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
      </div>

  
    </div>
  );
}

export default App;
