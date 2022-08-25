import React from "react";
import "./NeonSquare.scss";

const NeonSquare = () => {
  return (
    <section className='center'>
      <h1>{`Component name: NeonSquare`}</h1>
      <div className='container center neon-square-climb'>
        <div className='box'>
          <div className='cube'></div>
        </div>
      </div>
    </section>
  );
};

export default NeonSquare;
