import React, { useState } from 'react';

export default function UseStateHook() {
  const [data, setData] = useState(0);
  const [name, setName] = useState({ firstName: '', lastName: '' });
  function decrement() {
    setData((decData) => decData - 1);
  }
  function increment() {
    setData((incData) => incData + 1);
  }

  return (
    <div>
      <div style={{ margin: 10 }}>
        <button onClick={decrement}>-</button>
        <span style={{ marginLeft: 10, marginRight: 10 }}>{data}</span>
        <button onClick={increment}>+</button>
      </div>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={name.firstName}
          style={{ margin: 10, maxWidth: '15%' }}
          placeholder="Enter FirstName"
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={name.lastName}
          style={{ margin: 10, maxWidth: '15%' }}
          placeholder="Enter LastName"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h3 style={{ marginTop: 10, marginLeft: 10 }}>
          Hello {name.firstName} {name.lastName}, How are you?
        </h3>
      </form>
    </div>
  );
}
