import React, { useRef, useState } from 'react';

function TodoInputPage(props) {

  const [tdTitle,setTdTitle] = useState("");
  const [tdContent,setTdContent] = useState("");
  const titleElm = useRef(null);
  const contentElm = useRef(null);

  function handleClick(e){
    //메인페이지를 보여주기
    props.onChangePage("main")
  }

  function handleChangeTdTitle(e){
    setTdTitle(e.target.value)
  }
  function handleChangeTdContent(e){
    setTdContent(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
  }
  function handleInput(e){ //등록버튼 클릭
    let t = titleElm.current.value 
    let c = contentElm.current.value 
    console.log(t,c)
    let obj = {
      title:titleElm.current.value,
      content:contentElm.current.value,
      done : false
    }
    //할일객체등록
    props.onTodoInput(obj);
    //화면전환
    props.onChangePage("main")
  }

  return (
    <div className='App'>
      <h1 >할일관리 등록</h1>
      <form onSubmit={handleSubmit}>
        <label>
          제목 : <input ref={titleElm}
          type='text' 
          value={tdTitle} 
          onChange={handleChangeTdTitle}></input>
        </label><br></br>
        <label>
          내용 : <input ref={contentElm}
          type='text' 
          value={tdContent} 
          onChange={handleChangeTdContent}></input>
        </label><br></br>
      </form><br></br>
      
      <button onClick={handleInput}>등록</button>
      <button onClick={handleClick}>메인</button>
    </div>
  );
}

export default TodoInputPage;