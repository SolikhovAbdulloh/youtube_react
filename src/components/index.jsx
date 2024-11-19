import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { navbar_links } from '../utils';
import image from "../img/asd.png"
function Navbar() {

  const {pathname} = useLocation(); //object korsatib unda /path yani bosilgan joylashuvni korsatadi.\
    
  return (
    <div className="bg-slate-600 contiener text-[white] flex justify-around items-center p-[15px]">
      <div className="w-[90%] flex gap-4 items-center  m-auto">
        <div className="text-3xl">
          <Link to={"/"}>
            <img src={image} alt="Logo" />
          </Link>
        </div>
        <input type="text" className='w-[50%] rounded-2xl text-black p-[8px] h-[25px] outline-none' placeholder="Search" />
      </div>

      <div className="flex gap-[30px] items-center">
        {navbar_links.map((value) => (
          <Link
            key={value.id}
            to={value.path}
            className={`${pathname === value.path && "text-red-600"}
            }`}
          >
            <h3>{value.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar