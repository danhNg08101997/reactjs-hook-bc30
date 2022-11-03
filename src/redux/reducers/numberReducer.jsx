import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;
const numberReducer = createSlice({
  name: "numberReducer", //tên reducer => ghép tạo thành tên action
  initialState, //giá trị ban đầu của state
  reducers: {
    //ứng với hàm reducer khi trước khai báo
    changeNumber: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { changeNumber } = numberReducer.actions;

export default numberReducer.reducer;
