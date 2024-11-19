import { Link, Outlet } from "react-router-dom";

function Dashboard(){
  return (
    <div className="flex gap-[80px]">
      <div className="w-[20%] h-[100vh] flex items-start gap-[30px] flex-col  text-white bg-[#1a1816]">
        <div className="flex flex-col items-center justify-center">
          <Link to={"/dashboard"}>
            <button>Group</button>
          </Link>
          <Link to={"/dashboard/chanel"}>
            <button>Chanel</button>{" "}
          </Link>
          <Link to={"/dashboard/students"}>
            <button>Students</button>
          </Link>
         
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Dashboard;
