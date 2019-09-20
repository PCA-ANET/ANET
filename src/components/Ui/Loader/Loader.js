import React from 'react';
import BackDrop from '../BackDrop/BackDrop';

const loader = props => {
  let loaderClass = `loading ${props.show ? '' : 'd-none'}`;
  return (
    <>
      <BackDrop show={props.show} clicked={props.modalClosed} />
      <div
        className={loaderClass}
        style={{
          perspective: props.show ? 'none' : '1300px',
        }}
      >
        <div className="content">
          <div className=" loader loader5">
            <svg className="svg1" width="40px" height="40px" viewBox="0 0 40 40" fill="transparent">
              <circle cx="20" cy="20" r="4" stroke="#e67b00" />
            </svg>
            <svg className="svg2" width="40px" height="40px" viewBox="0 0 40 40" fill="transparent">
              <circle cx="20" cy="20" r="4" stroke="#e67b00" />
            </svg>
            <svg className="svg3" width="40px" height="40px" viewBox="0 0 40 40" fill="transparent">
              <circle cx="20" cy="20" r="4" stroke="#e67b00" />
            </svg>
            <svg className="svg4" width="40px" height="40px" viewBox="0 0 40 40" fill="transparent">
              <circle cx="20" cy="20" r="4" stroke="#e67b00" />
            </svg>
            <svg className="svg5" width="40px" height="40px" viewBox="0 0 40 40" fill="transparent">
              <circle cx="20" cy="20" r="4" stroke="#e67b00" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default loader;
