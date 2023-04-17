import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import ContacUser from "./component/ContacUser";
import ContacItem from "./component/ContacItem";
import ContactIndex from "./component/ContactIndex";
import NotFout from "./component/NotFout";
import Product from "./component/Product";
import Checkout from "./component/Checkout";
import Login from "./component/Login";
import Course from "./component/Course";
import CourseDetail from "./component/CourseDetail";
import CourseDetailByTypeId from "./component/CourseDetailByTypeId";
import Personnal from "./component/Personnal";
import Account from "./component/Account";
import PrivateRouter from "./component/PrivateRouter";
function App() {
  const navlinkstyle = ({ isActive }) => ({
    backgroundColor: isActive ? "#33FFFF	" : "#333333	",
    color: isActive ? "#333333" : "#33FFFF",
  });
  const navlink = ({ isActive }) => ({
    backgroundColor: isActive ? "#33FFFF  	" : "#333333	",
    color: isActive ? "#333333" : "#33FFFF",
  });
  return (
    <div className="App">
      {/* suwr dung link */}
      {/*<div>
        <ul>
          <li>
             {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="/about">About</Link>{" "}
          </li>
          <li>
            <Link to="/contact">Contact</Link>{" "}
          </li>
          <ul>
            <li>
              <Link to={"/contact/contactUser"}>Contac User</Link>
            </li>
            <li>
              <Link to={"/contact/contactItem"}>Contac Item</Link>
            </li>
          </ul>
        </ul>
      </div> */}

      {/* sử dụng navlink */}

      <div>
        <ul>
          <li>
            {" "}
            <NavLink to="/" style={navlinkstyle}>
              Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/about" style={navlinkstyle}>
              About
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/contact" style={navlinkstyle}>
              Contact
            </NavLink>{" "}
          </li>
          <ul>
            <li>
              <NavLink to={"/contact/contactUser"} style={navlink}>
                Contac User
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact/contactItem"} style={navlink}>
                Contac Item
              </NavLink>
            </li>
          </ul>
          {/* <li>
            <NavLink to="/product">Product</NavLink>
          </li> */}

          <Product />
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}>
          {/* router longf nhaau */}
          <Route index path="/contactIndex" element={<ContactIndex />}></Route>
          {/*  */}
          <Route path="contactUser" element={<ContacUser />}></Route>
          <Route path="contactItem" element={<ContacItem />}></Route>
        </Route>

        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* dynamic router */}
        <Route path="/course" element={<Course />}></Route>
        <Route path="/course/:courseId" element={<CourseDetail />}></Route>
        <Route
          path="/course/:courseType/:courseId"
          element={<CourseDetailByTypeId />}
        ></Route>
        {/*  */}

        <Route element={<PrivateRouter />}>
          <Route path="/personal" element={<Personnal />}></Route>
          <Route path="/accout" element={<Account />}></Route>
        </Route>
        <Route path="/product" element={<Product />}></Route>

        <Route path="*" element={<NotFout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
