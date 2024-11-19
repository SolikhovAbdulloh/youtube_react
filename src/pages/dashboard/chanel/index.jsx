import React from "react";
import img from "./Ahror_web.jpg"
import najot from "./najot.jpg"

function Chanel() {
  return (
    <div className="contiener">
      <div className="cards grid grid-cols-2 gap-3">
        <div className="card bg-[#854141]  p-6 w-[300px] h-[300px]">
          <img className="w-[20vh]" src={img} alt="" />
          <h1 className="font-bold">Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Ratione harum animi est quo <br /> 
          </p>
        </div>

        <div className="card bg-[#854141]  p-6 w-[300px] h-[300px]">
          <img className="w-[20vh]" src={img} alt="" />
          <h1 className="font-bold">Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Ratione harum animi est quo <br /> 
          </p>
        </div>

        <div className="card bg-[#854141]  p-6 w-[300px] h-[300px]">
          <img className="w-[20vh]" src={img} alt="" />
          <h1 className="font-bold">Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur <br />
            Ratione harum animi est quo <br /> aliqui m
          </p>
        </div>

        <div className="card bg-[#854141]  p-6 w-[300px] h-[300px]">
          <img className="w-[20vh]" src={img} alt="" />
          <h1 className="font-bold">Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Ratione harum animi est quo 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chanel;
