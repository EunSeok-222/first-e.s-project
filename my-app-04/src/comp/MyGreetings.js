import React from 'react';
import MyHello from './MyHello';

function MyGreetings(props) {
  return (
    <div>
      <MyHello name = "홍" msg = "반가워요"/>
      <MyHello name = "김" msg = "안녕하교"/>
      <MyHello name = "박" msg = "어디가쇼"/>
    </div>
  );
}

export default MyGreetings;<MyHello />