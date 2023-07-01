import React, { useState, useEffect } from "react";
import TodoTable from "./TodoTable";
import TodoModal from "./TodoModal";
import omit from "lodash/omit";

import "./TodoListPage.css";
import Card from "../../shared/components/UIElements/card/Card";

const TodoListPage = () => {
  const [todos, setTodos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editTodo, setEditTodo] = useState({});

  // Every time this component mounts this function is called
  useEffect(() => {
    fetchTodos();
  }, []);

  // Fetch a list of todos
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

  // Removes a todo and then fetches the updated list of todos
  const removeTodo = async (id) => {
    try {
      await fetch(`https://localhost:7082/api/Todos/${id}`, {
        method: "DELETE",
      }).then(() => fetchTodos());
    } catch (error) {
      console.log("Error Remove Todo ->", error);
    }
  };

  // Updates a todo if an id parameter is available
  // Otherwise creates it
  // Then: closes the modal, set the todo to empty "Because the todo populates edit modal" and
  // Get the updated todo list
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
      console.log("Error Create or Update Todo ->", error);
    }
  };

  // Callback that sends the id to remove from table to todoList Page
  const handleRemoveTodo = (id) => {
    removeTodo(id);
  };

  // Callback that sends the todo to edit or create from Modal to todoList Page
  const handleCreateOrUpdateTodo = (todo) => {
    createOrUpdateTodo(todo);
  };

  // Callback that sends the todo to edit from Table to todoList Page
  const handleEditTodo = (editTodo) => {
    setEditTodo(editTodo);
    setModalOpen(true);
  };

  // CREATE: Modal --> TodoListPage
  // EDIT: Table --> TodoListPage --> Modal --> TodoListPage

  return (
    <React.Fragment>
      {todos.length === 0 && (
        <Card className="no-record-card">
          <p>No records found!</p>
        </Card>
      )}
      {todos.length > 0 && (
        <TodoTable
          Data={todos}
          Remove={handleRemoveTodo}
          Edit={handleEditTodo}
        />
      )}
      {modalOpen && (
        <TodoModal
          Show={modalOpen}
          OnCancel={() => {
            setModalOpen(false);
            setEditTodo({});
          }}
          CreateOrUpdate={handleCreateOrUpdateTodo}
          EditTodo={editTodo}
        />
      )}
      <button className="btn btn-todoList" onClick={() => setModalOpen(true)}>
        Add
      </button>
    </React.Fragment>
  );
};

export default TodoListPage;
