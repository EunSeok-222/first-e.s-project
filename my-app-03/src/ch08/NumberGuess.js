import React, { useState } from "react";

export default function NumberGuess(props){

  const [com_num, setCom_num] = useState(Math.floor(Math.random()*100+1)) //난수용
  const [user_num, setUser_num] = useState("") //사용자 입력용
  const [user_nums, setUser_nums] = useState([]) //사용자입력 저장배열
  const [result, setResult] = useState("") //정답판정결과
  const [cnt, setCnt] = useState(0) //시도횟수
  


  function checkNum(){
    console.log("user_num="+user_num)
    if(com_num  == user_num)
        setResult("정답")
    else if(com_num < user_num)
        setResult(user_num+" 낮춰주세요")
    else
    setResult(user_num+" 높여주세요")
    setUser_num("")

    // setUser_nums([...user_nums, cnt+1+"번째시도 : "+user_num ])
    // setUser_num("")//입력 메모 삭제
    
    setCnt(cnt+1)
    
  }
  function handleChange(e){
    setUser_num(e.target.value)
  }
  function re(){
  setUser_nums([...user_nums, cnt+1+"번째시도 : "+user_num ])
  setCnt(cnt+1)
  };

  return (
    <div>
      <h1>숫자맞추기 </h1>
      <div>
      <p>1~100사이 컴퓨터의 숫자를 맞춰보세요</p>
      <div>{cnt} 번째 시도</div>
      <input type="number"
        min="1" max="100"
        value={user_num} 
        onChange={handleChange}></input>
      <button onClick={()=>{checkNum();re();}}>정답확인</button>
      </div>
      <div >
        <h3>확인결과 : {result}</h3>
        <ul>
          {[...user_nums].reverse().map((m) => <li>{m}</li>) }
        </ul>
      </div>
    </div>
  )
}