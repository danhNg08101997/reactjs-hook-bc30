import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../../../../redux/reducers/facebookReducer";

export default function DemoFaceBookApp() {
  const { arrComment } = useSelector((state) => state.facebookReducer);

  const userComment = useRef({ name: "", content: "" });

  const dispatch = useDispatch();

  const renderComment = () => {
    return arrComment.map((comment, index) => {
      return (
        <div className="row my-2" key={index}>
          <div className="col-2">
            <img
              src={`https://i.pravatar.cc?u=${comment.name}`}
              alt="..."
              className="w-100"
            />
          </div>
          <div className="col-10">
            <h3 className="text-danger">{comment.name}</h3>
            <p>{comment.content}</p>
          </div>
        </div>
      );
    });
  };

  const handleChangeInput = (e) => {
    //lấy ra id, value của thẻ
    const { id, value } = e.target;
    userComment.current[id] = value;
    console.log(userComment.current);
  };

  const handleSubmit = (e) => {
    //chặn sự kiện reload của browser
    e.preventDefault();
    // đưa dữ liệu lên redux

    //cách 1 tự tạo action
    // const action = {
    //   type: "facebookReducer/addComment",
    //   payload: 123,
    // };
    // dispatch(action);

    //cách 2: dùng action creator của reduxslice
    const action = addComment(userComment.current);
    dispatch(action);
  };

  return (
    <div className="container my-2">
      <h3>Demo facebook app</h3>
      <div className="card">
        <div className="card-header">{renderComment()}</div>
        <div className="card-body">
          <form className="frm" onSubmit={handleSubmit}>
            <div className="form-group">
              <p>name</p>
              <input
                className="form-control"
                id="name"
                onInput={handleChangeInput}
              />
            </div>
            <div className="form-group">
              <p>content</p>
              <input
                className="form-control"
                id="content"
                onInput={handleChangeInput}
              />
            </div>
            <div className="form-group mt-3">
              <button className="btn btn-success" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
