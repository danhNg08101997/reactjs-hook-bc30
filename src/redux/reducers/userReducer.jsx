import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ACCESS_TOKEN,
  getStore,
  getStoreJson,
  setCookie,
  setStore,
  setStoreJson,
  USER_LOGIN,
} from "../../util/tools";
import { history } from "../../index";

const initialState = {
  userLogin: getStoreJson(USER_LOGIN), //có thể null hoặc object
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    getProfileAction: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});

export const { getProfileAction } = userReducer.actions;

export default userReducer.reducer;

export const loginApi = (userLogin) => {
  //{email, password}
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signin",
        method: "POST",
        data: userLogin,
      });
      // sau khi đăng nhập thành công => lưu dữ liệu vào localStorage hoặc cookie
      console.log(result);
      setCookie(ACCESS_TOKEN, result.data.content.accessToken, 30);
      setStore(ACCESS_TOKEN, result.data.content.accessToken);
      //chuyển hướng về profile, trang quên mật khẩu
      history.push("/profile");
      //sau khi đăng nhập thành công thì dispatch action getProfile
      dispatch(getProfileApi());
    } catch (err) {
      history.push("/login");
      console.log(err);
    }
  };
};

export const getProfileApi = (accessToken = getStore(ACCESS_TOKEN)) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/getProfile",
        method: "POST",
        headers: {
          //headers là các phần dữ liệu mặc định gửi đi
          Authorization: "Bearer " + accessToken,
        },
      });
      //lấy được thông tin profile => đưa lên redux
      const action = getProfileAction(result.data.content);
      dispatch(action);

      //lưu vào storage
      setStoreJson(USER_LOGIN, result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
};
