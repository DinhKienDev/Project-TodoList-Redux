import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TaskSort extends Component {



  onclick = (sortBy, sortValue) => {
    this.props.onSort({
      by: sortBy,
      value: sortValue
    });
  }

  render() {

    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sắp Xếp <span className="far fa-plus-square"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick={() => this.onclick('name', 1)}>
              <a href="# " role="button" className={(this.props.sort.by === 'name' && this.props.sort.value === 1) ? 'sort-selected' : ''}>
                <span className="fas fa-sort-alpha-up"> Tên A-Z</span>
              </a>
            </li  >
            <li onClick={() => this.onclick('name', -1)}>
              <a href="# " role="button" className={(this.props.sort.by === 'name' && this.props.sort.value === -1) ? 'sort-selected' : ''}>
                <span className="fas fa-sort-alpha-down-alt"> Tên Z-A</span>
              </a>
            </li>
            <li role="separator" className="divider"></li>
            <li onClick={() => this.onclick('status', 1)}>
              <a href="# " role="button" className={(this.props.sort.by === 'status' && this.props.sort.value === 1) ? 'sort-selected' : ''} >Trạng Thái kích hoạt</a>
            </li>
            <li onClick={() => this.onclick('status', -1)}>
              <a href="# " role="button" className={(this.props.sort.by === 'status' && this.props.sort.value === -1) ? 'sort-selected' : ''}>Trạng Thái Ẩn</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToprops = state => {
  return {
    sort: state.sort
  };
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSort: (sort) => { //sortby, sortvalue
      dispatch(actions.sortTask(sort));
    }
  }
}

export default connect(mapStateToprops, mapDispatchToProps)(TaskSort);
