import React, { useState } from 'react';

function GameInput(props) {
  const {onNumberInput} = props;
  const [userNum, setUserNum] = useState("")
  // const onNumberInput = props.onNumberInput; 위에랑 같은 뜻
  
  
  function handleChange (e){
    setUserNum(e.target.value)
  }
  function handleClick (e){
    onNumberInput(userNum) // 정답확인
    setUserNum("") // 입력한 숫자 지우기
  }
function handleSubmit(e){
  e.preventDefault(); // form에서 리프레시 고유동작 취소시킴
}
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <button className='App-button'>새게임</button>
        <input type='number' value={userNum} onChange={handleChange}></input>
        <button className='App-button' onClick={handleClick}>정답확인</button>
      </form>
    </div>
  );
}

export default GameInput;