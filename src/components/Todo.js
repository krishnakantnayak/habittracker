import React, { useState } from "react";
import "./Todo.css";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "../actions/homeActions";

function Todo() {
  const [inputTask, setInputTask] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <>
      
      <div className="main-div">
        <form className="col-8 mx-auto my-4">
          <div className="form-group row my-2">
            <label htmlFor="task" className="col-sm-2 col-form-label">
              Habit Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="taskName"
                placeholder="Enter the habit name..."
                value={inputTask}
                onChange={(event) => setInputTask(event.target.value)}
              />
            </div>
          </div>
          
        </form>

        <div className="addItems d-grid gap-2 col-6 mx-auto">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() =>
              dispatch(addTask(inputTask, inputDesc), setInputTask(""), setInputDesc(""), window.confirm("Successfully Added"))
            }
          >
            <i className="fa-solid fa-pen-to-square"></i> Add The Habit
          </button>
        </div>

        <div className="showList my-2 list-group-item-primary">
          {list.map((elem) => {
            return (
              <div className="eachItem col-8 mx-auto d-flex justify-content-between" key={elem.id}>
                <h5>{elem.task}</h5>
                <h5>{elem.description}</h5>
                <i
                  className="fa-solid fa-trash-can fa-large my-2"
                  title="Delete Item"
                  onClick={() => {
                    dispatch(deleteTask(elem.id));
                    alert("Successfully Deleted");
                  }}
                ></i>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Todo;
