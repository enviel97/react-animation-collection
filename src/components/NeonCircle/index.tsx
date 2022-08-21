import React from "react";
import "./NeonCircle.scss";

const NeonCircle = () => {
  return (
    <section className='center'>
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
