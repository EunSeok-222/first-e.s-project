import React, { useRef, useState } from 'react';

function YongdonInputPage(props) {

  const [tdSayong,setTdSayong] = useState("");
  const [tdYongdo,setTdYongdo] = useState("");
  const [tdAmount,setTdAmount] = useState("");
  const [tdDate,setTdDate] = useState("");
  const sayongElm = useRef(null);
  const yongdoElm = useRef(null);
  const amountElm = useRef(null);
  const dateElm = useRef(null);


  function handleClick(e){
    props.onChangePage("main")
  }

  function handleChangeTdSayong(e){
    setTdSayong(e.target.value)
  }
  function handleChangeTdYongdo(e){
    setTdYongdo(e.target.value)
  }
  function handleChangeTdAmount(e){
    setTdAmount(e.target.value)
  }
  function handleChangeTdDate(e){
    setTdDate(e.target.value)
  }
  function handleInput(e){//등록버튼 클릭
    let s = sayongElm.current.value
    let y = yongdoElm.current.value
    let a = amountElm.current.value
    let d = dateElm.current.value
    console.log(s,y,a,d)
  }

  return (
    <div>
      <h1>용돈등록 페이지</h1>
      <form>
        <label>
          구분 :
          <select >
            <option value="등록" selected>등록</option>
            <option value="취소">취소</option>
          </select>
        </label><br></br>
        <label>
          사용처 : <input type='text' ref={sayongElm} value={tdSayong}
                    onChange={handleChangeTdSayong}></input><br></br>
          용도 : <input type='text' ref={yongdoElm} value={tdYongdo}
                    onChange={handleChangeTdYongdo}></input><br></br>
          금액 : <input type='number'ref={amountElm} value={tdAmount}
                    onChange={handleChangeTdAmount}></input> 원<br></br>
          날짜 : <input type='date'ref={dateElm} value={tdDate}
                    onChange={handleChangeTdDate}></input><br></br>
        </label>
      </form>
        <button onClick={handleInput}>등록</button>
        <button onClick={handleClick}>메인페이지</button>
    </div>
  );
}

export default YongdonInputPage;