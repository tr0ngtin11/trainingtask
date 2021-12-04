import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import {
  NavItem,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  Button,
  Row,
  Col,
} from "reactstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import "./css/Header.css";
function Header(props) {
  const [showSidebar, setShowSidebar] = useState("modal");
  const ref = useRef();
  const close = (
    <span>
      <FaBars onClick={() => setShowSidebar("modal")} />
    </span>
  );
  const handleClickHeader = (event) => {
    setShowSidebar("modal d-block");
  };

  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = (event) => {
        // event.stopPropagation();

        // Do nothing if clicking ref's element or descendent elements
        if (event.target.className == "posFaTimes") {
          handler(event);
          return;
        }

        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  };

  useOnClickOutside(ref, () => setShowSidebar("modal"));

  return (
    <>
      <div className={showSidebar}>
        <div ref={ref} className="sidebar">
          <FaTimes
            onClick={() => setShowSidebar("modal")}
            className="posFaTimes"
          />
          <ul className="sidebar-listitems">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="btn-header ">
        <Button onClick={() => setShowSidebar("modal d-block")} color="faded">
          <span>
            <FaBars onClick={() => setShowSidebar("modal")} />
          </span>
        </Button>
      </div>
    </>
  );
}

export default Header;
