import React, { useRef, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Container, Row, Button } from "reactstrap";
import "./Header.css";
import { AuthContext } from "../context/AuthContext";

const nav_links = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/tours", display: "Tours" },
];

const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <nav className="header sticky_header">
      <Container>
        <div className="flex justify-evenly items-center">
          {/* logo */}
          <div className="logo font-bold text-4xl">
            <h1>
              Travel<span className="text-amber-600">Xpress</span>
            </h1>
          </div>

          {/* menu */}
          <div className="navigation">
            <ul className="flex mb-0 gap-10">
              {nav_links.map((item, index) => (
                <li key={index} className="nav_item list-none">
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "active_link" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* right side */}
          <div className="nav-right flex gap-4">
            <div className="nav-btns flex gap-4">
              {/* ✅ LOGIC CHANGE HERE */}
              {!user ? (
                <>
                  <Button className="secondary__btn font-bold">
                    <Link to="/login">Login</Link>
                  </Button>

                  <Button className="primary__btn font-bold text-white bg-amber-500">
                    <Link to="/register">Register</Link>
                  </Button>
                </>
              ) : (
                <>
                  <div className="user_profile_wrapper">
                    <span className="username">{user.username}</span>

                    <div className="profile_card">
                      <h4>{user.username}</h4>
                      <p>{user.email}</p>

                      <div className="profile_stats">
                        <p>🧳 My Tours: 5</p>
                        <p>⭐ Reviews: 12</p>
                      </div>

                      <button className="logout_btn">Logout</button>
                    </div>
                  </div>

                  <Button
                    className="text-black font-bold cursor-pointer"
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </>
              )}

              <span className="mobile_menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
