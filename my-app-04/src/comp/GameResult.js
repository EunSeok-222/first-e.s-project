import React from 'react';

function GameResult(props) {
  const {resultMsg} = props;
  return (
    <div className='App-border'>
      <p>결과 : {resultMsg}</p>
    </div>
  );
}

export default GameResult;