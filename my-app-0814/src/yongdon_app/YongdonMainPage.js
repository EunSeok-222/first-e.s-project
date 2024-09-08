import React from 'react';

function YongdonMainPage(props) {

  function handleClick(e){
    //등록
    props.onChangePage("input")
  }
  return (
    <div>
      <h1>용돈메인 페이지</h1>
      <button onClick={handleClick}>등록페이지</button>
    </div>
  );
}

export default YongdonMainPage;