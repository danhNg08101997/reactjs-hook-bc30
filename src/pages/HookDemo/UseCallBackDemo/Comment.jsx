import React, { memo } from "react";
const Comment = (props) => {
  console.log("comment");
  return (
    <div className=" mb-2 px-2">
      {props.renderLike()}
      <textarea className="form-control w-100"></textarea> <br />
      <button className="btn btn-primary">Gửi</button>
    </div>
  );
};
export default memo(Comment);
// tương đương PureComponent trong rcc
