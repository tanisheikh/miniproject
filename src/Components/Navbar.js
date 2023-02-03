import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import Form from "./Form";

const Navbar = () => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [position, setPosition] = useState("");

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };

  const onClick = (name) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };
  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navBarColor">
        <div className="container-fluid">
          <Link to="/ " className="navbar-brand">
            Todo List
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  Link
                </Link>
              </li>

              <li className="nav-item">
                <Link to=" " className="nav-link disabled" tabindex="-1" aria-disabled="true">
                  Disabled
                </Link>
              </li>
            </ul>
            <img
              src="http://lh3.googleusercontent.com/gImYUj1PWEykH-bIXZVDJWDOvZv1j4oYCwk8A9nnGzxOum46-SWlZ1Z7MlMGvkbRL0s=w300"
              alt="loading..."
              className="logo"
            />
            <form className="d-flex">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
              <Button
                className="addBtn"
                type="button"
                label="Add"
                icon="pi pi-external-link"
                onClick={() => onClick("displayBasic")}
              />
            </form>
          </div>
        </div>
      </nav>
      <Dialog
        header=" Add details "
        visible={displayBasic}
        style={{ width: "50vw" }}
        onHide={() => onHide("displayBasic")}>
        <Form />
      </Dialog>
    </div>
  );
};

export default Navbar;
