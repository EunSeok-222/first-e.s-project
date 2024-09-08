import React,{useState, useEffect} from "react";

export default function MyTimer(props){
  
  const [timer, setTimer] = useState(100);
  function _set_timer(){
    setTimer( timer - 1) // timer변수 수정 -> 컴포넌트 다시 그리기
  }

  useEffect(()=>{      // 8/8 - 1:50
    const tid = setInterval(_set_timer,1000 );
    if (timer == 0)
      clearTimeout(tid)//if 만약 타이머가 0이면 타이머를 종료
    return ()=>{ clearInterval(tid) }
  }, [timer])  // timer변수 수정 -> useEffct()so 함수실행 

  

  return (    
    <div>
      <h1>Timer : {timer}</h1>
    </div>
  )
}