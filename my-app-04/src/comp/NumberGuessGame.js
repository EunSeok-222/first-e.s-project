import React,{useReducer, useState} from 'react';
import GameHeader from './GameHeader';
import '../App.css'; 
import GameInput from './GameInput';
import GameResult from './GameResult';
import GameResultList from './GameResultList';

function NumberGuessGame(props) {
//난수생성
  const [comNum,setComNum] = useState(
    Math.floor(Math.random()*100+1)
  );
// 사용자 입력 숫자
const [userNum,setUserNum] = useState("")

  //입력값과 컴퓨터 숫자를 비교 화살표함수
//   const checkNumber = ( userNum )=>{
//     console.log("userNum=",userNum);
// }
//정답확인 메세지
const [ resultMsg,setResultMsg] = useState("")
let resultsMsg = "";
//정답메시지 배열
const [resultMsgList,setResultMsgList] = useState([])

//정답확인 
function checkNumber(){
  let msg = userNum+" : ";
  if( comNum==userNum)
    msg =(userNum+": 정답입니다.")
  else if (comNum < userNum)
    msg=(userNum+"보다 낮춰주세요.")
  else 
  msg=(userNum+"보다 높여주세요.")
  console.log("msg = " +msg);
  setResultMsg(msg)
  setResultMsgList([msg , ...resultMsgList])
}
//정답확인 
  // function checkNumber( userNum){
  //   //alert(`${comNum} ,${userNum}`)
  //   setUserNum(userNum)
  //   console.log("userNum=",userNum);
  // }

  return (
    <div className='App'>
      <GameHeader />
      <GameInput 
          userNum={userNum} 
          setUserNum={setUserNum} 
          onNumberInput={checkNumber}/>
      <GameResult resultMsg = {resultMsg}/>
      <GameResultList resultMsgList= {resultMsgList} />
    </div>
  );
}

export default NumberGuessGame;