import React, { useState } from 'react';
import YongdonMainPage from './YongdonMainPage';
import YongdonInputPage from './YongdonInputPage';

function YongdonApp(props) {

  const [mode,setMode] = useState("main");


  function ChangePage(_mode){
    setMode(_mode)
  }

  let page = null;
  // mode == "main"?  page = <YongdonMainPage  onChangePage={ChangePage} />
  //                 :page = <YongdonInputPage onChangePage={ChangePage} />
  if (mode == "main")
    page = <YongdonMainPage onChangePage={ChangePage} />; // 화면에 보여줄 내용
  else 
    page = <YongdonInputPage onChangePage={ChangePage} />;// 화면에 보여줄 내용
  

  return (
    <div>
      {page}
    </div>
  );
}

export default YongdonApp;