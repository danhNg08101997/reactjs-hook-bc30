import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

export default function UseSearchParams() {
  let keywordRef = useRef("");

  let [searchParams, setSearchParams] = useSearchParams();

  let [arrProduct, setArrProduct] = useState([]);

  const getProductByKeyword = async () => {
    try {
      //lấy keyword từ trên url
      let keyword = searchParams.get("keyword");
      if (keyword.trim() !== "" && keyword != null) {
        let result = await axios({
          url: "https://shop.cyberlearn.vn/api/Product?keyword=" + keyword,
          method: "GET",
        });
        console.log(result.data.content);
        setArrProduct(result.data.content);
      } else {
        setArrProduct([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    //mỗi lần người dùng gõ phím => đưa vào keywordRef
    keywordRef.current = e.target.value;
  };

  useEffect(() => {
    getProductByKeyword();
  }, [keywordRef.current]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //đưa dữ liệu keyword người dùng nhập lên url
    setSearchParams({ keyword: keywordRef.current });
  };

  const renderProductByKeyword = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <div className="card my-3">
            <img src={item.image} alt={item.name} className="w-100" />
            <div className="card-body bg-dark text-white">
              <p>{item.name}</p>
              <p>{item.price}</p>
              <NavLink className="btn btn-warning" to={`/detail/${item.id}`}>
                View detail
              </NavLink>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <form className="container my-2" onSubmit={handleSubmit}>
      <h3>Search</h3>
      <div className="form-group">
        <p>Nhập từ khoá</p>
        <div className="input-group-prepend">
          <input
            className="form-control"
            id="keywordRef"
            onChange={handleChange}
          />
          <button className="btn bg-dark text-white my-2">Search</button>
        </div>
      </div>
      <div className="mt-2">
        <p>Kết quả tìm kiếm</p>
        <div className="row">{renderProductByKeyword()}</div>
      </div>
    </form>
  );
}
