import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  arrProduct: [],
  productDetail: {},
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProductAction: (state, action) => {
      //lấy dữ liệu từ payload
      const arrProduct = action.payload;
      //cập nhật lại state
      state.arrProduct = arrProduct;
    },
    getProductDetailAction: (state, action) => {
      //Bước 4: sau khi nhận được dữ liệu từ dispatch2
      const productDetail = action.payload;
      state.productDetail = productDetail;
    },
  },
});
/*------------------action: {type,payload}-------------------------- */
export const { getProductAction, getProductDetailAction } = productReducer.actions;

export default productReducer.reducer;

/*--------------------------Action api------------------------------ */
export const getProductApi = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
      });
      //sau khi lấy dữ liệu từ api => setState cho arrProduct
      // setArrProduct(result.data.content);

      const action = getProductAction(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProductDetailApi = (id) => {
  return async (dispatch) => {
    //Bước 2: thực thi thunk
    try {
      let result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
        method: "GET",
      });
      //sau khi lấy dữ liệu api thành công => đưa lên reducer = hàm dispatch2 từ thunk
      //Bước 3: sau khi có dữ liệu => dispatch lần 2
      const action = getProductDetailAction(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
