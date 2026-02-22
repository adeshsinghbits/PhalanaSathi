 import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaServicestack, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { RiEBike2Fill } from "react-icons/ri"
import useUserCountry from "../../hooks/useUserCountry";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { country, countryCode, loading } = useUserCountry();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2
     ${
       isActive
         ? "bg-indigo-600 text-white shadow-md"
         : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-100"
     }`;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand */}
        <Link to="/" className="text-xl font-bold bg-indigo-500 rounded-l-xl text-white tracking-wide cursor-pointer">
          <span className=" pl-2 pr-0.5">Phalana</span>
          <span className="bg-slate-900 rounded-tl-3xl  px-2">Sathi</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={navStyle}>
            <FaHome /> Home
          </NavLink>
          <NavLink to="/bookRide" className={navStyle}>
            <RiEBike2Fill /> BookRide
          </NavLink>
          <NavLink to="/about" className={navStyle}>
            <FaInfoCircle /> About
          </NavLink>
          <NavLink to="/services" className={navStyle}>
            <FaServicestack /> Services
          </NavLink>

          <NavLink to="/login" className={navStyle}>
            <FaUser /> Login
          </NavLink>

          {/* Country Display */}
          {!loading && countryCode && (
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg shadow-sm">
              <img
                src={`https://flagcdn.com/w40/${countryCode}.png`}
                alt={country}
                className="w-6 h-4 rounded"
              />
              <span className="text-sm font-medium text-gray-700">
                {country}
              </span>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-xl cursor-pointer text-indigo-600">
          {isOpen ? (
            <FaTimes onClick={() => setIsOpen(false)} />
          ) : (
            <FaBars onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <NavLink to="/" className={navStyle} onClick={() => setIsOpen(false)}>
            <FaHome /> Home
          </NavLink>
          <NavLink to="/BookRide" className={navStyle} onClick={() => setIsOpen(false)}>
            <RiEBike2Fill /> BookRide
          </NavLink>
          <NavLink to="/about" className={navStyle} onClick={() => setIsOpen(false)}>
            <FaInfoCircle /> About
          </NavLink>
          <NavLink to="/services" className={navStyle} onClick={() => setIsOpen(false)}>
            <FaServicestack /> Services
          </NavLink>

          {!loading && countryCode && (
            <div className="flex items-center gap-2 mt-2">
              <img
                src={`https://flagcdn.com/w40/${countryCode}.png`}
                alt={country}
                className="w-6 h-4 rounded"
              />
              <span className="text-sm font-medium">{country}</span>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
