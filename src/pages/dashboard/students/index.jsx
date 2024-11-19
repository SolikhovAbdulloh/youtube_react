import React from 'react'
import Smig from "./samig.jpg"
function Student() {
  return (
    <div className="contiener flex justify-around flex-wrap  gap-5">
      <div className="card w-[200px] ">
        <img src={Smig} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          consequatur.
        </p>
      </div>
      <div className="card w-[200px] ">
        <img src={Smig} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          consequatur.
        </p>
      </div>
      <div className="card w-[200px] ">
        <img src={Smig} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          consequatur.
        </p>
      </div>
    </div>
  );
  
}

export default Student
