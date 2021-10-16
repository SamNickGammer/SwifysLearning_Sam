import React from 'react';
import './Workflow.css';
import GithubLogo from '../Image/Github.svg';

export default function Footer() {
  return (
    <div>
      <div className="footerStart">
        <nav className="navFooterMain">
          <div className="footerNevItem">
            <a className="linkFooterNevItem" href="/">
              Pricings
            </a>
          </div>
          <div className="footerNevItem">
            <a className="linkFooterNevItem" href="/accounts">
              Account
            </a>
          </div>
        </nav>
        <div className="githubItem">
          <a href="https://github.com/SamNickGammer">
            <img src={GithubLogo} alt="Github" className="logoGithub" />
          </a>
        </div>
        <p className="pfooterItem">
          © 2021 Workflow, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}
