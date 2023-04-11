import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { edit } from "../features/user";
import { Link } from "react-router-dom";
import { editSchema } from "../validations/userValidation";

function EditPage() {
  const user = useSelector((state) => state.user.value);
  const index = useSelector((state) => state.index);
  const [firstName, setFirstName] = useState(user[index].firstName);
  const [lastName, setLastName] = useState(user[index].lastName);
  const [email, setEmail] = useState(user[index].email);
  const dispatch = useDispatch();

  const validateUserInputs = async (e) => {
    e.preventDefault();

    let inputData = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
    };

    console.log(inputData);
    const isValid = await editSchema.isValid(inputData);
    console.log(isValid);
  };

  return (
    <form className="editForm" key={user[index]} onSubmit={validateUserInputs}>
      <div className="form-row">
        <div className="form-group col-md-6 ">
          <label htmlFor="First Name">First Name</label>
          <input
            type="text"
            required
            onChange={(e) => setFirstName(e.target.value)}
            className="form-control"
            defaultValue={user[index].firstName}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="Last Name">Last Name</label>
          <input
            type="text"
            required
            onChange={(e) => setLastName(e.target.value)}
            className="form-control"
            defaultValue={user[index].lastName}
          />
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            defaultValue={user[index].email}
          />
        </div>
      </div>
      <div className="btnGroupEdit">
          <button
            onClick={() => {
              dispatch(edit({ firstName, lastName, email, index }));
            }}
            type="submit"
            className="btn btn-success"
          >
            Save
          </button>
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
