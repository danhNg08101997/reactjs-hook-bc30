import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function DemoNumber() {
  const number = useSelector((state) => state.number);

  const dispatch = useDispatch();

  return (
    <div className="container my-2 text-center">
      <h3>Number: {number}</h3>
      <button
        className="btn btn-success"
        onClick={() => {
          //   const action = {
          //     type: "CHANGE_NUMBER",
          //     payload: number + 1,
          const action = {
            type: "numberReducer/changeNumber",

            payload: number + 1,
          };
          dispatch(action);
        }}
      >
        +
      </button>
    </div>
  );
}
