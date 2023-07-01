import React, { useState } from "react";
import Backdrop from "../../shared/components/UIElements/backdrop/Backdrop";

import "./TodoModal.css";

const TodoModal = ({ EditTodo, Show, OnCancel, CreateOrUpdate }) => {
  const [name, setName] = useState(EditTodo?.name || "");
  const [description, setDescription] = useState(EditTodo?.description || "");
  const [done, setDone] = useState(EditTodo?.done === true ? "Y" : "N");
  const [category, setCategory] = useState(
    EditTodo?.categoryId || "6b55a90f-ea79-4e85-accf-540be8f2e2a0"
  );

  return (
    <React.Fragment>
      <div className="modal-container">
        {Show && <Backdrop OnClick={OnCancel} />}
        <div className="modal">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              onChange={(evt) => setName(evt.target.value)}
              value={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              onChange={(evt) => setDescription(evt.target.value)}
              value={description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="done">Done</label>
            <select
              name="done"
              onChange={(evt) => {
                setDone(evt.target.value);
              }}
              value={done}
            >
              <option value={"N"}>No</option>
              <option value={"Y"}>Yes</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              onChange={(evt) => {
                setCategory(evt.target.value);
              }}
              value={category}
            >
              <option value="6b55a90f-ea79-4e85-accf-540be8f2e2a0">Work</option>
              <option value="12ccd14e-21af-4801-bf14-e80d6b1a2ff5">Pet</option>
              <option value="4521d9f7-c05f-4f76-aa18-6fba6b70e1bc">
                Personal
              </option>
              <option value="1ee26f62-463f-4125-801f-7fe91ae329ba">
                Financial
              </option>
              <option value="ea65d0695-4f8b-49a7-a09a-5e0ec06a142e">
                Other
              </option>
            </select>
          </div>
          <button
            className="btn"
            style={{
              color: name === "" || description === "" ? "grey" : null,
            }}
            disabled={name === "" || description === ""}
            onClick={() => {
              CreateOrUpdate({
                todoId: EditTodo.todoId || null,
                name,
                description,
                done: done === "Y" ? true : false,
                categoryId: category,
              });
            }}
          >
            Save
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TodoModal;
