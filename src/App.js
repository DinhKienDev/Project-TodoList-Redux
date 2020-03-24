import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/TaskControl";
import TaskList from "./components/TaskList";
import { connect } from 'react-redux';
import * as actions from './actions/index'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "name",
      sortValue: 1
    };
  }
  // // load one save localStorate
  // UNSAFE_componentWillMount() {
  //   if (localStorage && localStorage.getItem("tasks")) {
  //     var tasks = JSON.parse(localStorage.getItem("tasks"));
  //     this.setState({
  //       tasks: tasks
  //     });
  //   }
  // }

  // creat random id


  onToggleFrom = () => {
    // if (this.state.isShowForm && this.state.taskEditing !== null) {
    //   this.setState({
    //     isShowForm: true,
    //     taskEditing: null
    //   });
    // } else {
    //   this.setState({
    //     isShowForm: !this.state.isShowForm,
    //     taskEditing: null
    //   });
    // }
    var {itemEditting} = this.props;
    if (itemEditting && itemEditting.id !== '') {
      this.props.onOpenForm();
    }else{
      this.props.onToggleFrom();
    }

    this.props.onClearTask({
      id: '',
      name: '',
      staus: false
    });
  };

  // onCloseFrom = () => {
  //   this.setState({
  //     isShowForm: false
  //   });
  // };

  // onSubmit = data => {
  //   var { tasks } = this.state;
  //   if (data.id === "") {
  //     data.id = this.generateID();
  //     tasks.push(data);
  //   } else {
  //     //editing
  //     var index = this.findIndex(data.id);
  //     tasks[index] = data;
  //   }
  //   this.setState({
  //     tasks: tasks,
  //     taskEditing: null
  //   });
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // };

  // onUpdateStatus = id => {
  //   var { tasks } = this.state;
  //   var index = this.findIndex(id);
  //   // var index = findIndex(tasks, task => {
  //   //   return task.id === id;
  //   // });
  //   if (index !== -1) {
  //     tasks[index].status = !tasks[index].status;
  //     this.setState({
  //       tasks: tasks
  //     });
  //     localStorage.setItem("tasks", JSON.stringify(tasks));
  //   }
  // };
  // findIndex = id => {
  //   var { tasks } = this.state;
  //   var result = -1;
  //   tasks.forEach((task, index) => {
  //     if (task.id === id) {
  //       result = index;
  //     }
  //   });
  //   return result;
  // };

  // onDeleteData = id => {
  //   var { tasks } = this.state;
  //   var index = this.findIndex(id);
  //   if (index !== -1) {
  //     tasks.splice(index, 1);
  //     this.setState({
  //       tasks: tasks
  //     });
  //     localStorage.setItem("tasks", JSON.stringify(tasks));
  //   }
  //   this.onCloseFrom();
  // };

  // onShowFrom = () => {
  //   this.setState({
  //     isShowForm: true
  //   });
  // };
  // onEditData = id => {
  //   var { tasks } = this.state;
  //   var index = this.findIndex(id);
  //   var taskEditing = tasks[index];
  //   this.setState({
  //     taskEditing: taskEditing
  //   });
  //   this.onShowFrom();
  // };

  // onFilter = (filterName, filterStatus) => {
  //   filterStatus = parseInt(filterStatus, 10);
  //   this.setState({
  //     filterName: filterName,
  //     filterStatus: filterStatus
  //   });
  // };

  // onSearch = keyword => {
  //   this.setState({
  //     keyword: keyword
  //   });
  // };

  // onSort = (sortBy, sortValue) => {
  //   this.setState({
  //     sortBy: sortBy,
  //     sortValue: sortValue
  //   });
  // };

  render() {
    // var {
    //   //taskEditing,
    //   // filterName,
    //   // filterStatus,
    //   // keyword,
    //   // sortBy,
    //   // sortValue
    // } = this.state;

    var { isDisplayFrom } = this.props;
    // tasks = tasks.filter( task => {
    //   return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    // });

    // if (filterName) {
    //   tasks = tasks.filter(task => {
    //     return task.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1;
    //   });
    // }

    //   tasks = tasks.filter(task => {
    //   if (filterStatus === '-1' || filterStatus === -1) {
    //     return task;
    //   } else {
    //     return task.status === (parseInt(filterStatus, 10) === 1 ? true : false);
    //   }
    // });


    // if (keyword) {
    //   tasks = tasks.filter(task => {
    //     return task.name.toLowerCase().indexOf(keyword) !== -1;
    //   });
    // }

    // if (sortBy === "name") {
    //   tasks.sort((a, b) => {
    //     if (a.name > b.name) return sortValue;
    //     else if (a.name < b.name) return -sortValue;
    //     else return 0;
    //   });
    // } else {
    //   tasks.sort((a, b) => {
    //     if (a.status > b.status) return -sortValue;
    //     else if (a.status < b.status) return sortValue;
    //     else return 0;
    //   });
    // }

    // var elmTaskForm = isDisplayFrom === true ? (
    //   <TaskForm
    //     //onSubmit={this.onSubmit}
    //     task={taskEditing}
    //   />
    // ) : (
    //     ""
    //   );
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
        </div>
        <div className="row">
          <div
            className={isDisplayFrom ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}
          >
            <TaskForm
            />
          </div>
          <div
            className={
              isDisplayFrom
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleFrom}
            >
              <span className="fas fa-plus"></span> Thêm Công Việc
            </button>
            &nbsp;
            <Control
              // sortBy={sortBy}
              // sortValue={sortValue}
            />
            <TaskList
            />
          </div>
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

const mapDispatchToProps = (dispatch, action) => {
  return {
    onToggleFrom: () => {
      dispatch(actions.toggleFrom());
    },
    onClearTask: (task) => {
      dispatch(actions.editTask(task));
    },
    onOpenForm: () =>{
      dispatch(actions.openFrom());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
