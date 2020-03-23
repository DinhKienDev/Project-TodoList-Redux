import React, { Component } from "react";
import TaskItem from "./TaskItem";
import {connect} from 'react-redux'

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName : "",
      filterStatus : -1 // all -1; active: 1; deactive: 0
    };
  }

  onChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(
      name === "filterName" ? value : this.state.filterName,
      name === "filterStatus" ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value
    });
  };

  render() {
    var { tasks } = this.props;
    var { filterName, filterStatus } = this.state;
    var elmTasks = tasks.map((task, index) => {
      return (
        <TaskItem
          key={task.id}
          index={index}
          task={task}
          onDeleteData={this.props.onDeleteData}
          onEditData={this.props.onEditData}
        />
      );
    });

    return (
      <table className="table table-bordered table-hover mt-15">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="filterName"
                className="form-control"
                value={filterName}
                onChange={this.onChange}
              />
            </td>
            <td>
              <select
                className="form-control"
                name="filterStatus"
                value={filterStatus}
                onChange={this.onChange}
              >
                <option value={-1}>Tất cả</option>
                <option value={0}>Ẩn</option>
                <option value={1}>Kích hoạt</option>
              </select>
            </td>
            <td></td>
          </tr>
          {elmTasks}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    tasks: state.tasks
  }
};


export default connect(mapStateToProps, null)(TaskList);