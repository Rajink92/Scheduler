import {useState} from "react";

export default function useVisualMode(initial){
  let [mode, setMode] = useState(initial);
  let [history, setHistory] = useState([initial]); 
  //transition function
  function transition(nextMode, replace = false) {
    if(replace){
      setHistory(prev => prev.slice(0, -1));
      setHistory(prev => [...prev, nextMode]);
      
      }else{
        setHistory(prev => [...prev, nextMode]);
      }
      setMode(nextMode);
  }
  //back function
  function back() {
    if(history.length > 1) {
            setHistory(history.slice(0, -1));
            setMode(history[history.length-2]);
    }
    }
  return { mode, transition, back};
} 