import React from "react";

export default function Book(props){
  return (
    <div>
      <h1>책이름 : {props.name}</h1>
      <h2>페이지 : {props.num0fPage}</h2>
    </div>
  )
}