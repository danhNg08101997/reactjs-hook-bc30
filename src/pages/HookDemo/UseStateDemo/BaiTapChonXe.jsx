import React, { useState } from "react";

export default function BaiTapChonXe() {
  const [img, setImg] = useState("./img/product-car/red-car.jpg");
  return (
    <div>
      <h3>Bài tập chọn xe</h3>
      <div className="row">
        <div className="col-6">
          <img src={img} alt="..." className="w-100" />
        </div>
        <div className="col-6">
          <button
            className="btn mx-2 text-white"
            style={{ background: "red" }}
            onClick={() => {
              setImg("./img/product-car/red-car.jpg");
            }}
          >
            Red Car
          </button>
          <button
            className="btn mx-2 text-white"
            style={{ background: "silver" }}
            onClick={() => {
              setImg("./img/product-car/silver-car.jpg");
            }}
          >
            Silver Car
          </button>
          <button
            className="btn mx-2 text-white"
            style={{ background: "black" }}
            onClick={() => {
              setImg("./img/product-car/black-car.jpg");
            }}
          >
            Black Car
          </button>
          <button
            className="btn mx-2 text-white"
            style={{ background: "#696B6F" }}
            onClick={() => {
              setImg("./img/product-car/steel-car.jpg");
            }}
          >
            Steel Car
          </button>
        </div>
      </div>
    </div>
  );
}
