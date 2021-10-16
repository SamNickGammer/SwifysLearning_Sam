import React, { useContext } from 'react';
import { shareData } from '../App';

export default function DemoChild() {
  const { fname, updateName } = useContext(shareData);
  const lname = 'hey i am moving from child to parent';

  return (
    <div>
      <h1>{fname}</h1>
      <button onClick={() => updateName(lname)}>Click Me</button>
    </div>
  );
}
