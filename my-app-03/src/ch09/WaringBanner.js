import React from "react";

export default function WaringBanner(props){

  if(!props.waring)
    return null;

  return (
    <div>
      <h1>경고</h1>
    </div>
  )
}