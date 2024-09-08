import React from 'react';

function TodoInputPage2(props) {
  return (
    <div>
      <h1>InputPage2</h1>
      <form>
        <label htmlFor=""></label>
        제목 : <input type='text' ></input><br></br>
        내용 : <textarea></textarea>
      </form>
      <button>등록</button>
    </div>
  );
}

export default TodoInputPage2;