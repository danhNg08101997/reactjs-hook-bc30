//rfc
import React, { useState } from "react";
import BaiTapChonXe from "./BaiTapChonXe";

export default function UseStateDemo() {
  /*
   useState: là hàm của react cung cấp.
   Lưu ý: không gọi hàm này trong if else hay switch...
   [giá trị thay đổi, hàm set lại giá trị mới] = useState (giá trị mặc định ban đầu);

   ứng với rcc (this.state = {like:1})
   */
  const [like, setLike] = useState(1);
  return (
    <div className="container my-2">
      <div className="card w-25">
        <img src="https://i.pravatar.cc?u=1" alt="..." />
        <div className="card-body">
          <h3>Họ tên: Danh Nguyễn</h3>
          <p>Tuổi: 25</p>
          <p>Like: {like}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              setLike(like + 1);
            }}
          >
            Like
          </button>
        </div>
      </div>
      <hr />
      <BaiTapChonXe />
    </div>
  );
}
