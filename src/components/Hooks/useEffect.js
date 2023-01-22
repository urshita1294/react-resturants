import React, { useEffect, useState } from 'react';
import './style.css';

const UseEffect = () => {
  const initialData = 0;
  const [myNum, setMyNum] = useState(initialData);

  useEffect(() => {
    document.title = `chats(${myNum})`;
  });

  return (
    <>
      <div className="center_div">
        <p>My Data : {myNum}</p>
        <div className="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
  );
};

export default UseEffect;
