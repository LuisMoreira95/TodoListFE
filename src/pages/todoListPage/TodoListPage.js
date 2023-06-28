import React, { useState, useEffect } from "react";
import { Table } from "../../shared/components/UIElements/table/Table";
import Modal from "../../shared/components/UIElements/Modal/Modal";
import omit from "lodash/omit";

const TodoListPage = () => {
  const [todos, setTodos] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [editTodo, setEditTodo] = useState({});

  const fetchTodos = async () => {
    try {
      const result = await fetch(
        "https://localhost:7082/api/Todos?pageNumber=1&pageSize=1000"
      );

      const jsonData = await result.json();

      setTodos(jsonData);
    } catch (error) {
      console.log("Error Fetch Todo ->", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const removeTodo = async (id) => {
    try {
      await fetch(`https://localhost:7082/api/Todos/${id}`, {
        method: "DELETE",
      }).then(() => fetchTodos());
    } catch (error) {
      console.log("Error Remove Todo ->", error);
    }
  };
  const handleRemoveTodo = (id) => {
    removeTodo(id);
  };

  const createOrUpdateTodo = async (todo) => {
    try {
      await fetch(
        `https://localhost:7082/api/Todos/${todo.todoId ? todo.todoId : ""}`,
        {
          method: todo.todoId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(omit(todo, "todoId")),
        }
      ).then(() => {
        setModalOpen(false);
        setEditTodo({});
        fetchTodos();
      });
    } catch (error) {
      console.log("Error Create Todo ->", error);
    }
  };
  const handleCreateOrUpdateTodo = (todo) => {
    createOrUpdateTodo(todo);
  };

  const handleEditTodo = (editTodo) => {
    setEditTodo(editTodo);
    setModalOpen(true);
  };

  return (
    <React.Fragment>
      <Table Data={todos} Remove={handleRemoveTodo} Edit={handleEditTodo} />
      {modalOpen && (
        <Modal
          show={modalOpen}
          onCancel={() => setModalOpen(false)}
          CreateOrUpdate={handleCreateOrUpdateTodo}
          EditTodo={editTodo}
        />
      )}
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add
      </button>
    </React.Fragment>
  );
};

export default TodoListPage;
