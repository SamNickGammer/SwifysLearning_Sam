import React, { useEffect, useState } from 'react';
import CardBlog from './CardBlog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';

export default function PracticeSecMohit() {
  const [item, setItem] = useState([]);
  const [countNumber, setCountNumber] = useState({ inc: 0, dec: 5 });
  const btnDiv = {
    // position: 'Relative',
    // left: '43%',
    display: 'inline',
  };
  const btn = {
    height: '50px',
    width: '12%',
    borderRadius: '50px',
    color: 'white',
    background: 'lightcoral',
    border: 'none',
    fontSize: '15px',
  };
  useEffect(() => {
    const fetchCall = fetch('https://jsonplaceholder.typicode.com/posts');
    const responce = fetchCall
      .then((res) => res.json())
      .catch((err) => console.log(err));
    responce.then((res) => {
      setItem(res);
    });
  }, []);
  // function reponceItem(res) {
  //   setItem(res);
  // }
  function decrementFn() {
    if (countNumber.inc !== 0) {
      setCountNumber({
        ...countNumber,
        inc: countNumber.inc - 5,
        dec: countNumber.dec - 5,
      });
    }
  }
  function incremetFn() {
    setCountNumber({
      ...countNumber,
      inc: countNumber.inc + 5,
      dec: countNumber.dec + 5,
    });
  }
  return (
    <div align="center">
      <Router>
        <Switch>
          <Route path="/" exact>
            {/* child */}
            <div>
              {item.slice(countNumber.inc, countNumber.dec).map((item) => {
                return <CardBlog key={item.id} item={item} />;
              })}
              <div style={btnDiv}>
                <button style={btn} onClick={decrementFn}>
                  Decrement
                </button>
                <button style={btn} onClick={incremetFn}>
                  Increment
                </button>
              </div>
            </div>
          </Route>
          <Route path="/item/:id" component={BlogDetails} />
        </Switch>
      </Router>
    </div>
  );
}
