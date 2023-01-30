import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoItem } from "../api/toDoSlice";
function PostsList() {
  const { todoItem } = useSelector((state) => state.toDoSlice);
  const dispatch = useDispatch();

  const [inputField, setInputField] = useState({
    title: "",
    content: "",
  });
  const inputsHandler = (e) => {
    setInputField((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const setPostData = (data) => {
    setInputField({
      title: data.title,
      content: data.content,
    });
  };
  const onEditData = () => {

    const updatedList = todoItem.map((item) => {
      const clonedData = {...item}
      if(item.title === inputField.title)
      {
        clonedData.title = inputField.title
        clonedData.content = inputField.content
      }
      return clonedData
    })
    dispatch(addTodoItem(updatedList))
    setInputField(() => ({
      title: "",
      content: "",
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { title, content } = e.target.elements;
    setInputField((inputField) => ({
      ...inputField,
      [e.target.name]: e.target.value,
    }));
    let formData = {
      title: title.value,
      content: content.value,
    };
    const toDoList = [...todoItem, formData];
    dispatch(addTodoItem(toDoList));
  };

  const deletePost = (title) => {
    const index = todoItem.findIndex((item) => item.title === title)
    const cloneArray = [...todoItem]
    cloneArray.splice(index)
    dispatch(addTodoItem(cloneArray))
    setInputField(() => ({
      title: "",
      content: "",
    }));
  }
  return (
    <div className="row">
      <div className="col-md-4 offset-md-*">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">
              <strong>Enter Title</strong>
            </label>
            <input
              value={inputField.title}
              type="text"
              className="form-control"
              name="title"
              id="title"
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <strong>Enter content</strong>
            </label>
            <textarea
              value={inputField.content}
              className="form-control"
              rows="3"
              name="content"
              onChange={inputsHandler}
            ></textarea>
          </div>
          <button className="btn btn-danger me-2" type="submit">
            Submit
          </button>
          <button
            onClick={onEditData}
            className="btn btn-primary"
            type="button"
          >
            Update
          </button>
        </form>
      </div>
      <div className="col-lg-8">
        <div className="row">

          {todoItem?.length > 0 && todoItem.map((item) => 
            <div className="col-lg-12 mb-3" key={item.title}>
            <div className="card alert alert-secondary">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.content}</p>
                <button
                  onClick={() => deletePost(item.title)}
                  className="btn btn-outline-danger me-2"
                >
                  Remove
                </button>
                <button
                  onClick={() => setPostData(item)}
                  className="btn btn-outline-primary"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default PostsList;
