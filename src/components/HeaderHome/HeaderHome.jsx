import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function HeaderHome() {
  const { userLogin } = useSelector((state) => state.userReducer);
  const renderLoginNavItem = () => {
    if (userLogin == null) {
      return (
        <NavLink className="nav-link" to="login">
          Login (Authorization - token)
        </NavLink>
      );
    }
    return (
      <NavLink className="nav-link" to="/profile">
        Hello! {userLogin.name}
      </NavLink>
    );
  };
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            REACT HOOK
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/" aria-current="page">
                  Home <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="logindemo">
                  Logindemo
                </NavLink>
              </li>
              <li className="nav-item">{renderLoginNavItem()}</li>
              <li className="nav-item">
                <NavLink className="nav-link" to="antd">
                  AntdDemo
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Hooks
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <NavLink className="dropdown-item" to="usestate">
                    UseState
                  </NavLink>
                  <NavLink className="dropdown-item" to="useeffect">
                    UseEffect
                  </NavLink>
                  <NavLink className="dropdown-item" to="usecallback">
                    UseCallBack
                  </NavLink>
                  <NavLink className="dropdown-item" to="usememo">
                    UseMemo
                  </NavLink>
                  <NavLink className="dropdown-item" to="useref">
                    UseRef
                  </NavLink>
                  <NavLink className="dropdown-item" to="useredux">
                    demo redux (number)
                  </NavLink>
                  <NavLink className="dropdown-item" to="usereduxfbapp">
                    demo redux (facebook app)
                  </NavLink>
                  <NavLink className="dropdown-item" to="demouseroutes">
                    useRoute (custom hook)
                  </NavLink>
                </div>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-warning my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
