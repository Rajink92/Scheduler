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
        // setMode(nextMode);
        // setMode(mode = nextMode);

      }
      setMode(nextMode);
  }

  //back function
  function back() {
    if(history.length > 1) {

            console.log("1:", history, history.length);

            setHistory(history.slice(0, -1));
            console.log("2:", history, history.length);
            setMode(history[history.length-2]);
            console.log("3: ", history, history.length);

    }
    }
    console.log("mode before final return:", mode);

  return { mode, transition, back};
} 