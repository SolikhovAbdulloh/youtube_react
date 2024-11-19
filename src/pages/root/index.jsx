import { Route, Routes } from "react-router-dom";
import Home from "../home";
import About from "../About";
import Contact from "../Contact";
import Navbar from "../../components";
import Users from "../users";
import Dashboard from "../dashboard";
import Group from "../dashboard/groups";
import Student from "../dashboard/students";
import Chanel from "../dashboard/chanel";
function Root() {
  return (
    <>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Users" element={<Users />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Group/>} />
          <Route path="students" element={<Student />} />
          <Route path="chanel" element={<Chanel />}/>
        </Route>
      </Routes>
    </>
  );
}

export default Root;
