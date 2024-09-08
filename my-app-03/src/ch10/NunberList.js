import React from "react";

export default function NumberList(props){

  const {numbers} = props
  const listitems = numbers.map( (num,index)=> <li key={index}>{num}</li>)
                            //( (num)=>{ return <li>{num}</li>}) 중괄호 있고 없고차이
  return(
    <div>
      {listitems}
    </div>
  )
}