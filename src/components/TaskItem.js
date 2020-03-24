import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from './../actions/index'

class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };

  onDeleteData = () => {
    this.props.onDeleteData(this.props.task.id);
    this.props.onCloseFrom();
  };

  onEditData = () => {
    this.props.onOpenForm();
    this.props.onEditTask(this.props.task);
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
            onClick={this.onUpdateStatus}
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

const mapStateToProps = state => {
  return {

  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: (id) => {
      dispatch(actions.updateStatus(id));
    },
    onDeleteData: (id) => {
      dispatch(actions.deleteTask(id));
    },
    onCloseFrom: () => {
      dispatch(actions.closeFrom());
    },
    onOpenForm: () => {
      dispatch(actions.openFrom());
    },
    onEditTask: (task) => {
      dispatch(actions.editTask(task));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
