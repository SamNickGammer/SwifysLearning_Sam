import React from 'react';
import ReactModal from 'react-modal';
import './Workflow.css';

ReactModal.setAppElement('#root');

export default function Modal(props) {
  const { openClose } = props;
  const { item } = props;

  function visiblility() {
    const btnClick = document.getElementById('clicked');
    btnClick.style.backgroundColor = 'rgb(95, 96, 97)';
    btnClick.disabled = true;
    return props.changeVisible(true);
  }
  return (
    <div>
      <ReactModal isOpen={openClose} onRequestClose={() => openClose(false)}>
        <div style={{ width: '20%' }}>
          <h1>{item.name}</h1>
          <h2>${item.price}</h2>
          <button className="aBtnCard" id="clicked" onClick={visiblility}>
            Buy {item.name}
          </button>
          <button
            className="aBtnCard"
            onClick={() => {
              openClose(false);
            }}
          >
            Close
          </button>
        </div>
      </ReactModal>
    </div>
  );
}
// () => props.changeVisible(false)
