import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from './../actions/index'

class TaskSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
  }

  onChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  };
  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  };

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            name='keyword'
            value={this.state.keyword}
            onChange={this.onChange}
          />
          <span className="input-group-btn">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onSearch}
            >
              <span className="fas fa-search"></span> Tìm
            </button>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (keyword) => {
      dispatch(actions.searchTask(keyword));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskSearch);
