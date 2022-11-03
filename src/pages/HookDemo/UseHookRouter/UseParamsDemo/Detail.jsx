import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export default function Detail() {
  const [productDetail, setProductDetail] = useState({});
  const params = useParams();
  console.log("params", params);
  console.log("productDetail", productDetail);
  const getProductDetailApi = async () => {
    let { id } = params;
    try {
      let result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
        method: "GET",
      });
      setProductDetail(result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    //call api
    getProductDetailApi();
  }, []);
  return (
    <div className="container">
      <h3>Params: Product - {params.id}</h3>
      <div className="row">
        <div className="col-4">
          <img
            src={productDetail.image}
            alt={productDetail.name}
            className="w-100"
          />
        </div>
        <div className="col-8">
          <h1>{productDetail.name}</h1>
          <p>{productDetail.price}</p>
          <p>{productDetail.description}</p>
        </div>
      </div>
      <hr />
      <h3>Related Product</h3>
      <div className="row my-2">
        {/* optional chaining (toán tử ?) */}
        {productDetail.relatedProducts?.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card">
                <img src={item.image} alt={item.name} />
                <div className="card-body bg-dark text-white">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <NavLink
                    className="btn btn-warning"
                    to={`/detail/${item.id}`}
                  >
                    View detail
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
