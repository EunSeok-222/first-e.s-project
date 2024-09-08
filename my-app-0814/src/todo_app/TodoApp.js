import React, {useState} from 'react';
import TodoInputPage from './TodoInputPage';
import TodoMainPage from './TodoMainPage';

function TodoApp(props) {

  const [mode,setMode] = useState("input");
  const [todoList,setTodoList] = useState([]);

  //외부에서 mode수정을 위한 함수
  function ChangePage(_mode){
    setMode(_mode)
  }
  //할일등록 함수
  function addTodo(td){
    setTodoList( [...todoList,td] )
  }

  let page = null; 
  if (mode == "main")
    page = <TodoMainPage 
            todoList={todoList}
            onChangePage={ChangePage} />; // 화면에 보여줄 내용
  else 
    page = <TodoInputPage 
            onChangePage={ChangePage} 
            onTodoInput = {addTodo}/>;// 화면에 보여줄 내용
  
  return (
    <div>
      <div className='App'>
        <h1>여기는 안바뀌는 부분</h1>
      
      </div>
      {page}
    </div>
  );
}

export default TodoApp;