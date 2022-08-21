import React from "react";
import "./CubeRotate.scss";

const CubeRotate = () => {
  return (
    <section className='center'>
      <h1>Component name: CubeRotate</h1>
      <div className='container center'>
        <div className='cube'>
          <div className='cube--face cube--face__top'></div>
          <div className='cube--face'>
            <span
              className='cube--face cube--face__side'
              style={{ "--i": 0 } as any}
            ></span>
            <span
              className='cube--face cube--face__side'
              style={{ "--i": 1 } as any}
            ></span>
            <span
              className='cube--face cube--face__side'
              style={{ "--i": 2 } as any}
            ></span>
            <span
              className='cube--face cube--face__side'
              style={{ "--i": 3 } as any}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CubeRotate;
