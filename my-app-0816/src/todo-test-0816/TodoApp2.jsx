import React, { useState } from 'react';
import TodoListPage2 from './TodoListPage2';
import TodoInputPage2 from './TodoInputPage2';
import TodoDetailPage2 from './TodoDetailPage2';
import TodoErrorPage2 from './TodoErrorPage2';

function TodoApp2(props) {

  const [mode,setMode] = useState("input");
  let page = null;

  if(mode == "main"){
    page = <TodoListPage2/>
  }else if (mode == "input"){
    page = <TodoInputPage2/>
  }else if (mode == "detail"){
    page = <TodoDetailPage2/>
  }else{
    page = <TodoErrorPage2/>
  }

  return (
    <div className='App'>
      <h1>혼자 만들자 ㅎㅎ</h1>
      {page}
    </div>
  );
}

export default TodoApp2;