import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Table.css";

export const Table = ({ Data, Remove, Edit }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th className="expand">Description</th>
            <th>Category</th>
            <th>Done</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Data &&
            Data.map((entry) => {
              return (
                <tr key={entry.id}>
                  <td>{entry.name}</td>
                  <td>{entry.description}</td>
                  <td>{entry.category.name}</td>
                  <td>{entry.done ? "YES" : "NO"}</td>
                  <td>
                    <span className="actions">
                      <BsFillTrashFill
                        cursor={"pointer"}
                        onClick={() => Remove(entry.id)}
                        className="delete-btn"
                      />
                      <BsFillPencilFill
                        cursor={"pointer"}
                        onClick={() =>
                          Edit({
                            todoId: entry.id,
                            name: entry.name,
                            description: entry.description,
                            categoryId: entry.categoryId,
                            done: entry.done,
                          })
                        }
                      />
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
