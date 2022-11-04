import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login(props) {
  //lấy dữ liệu từ form
  const frm = useFormik({
    initialValues: {
      //dữ liệu ban đầu mặc định của form
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      //check validation
      email: Yup.string().required("email không được bỏ trống!").email('email không đúng định dạng!'),
      password: Yup.string().required("password không được bỏ trống").min(6,'pass từ 6-10 ký tự!').max(10,'pass từ 6-10 ký tự'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form className="container my-2" onSubmit={frm.handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p>Email</p>
        <input
          className="form-control"
          id="email"
          name="email"
          onChange={frm.handleChange}
          onBlur={frm.handleBlur}
        />
        {frm.errors.email ? (
          <span className="text-danger">{frm.errors.email}</span>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <p>Password</p>
        <input
          className="form-control"
          id="password"
          name="password"
          onChange={frm.handleChange}
          onBlur={frm.handleBlur}
        />
        {frm.errors.password ? (
          <span className="text-danger">{frm.errors.password}</span>
        ) : (
          ""
        )}
      </div>
      <div className="form-group my-2">
        <button className="btn btn-warning">Login</button>
      </div>
    </form>
  );
}
