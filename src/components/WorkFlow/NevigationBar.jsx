import React from 'react';
import './Workflow.css';
import LogoImage from '../Image/workflow-logo-indigo-600-mark-gray-800-text.svg';
export default function NevigationBar() {
  return (
    <div className="navPrimaryMain">
      <div className="leftNevFlex">
        <div className="imageLogo">
          <img id="logoImage" src={LogoImage} alt="" />
        </div>
        <div className="pricAccount">
          <a href="/" className="nevLink borderDown">
            Pricings
          </a>
          <a
            href="/accounts"
            style={{ marginLeft: '25px' }}
            className="nevLink"
          >
            Account
          </a>
        </div>
      </div>
      <div className="rightNevFlex">
        <a href="/accounts">Sign In</a>
      </div>
    </div>
  );
}
