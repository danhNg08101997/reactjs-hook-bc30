import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //state.facebookReducer =
  arrComment: [
    { name: "John", content: "hello guys!" },
    { name: "Hulk", content: "guzzz!" },
  ],
};

const facebookReducer = createSlice({
  name: "facebookReducer", //tên nối với action
  initialState,
  reducers: {
    addComment: (state, action) => {
      //b1 lấy dữ liệu action gửi lên
      const userComment = action.payload;
      //b2 cập nhật state
      // vì userComment.current 2 lần push là giống nhau vùng nhớ => clone ra trước khi push
      //   state.arrComment.push({ ...userComment });
      state.arrComment.push({...userComment});
    },
  },
});

export const { addComment } = facebookReducer.actions;

export default facebookReducer.reducer;
