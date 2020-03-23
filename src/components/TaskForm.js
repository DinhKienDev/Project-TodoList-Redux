import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from './../actions/index'

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  UNSAFE_componentWillMount() {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status
      });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    if (nextProps && nextProps.task) {
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status
      });
    }else if (!nextProps.task) {
      this.setState({
        id: '',
        name: '',
        status: false
      })
    }
  }

  handleChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;    
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddTask(this.state);
    //this.props.onSubmit(this.state);
    //Canle & Close Form
    this.onClear();
    this.onCloseFrom();
  };

  onCloseFrom = () => {
    this.props.onCloseFrom();
  };

  onClear = () => {
    this.setState({
      name: "",
      status: false
    });
    this.onCloseFrom();
  };
  render() {
    var { id } = this.state;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id !== "" ? "Cập Nhật Công Việc" : "Thêm Công Việc"}
            <span
              className="fas fa-times-circle text-right"
              onClick={this.onCloseFrom}
            ></span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Tên: </label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                required
              />
            </div>
            <div className="form-group">
              <label>Trạng Thái: </label>

              <select
                name="status"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.status}
              >
                <option value={false}>Ẩn</option>
                <option value={true}>Kích Hoạt</option>
              </select>
              <br />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                <span className="fas fa-plus"></span> Lưu Lại
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onClear}
              >
                <span className="fas fa-times"></span> Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {

  }
};

const mapDispatchToProps = (dispatch, props) =>{
  return {
      onAddTask: (task) =>{
        dispatch(actions.addTask(task));
      },
      onCloseFrom: () =>{
        dispatch(actions.closeFrom());
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
