import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginDemo() {
  const navigate = useNavigate();
  // console.log(props)
  const userLoginRef = useRef({
    userName: "",
    passWord: "",
  });
  const handleChange = (e) => {
    const { value, id } = e.target;
    userLoginRef.current[id] = value;
    console.log(userLoginRef.current);
  };
  const handleSubmit =  (e) => {
    e.preventDefault(); //Chặn reload browser
    console.log(userLoginRef.current);
    let promise = new Promise((resolve, errorFunction) => {
      setTimeout(() => {
        console.log("Đăng nhập api");
        if (userLoginRef.current.userName === "nguyenthanhdanh") {
          resolve("Đăng nhập thành công");
        }else{
            errorFunction('Đăng nhập thất bại!')
            alert('Đăng nhập thất bại!')
        }
      }, 3000);
    });
    promise.then(result => {
        console.log(result)
        //nếu thành công chuyển hướng về home
        navigate('/')
    })
    promise.catch(err => {
        navigate('/usereduxfbapp')
    })
  };
  return (
    <form className="container text-center my-2" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className="form-group text-start">
        <p>username</p>
        <input className="form-control" id="userName" onChange={handleChange} />
      </div>
      <div className="form-group text-start">
        <p>password</p>
        <input className="form-control" id="passWord" onChange={handleChange} />
      </div>
      <div className="form-group">
        <button className="btn btn-success my-2">Login</button>
      </div>
    </form>
  );
}
