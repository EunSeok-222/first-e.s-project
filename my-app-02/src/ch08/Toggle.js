import React, { useState } from "react";

export default Toggle(props){

  const [isToggleOn,setIsToggleOn] = useState(true);
  
  //방법1 함수 안에 함수로 저의
    function handleClick(){
      setIsToggleOn((isToggleOn)=>!idToggleOn);
    };

  //방법2 arrow function을 사용하여 정의
    // const handleClick() = ()=> {
    //   setIsToggleOn((isToggleOn)=>!idToggleOn);
    // }
  
  return (<button onClick={handleClick}>
    {isToggleOn ? "켜짐" : "꺼짐"}</button>);
};