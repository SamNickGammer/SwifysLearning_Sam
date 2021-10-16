import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div className="page">
      <div className="signin">
        <div className="provider">
          <form action="">
            <button type="submit" class="button">
              Sign in with GitHub
            </button>
          </form>
        </div>
        <div className="provider">
          <hr></hr>
          <form action="">
            <label for="inputEmail">Email</label>
            <input
              id="inputEmail"
              type="text"
              name="email"
              placeholder="email@example.com"
            ></input>
            <button type="submit">Sign in with Email</button>
          </form>
        </div>
      </div>
    </div>
  );
}
