import React,{useState} from "react";

export default function Counter(props){
  let count = 0;
  const [hit, setHit] = useState(0)
  function increase(){
    count++;
    console.log(count)
    setHit(hit+1)
  }

  return (
    <div>
      <p>총 {count}번 클릭</p>
      <p>Hit {hit}번 클릭</p>
      <button onClick={increase}>클릭</button>
    </div>
  )
} 