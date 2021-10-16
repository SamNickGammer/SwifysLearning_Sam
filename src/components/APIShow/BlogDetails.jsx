import React from 'react';
import { Link } from 'react-router-dom';
import SampleImage from '../Image/SampleSeal.jpg';

const imageStyle = {
  height: 150,
  width: 150,
  position: 'relative',
  marginLeft: '40%',
};
const mainDiv = {
  marginTop: '10%',
  width: '50%',
};
const primaryCardFlex = {
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '20px',
  boxShadow:
    'rgb(50 50 93 / 25%) 0px 10px 91px -13px, rgb(0 0 0 / 30%) 0px 20px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset',
  /* box-shadow: 0 5px 10px rgb(154 160 185 / 5%), 0 15px 40px rgb(0 0 0 / 10%); */
  padding: '3rem',
};
const btn = {
  marginTop: '3%',
  height: '50px',
  width: '25%',
  borderRadius: '50px',
  color: 'white',
  background: 'lightcoral',
  border: 'none',
  fontSize: '15px',
};
export default function BlogDetails(props) {
  const { item } = props.location.state.item;
  return (
    <div align="center" style={mainDiv}>
      <div style={primaryCardFlex}>
        <img src={SampleImage} style={imageStyle} alt="" />
        <h3>{item.title}</h3>
        <h4>{item.body}</h4>
      </div>

      <div>
        <Link to="/">
          <button style={btn}>Back To Main List</button>
        </Link>
      </div>
    </div>
  );
}
