import React from 'react';

function TodoMainPage(props) {

  const {todoList} = props
  
  function handleClick(e){
    //등록페이지를 보여주기
    props.onChangePage("input")
  }

  const listContent = todoList.map((td,index)=>
    <tr>
        <td>{td.title}</td>
        <td>
        <label><input type="checkbox"></input>완료</label>
                <button onClick={()=>{
                    console.log("delete", td.title)
                }} >삭제</button>
        </td>
    </tr>
  );

  return (
    <div className='App'>
      <h1>할일메인 페이지</h1>
      <h3>할일 갯수 : {todoList.length}</h3>
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
        {listContent}
    </tbody>
      </table>
      <button onClick={handleClick}>등록페이지</button>
    </div>
  );
}

export default TodoMainPage;