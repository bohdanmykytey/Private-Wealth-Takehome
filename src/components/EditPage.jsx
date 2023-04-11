import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { edit } from "../features/user";
import { Link } from "react-router-dom";

function EditPage() {
  const user = useSelector((state) => state.user.value);
  const index = useSelector((state) => state.index);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  document.querySelectorAll(".form-control").required = true;

  return (
    <form className="editForm" key={user[index]}>
      <div className="form-row">
        <div className="form-group col-md-6 ">
          <label htmlFor="First Name">First Name</label>
          <input
            type="text"
            required
            onChange={(e) => setFirstName(e.target.value)}
            className="form-control"
            value={user[index].firstName}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="Last Name">Last Name</label>
          <input
            type="text"
            required
            onChange={(e) => setLastName(e.target.value)}
            className="form-control"
            value={user[index].lastName}
          />
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            value={user[index].email}
          />
        </div>
      </div>
      <div className="btnGroupEdit">
        <Link to="/">
          <button
            onClick={() => {
              dispatch(edit({ firstName, lastName, email, index }));
            }}
            type="submit"
            className="btn btn-success"
          >
            Save
          </button>
        </Link>
        <Link to="/">
          <button type="button" className="btn btn-danger home">
            Home
          </button>
        </Link>
      </div>
    </form>
  );
}

export default EditPage;