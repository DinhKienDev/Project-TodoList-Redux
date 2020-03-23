import React, { Component } from "react";

class Sort extends Component {
   


  onclick = (sortBy, sortValue) =>{
    this.props.onSort(sortBy, sortValue);
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
              <a href="# " role="button" className={(this.props.sortBy === 'name' && this.props.sortValue === 1) ? 'sort-selected' : ''}>
                <span className="fas fa-sort-alpha-up"> Tên A-Z</span>
              </a>
            </li  >
            <li onClick={() => this.onclick('name', -1)}>
            <a href="# " role="button" className={(this.props.sortBy === 'name' && this.props.sortValue === -1) ? 'sort-selected' : ''}>
                <span className="fas fa-sort-alpha-down-alt"> Tên Z-A</span>
              </a>
            </li>
            <li role="separator" className="divider"></li>
            <li onClick={() => this.onclick('status', 1)}>
            <a href="# " role="button" className={(this.props.sortBy === 'status' && this.props.sortValue === 1) ? 'sort-selected' : ''} >Trạng Thái kích hoạt</a>
            </li>
            <li onClick={() => this.onclick('status', -1)}>
            <a href="# " role="button" className={(this.props.sortBy === 'status' && this.props.sortValue === -1) ? 'sort-selected' : ''}>Trạng Thái Ẩn</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sort;
