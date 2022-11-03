import React, { useEffect, useState } from "react";
import axios from "axios";
let timeout = {};

export default function UseEffectDemo(props) {
  const [arrProduct, setArrProduct] = useState([
    { id: 1, name: "product 1", price: 1000, image: "https://i.pravatar.cc" },
  ]);

  const [count, setCount] = useState(60);

  const renderProduct = () => {
    return arrProduct.map((prod, index) => {
      return (
        <div className="col-4 my-3" key={index}>
          <div className="card">
            <img src={prod.image} alt="..." />
            <div className="card-body">
              <h3>{prod.name}</h3>
              <p>{prod.price}</p>
              <button className="btn btn-success">Add to cart</button>
            </div>
          </div>
        </div>
      );
    });
  };

  const getApi = async () => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
      });
      setArrProduct(result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    //dependency (tham số thứ 2 là mảng rỗng thì hàm chạy 1 lần duy nhất sau khi giao diện render lần đầu tiên)
    //tương đương componentDidMount trong rcc
    getApi();
    //cài đặt hàm tự chạy ngầm 1s setCount 1 lần
    // timeout = setInterval(() => {
    //   setCount((count) => {
    //     return count - 1;
    //   });
    //   console.log(123)
    // }, 1000);
    // return () => {
    //những lệnh cài đặt sẽ chạy khi component mất khỏi giao diện (Tương đương componentWillUnmount)
    //   clearInterval(timeout);
    //     };
  }, []);

  //   setInterval(() => {
  //     setCount(count - 1);
  //   }, 1000);

  return (
    <div className="container my-3 text-center">
      <h3>Count: {count}</h3>
      <hr />
      <h3>Shoes App</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}
