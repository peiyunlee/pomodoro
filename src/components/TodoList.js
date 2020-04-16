import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.renderItems = this.renderItems.bind(this);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Todo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{this.renderItems()}</tbody>
      </table>
    );
  }

  renderItems() {
    const todos = this.props.todos;
    const {saveTask} = this.props;
    // const { saveTask, deleteTask, completeTask } = this.props;

    let list = [];
    todos.forEach((todo, idx,estimateTomo) => {
      list.push(
        <TodoItem
          key={idx}
          idx={idx}
          todo={todo}
          estimateTomo={estimateTomo}
          saveTask={saveTask}
        />
      );
      
      // deleteTask={deleteTask}
      // completeTask={completeTask}
    });
    return list;
  }
}

export default TodoList;