import React from 'react';

function GameResultList(props) {
  const {resultMsgList} = props;

  const resultList = resultMsgList.map((n,index)=>
    <li className='App' key={index}>{n}</li>
  );

  
  return (
    <div className='App-a'>
      <ul>
      {resultList}  
      </ul>
    </div>
  );
}

export default GameResultList;