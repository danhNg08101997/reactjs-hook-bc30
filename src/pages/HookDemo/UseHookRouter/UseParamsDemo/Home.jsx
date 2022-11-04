import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductAction,
  getProductApi,
} from "../../../../redux/reducers/productReducer";

export default function Home() {
  const navigate = useNavigate();

  // const [arrProduct, setArrProduct] = useState([]);

  //sử dụng useSelector lấy dữ liệu từ redux về
  const { arrProduct } = useSelector((state) => state.productReducer);
  let dispatch = useDispatch();

  //call api
  const getAllProductApi = async () => {
    /*
Dạng 1: action và object
action ={
  type:"",
  payload:"",
}
Dạng 2: action là callback function
action = (dispatch2) => {
  //call api a
  //call api b
  action = {
    type:'',
    payload
  }
  dispatch2(action)
}
*/
    const actionThunk = getProductApi();
    dispatch(actionThunk);
  };
  useEffect(() => {
    getAllProductApi();
  }, []);

  const renderProduct = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-4 my-2" key={index}>
          <div className="card">
            <img src={item.image} alt={item.name} />
            <div className="card-body bg-dark text-white">
              <p>{item.name}</p>
              <p>{item.price}</p>
              <NavLink className="btn btn-warning" to={`/detail/${item.id}`}>
                View detail
              </NavLink>

              <button
                className="mx-2 btn btn-danger"
                onClick={() => {
                  navigate(`/detail/${item.id}`);
                }}
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container text-center my-4">
      <h3 className="text-center">Shoes App</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}
