import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getIndex } from "../features/index";
import { Link } from "react-router-dom";

function UserData() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  return user.map((user, index) => {
    return (
      <tr key={index}>
        <td>
          <Link to="/edit">
            <button
              onSubmit={(e) => e.preventDefault()}
              type="button"
              onClick={() => {
                dispatch(getIndex(index));
              }}
              className="btn btn-light"
            >
              Edit
            </button>
          </Link>
        </td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
      </tr>
    );
  });
}

export default UserData;
