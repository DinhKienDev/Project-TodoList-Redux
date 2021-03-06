import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from './../actions/index'

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: false
    };
  }

  UNSAFE_componentWillMount() {
    if (this.props.itemEditting) {
      this.setState({
        id: this.props.itemEditting.id,
        name: this.props.itemEditting.name,
        status: this.props.itemEditting.status
      });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditting) {
      this.setState({
        id: nextProps.itemEditting.id,
        name: nextProps.itemEditting.name,
        status: nextProps.itemEditting.status
      });
    } else if (!nextProps.itemEditting) {
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
    if (!this.props.isDisplayFrom) {
      return null
    }
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

const mapStateToProps = (state) => {
  return {
    isDisplayFrom: state.isDisplayFrom,
    itemEditting: state.itemEditting
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      dispatch(actions.addTask(task));
    },
    onCloseFrom: () => {
      dispatch(actions.closeFrom());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
