// import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from 'react';
import DemoChild from './components/DemoChild';

export const shareData = createContext();
function App() {
  const fname = 'Hello I am example of parent to child';
  const [uname, setUname] = useState(fname);
  const updateFunction = (param) => {
    console.log(param);
    setUname(param);
  };
  return (
    <div className="App">
      <shareData.Provider value={{ fname, updateName: updateFunction }}>
        <DemoChild />
        <h1>{uname}</h1>
      </shareData.Provider>

      {/* <DemoChild /> */}
      {/* <header className="App-header">
        <h2>Login Page</h2>
        <div className="loginInput">
          <form>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Login Id"
            />
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </header> */}
    </div>
  );
}

export default App;
