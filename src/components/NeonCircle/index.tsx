import React from "react";
import "./NeonCircle.scss";

const NeonCircle = () => {
  return (
    <section className='center'>
      <h1>{`Component name: NeonCircle`}</h1>
      <div className='container center neon-circle'>
        <div className='loader'>
          <span></span>
        </div>
        <div className='loader'>
          <span></span>
        </div>
        <div className='loader'>
          <i></i>
        </div>
        <div className='loader'>
          <i></i>
        </div>
      </div>
    </section>
  );
};

export default NeonCircle;
