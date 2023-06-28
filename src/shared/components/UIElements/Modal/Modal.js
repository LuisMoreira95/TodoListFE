import React, { useState } from "react";
import Backdrop from "../backdrop/Backdrop";

import "./Modal.css";

const Modal = (props) => {
  const [name, setName] = useState(props.EditTodo?.name || "");
  const [description, setDescription] = useState(
    props.EditTodo?.description || ""
  );
  const [done, setDone] = useState(props.EditTodo?.done === "Y" ? "Y" : "N");
  const [category, setCategory] = useState(
    props.EditTodo?.categoryId || "6b55a90f-ea79-4e85-accf-540be8f2e2a0"
  );

  // LM
  return (
    <React.Fragment>
      <div className="modal-container">
        {props.show && <Backdrop onClick={props.onCancel} />}
        <div className="modal">
          Modal
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
              <option value={"Y"}>No</option>
              <option value={"N"}>Yes</option>
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
            onClick={() =>
              props.CreateOrUpdate({
                todoId: props.EditTodo.todoId || null,
                name,
                description,
                done: done === "Y" ? true : false,
                categoryId: category,
              })
            }
          >
            Save
          </button>
        </div>
      </div>
    </React.Fragment>
  );

  //LM

  // return (
  //   <div className="modal-container">
  //     <div className="modal">Modal</div>
  //     <div className="form-group">
  //       <label htmlFor="name">Name</label>
  //       <input
  //         name="name"
  //         onChange={(evt) => setName(evt.target.value)}
  //         value={name}
  //       />
  //     </div>
  //     <div className="form-group">
  //       <label htmlFor="description">Description</label>
  //       <textarea
  //         name="description"
  //         onChange={(evt) => setDescription(evt.target.value)}
  //         value={description}
  //       />
  //     </div>
  //     <div className="form-group">
  //       <label htmlFor="done">Done</label>
  //       <select
  //         name="done"
  //         onChange={(evt) => {
  //           setDone(evt.target.value);
  //         }}
  //         value={done}
  //       >
  //         <option value={"Y"}>No</option>
  //         <option value={"N"}>Yes</option>
  //       </select>
  //     </div>
  //     <div className="form-group">
  //       <label htmlFor="category">Category</label>
  //       <select
  //         name="category"
  //         onChange={(evt) => {
  //           setCategory(evt.target.value);
  //         }}
  //         value={category}
  //       >
  //         <option value="6b55a90f-ea79-4e85-accf-540be8f2e2a0">Work</option>
  //         <option value="12ccd14e-21af-4801-bf14-e80d6b1a2ff5">Pet</option>
  //         <option value="4521d9f7-c05f-4f76-aa18-6fba6b70e1bc">Personal</option>
  //         <option value="1ee26f62-463f-4125-801f-7fe91ae329ba">
  //           Financial
  //         </option>
  //         <option value="ea65d0695-4f8b-49a7-a09a-5e0ec06a142e">Other</option>
  //       </select>
  //     </div>
  //     <button
  //       className="btn"
  //       style={{ color: name === "" || description === "" ? "grey" : null }}
  //       disabled={name === "" || description === ""}
  //       onClick={() =>
  //         props.CreateOrUpdate({
  //           todoId: props.EditTodo.todoId || null,
  //           name,
  //           description,
  //           done: done === "Y" ? true : false,
  //           categoryId: category,
  //         })
  //       }
  //     >
  //       Save
  //     </button>
  //   </div>
  // );
};

export default Modal;
