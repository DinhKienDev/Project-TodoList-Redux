import React, { Component } from "react";

class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };

  onDeleteData = () => {
    this.props.onDeleteData(this.props.task.id);
  };

  onEditData = () =>{
    this.props.onEditData(this.props.task.id);
  }

  render() {
    var { task, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td className="text-center">{task.name}</td>
        <td className="text-center">
          <span
            className={
              task.status === true
                ? "label label-danger"
                : "label label-success"
            }
            onDoubleClick={this.onUpdateStatus}
          >
            {task.status === true ? "Kich Hoat" : "An"}
          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning" onClick={this.onEditData} >
            <span className="fas fa-pencil-alt"></span> Sửa
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.onDeleteData}
          >
            <span className="fas fa-trash-alt"></span> Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
