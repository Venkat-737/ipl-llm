import ipllogo from '/ipllogo.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function Navbar(){
    const loc = useLocation();
    const isActive = (path) => {
    return loc.pathname === path ? "text-primary" : "text-text";
  };
    return(
        <>
      <nav className="justify-between bg-background font-poppins flex flex-row items-center  ${isActive('/')} ">
        <div className="logo">
          <img
            src={ipllogo}
            style={{ width: "80px", height: "50px" }}
            className="my-3 ml-6 mini:ml-8 object-scale-down"
          />
        </div>
        <div className="options gap-6 text-text wb:flex hidden">
          <Link
            to="/"
            className={`${isActive("/")} hover:text-primary transition`}
          >
            Home
          </Link>

          <Link
            to="/matches"
            className={`${isActive(
              "/resources"
            )} hover:text-primary transition`}
          >
            Matches
          </Link>

          <Link
            to="/playercomparision"
            className={`${isActive("/problem")}  hover:text-primary transition`}
          >
            Player Comparision
          </Link>

          <Link
            to="/table"
            className={`${isActive("/test")}  hover:text-primary transition`}
          >
            Points Table
          </Link>
        </div>
        <div className="getstarted hidden mr-8 wb:flex items-center">
          
          
            <Link
              to="/login"
              className={`getstartedbtn cursor-pointer items-center text-center flex justify-center  bg-primary text-black font-sans w-32 h-10  hover:text-primary hover:bg-white transition`}
            >
              Get Started
            </Link>
          
        </div>
      </nav>
    </>
    )
}