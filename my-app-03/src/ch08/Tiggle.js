import React, { useState } from "react";
import "../App.css"


function ToggleOn(){
  return(
    <div>-****꺼짐****-</div>
  )
}
function ToggleOff(){
  return(
    <div>-----켜짐-----</div>
  )
}


export default function Toggle(props){
  const [isToggleOn, setIsToggleOn] = useState(true)
  function handleClick(){
      setIsToggleOn( !isToggleOn )
  }
  let btn;
  if(isToggleOn)
      btn = <ToggleOn />
  else
      btn = <ToggleOff />
  return (
      <div>
          <button onClick={handleClick}>
          {btn}
          </button>            
      </div>
  )
}

// {isToffleOn?"켜짐" : "꺼짐"} 