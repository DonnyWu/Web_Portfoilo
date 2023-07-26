import React from 'react';
import interpro from '../logo/InterPro-logo.jpeg';
import interpro2 from '../logo/interpro.png';
import '../Modal.css';

const InterModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img className='companyImg' src={interpro2} alt='/' />
        <div className='modalRight'>
          <h1 className='title'>Details</h1>
          <div className='content contentFont'>
            <p>{'\u2B24'} Implement InterPro Solutions’ flagship application EZMaxMobile based on client’s requirements using <br/>Java, Spring Boot, JSON, Angular, Struts, Typescript, and IBM Maximo custom Business Object APIs.</p>
            <p>{'\u2B24'} Used React JS to customize the layout of InterPro Solutions’ EZMaxRequest</p>
            <p>{'\u2B24'} Used developer environment to test the UI of EZMaxMobile, confirming it is crossed-referenced with IBM Maximo</p>
            <p>{'\u2B24'} Handle incoming tickets pertaining to client’s custom built EZMaxMobile with support team and team architect</p>
          </div>
          <div className='btnContainer'>
            <button className='btnOutline' onClick={onClose}>
              <span className='bold'>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterModal;