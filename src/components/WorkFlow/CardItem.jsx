import React, { useState } from 'react';

import TickImage from '../Image/ImageTick.svg';
import './Workflow.css';
import Modal from './Modal';

export default function CardItem(props) {
  const [openModal, setOpenModal] = useState(false);
  const [visiblity, setVisiblity] = useState(false);
  const { item } = props;

  return (
    <div className="maincardBorder">
      <div className="p-6">
        <h2 className="cardNameHed">{item.name}</h2>
        <p className="mt-8">
          <span className="pricingMainMonth">${item.price}</span>
          <span className="perMonth"> /mo</span>
        </p>
        <button
          disabled={visiblity}
          className="aBtnCard"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Buy {item.name}
        </button>
        {/* <a href={`/${item.name}`} className="aBtnCard">
          Buy {item.name}
        </a> */}
        {openModal && (
          <Modal
            openClose={setOpenModal}
            item={item}
            changeVisible={(visible) => setVisiblity(visible)}
          />
        )}
      </div>
      <div className="cardDesc">
        <h3 className="nameDescCard">What's included</h3>
        <ul className="listNameDescCard">
          <li className="flexList">
            <img src={TickImage} alt="Tick" className="svgImgaeTick" />
            <span class="textDetailsList">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </li>
          <li className="flexList">
            <img src={TickImage} alt="Tick" className="svgImgaeTick" />
            <span class="textDetailsList">
              Cum repellendus libero non expedita quam eligendi
            </span>
          </li>
          <li className="flexList">
            <img src={TickImage} alt="Tick" className="svgImgaeTick" />
            <span class="textDetailsList">
              a deserunt beatae debitis culpa asperiores ipsum facilis,
            </span>
          </li>
          <li className="flexList">
            <img src={TickImage} alt="Tick" className="svgImgaeTick" />
            <span class="textDetailsList">
              excepturi reiciendis accusantium nemo quos id facere!
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
