import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editSchema),
  });

  const submitForm = (formData) => {
    dispatch(edit({firstName: formData.firstName, lastName: formData.lastName , email: formData.email, index}))

    setFirstName(formData.firstName);
    setLastName(formData.lastName);
    setEmail(formData.email);
  };


  return (
    <form
      className="editForm"
      key={user[index]}
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="form-row">
        <div className="form-group col-md-6 ">
          <label htmlFor="First Name">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            defaultValue={user[index].firstName}
            {...register("firstName")}
          />
          <span>{errors.firstName?.message}</span>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="Last Name">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            defaultValue={user[index].lastName}
            {...register("lastName", { required: true })}
          />
          <span>{errors.lastName?.message}</span>
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            defaultValue={user[index].email}
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
        </div>
      </div>
      <div className="btnGroupEdit">
        <button
          onClick={() => {
            handleSubmit();
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
