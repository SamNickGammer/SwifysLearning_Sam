import React, { useState } from 'react';
import CardItem from './CardItem';
import './Workflow.css';

const itemNameMonth = [
  { id: '1', name: 'Hobby', price: '12' },
  { id: '2', name: 'Freelancer', price: '24' },
  { id: '3', name: 'Startup', price: '32' },
  { id: '4', name: 'Entreprise', price: '48' },
];
const itemNameYear = [
  { id: '1', name: 'Hobby', price: '100' },
  { id: '2', name: 'Freelancer', price: '200' },
  { id: '3', name: 'Startup', price: '300' },
  { id: '4', name: 'Entreprise', price: '400' },
];
export default function PricingPlan() {
  const [item, setItem] = useState(itemNameMonth);

  function monthBill() {
    var first = document.getElementById('firstBtnBill');
    var second = document.getElementById('secondBtnBill');
    first.className = 'billingBtn bg-white';
    second.className = 'billingBtn tranparency';
    setItem(itemNameMonth);
  }

  function yearBill() {
    var first = document.getElementById('firstBtnBill');
    var second = document.getElementById('secondBtnBill');
    first.className = 'billingBtn tranparency ';
    second.className = 'billingBtn bg-white';
    setItem(itemNameYear);
  }

  return (
    <div className="secondSection">
      <div className="flexPlan">
        <h1 className="pricingPlan">Pricing Plans</h1>
        <p className="subTitle">
          Start building for free, then add a site plan to go live. Account
          plans unlock additional features.
        </p>
        <div className="bilingChange">
          <button
            onClick={monthBill}
            id="firstBtnBill"
            className="billingBtn bg-white"
          >
            Monthly billing
          </button>
          <button
            onClick={yearBill}
            id="secondBtnBill"
            className="billingBtn tranparency"
          >
            Yearly billing
          </button>
        </div>
      </div>
      <div id="cardFlx" className="cardFlx">
        {item.map((item) => {
          return <CardItem key={item.id} item={item} />;
        })}
        {/* <CardItem />
        <CardItem />
        <CardItem />
        <CardItem /> */}
      </div>
    </div>
  );
}
