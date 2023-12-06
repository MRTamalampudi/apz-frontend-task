import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.scss';
import TaskCard from "./components/task-card/task-card";
import {Provider, useDispatch, useSelector} from "react-redux";
import {indexTasks} from "./service/task.service";
import {index} from "./redux/slice/tasks";
import '@mantine/dates/styles.css';
import {RootState, store} from "./redux/store";
import TaskBoard from "./pages/task-board/task-board";
import NavBar from "./components/nav-bar";
import PageHeader from "./components/header/page-header";
import Header from "./components/header";
import FilterSearchContainer from "./components/filter-search-container/filter-search-container";


function App() {

  return (
      <Provider store={store}>
    <div className="App">
      <NavBar/>
      {/*<DragAndDrop/>*/}
      <div className={"appContainer"}>
        <Header/>
        <div className={"body"}>
          <FilterSearchContainer/>
          <TaskBoard/>
        </div>
      </div>
    </div>
      </Provider>
  );
}

export default App;
