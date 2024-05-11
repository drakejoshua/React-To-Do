import React from 'react';
import './App.css';
import './Add_button/Add_button'
import Add__button from './Add_button/Add_button';
import Task from './Task/Task';

class App extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return ( 
      <div className="app-ctn">
        <h1 className="app-ctn__app-heading">
          Joshua&#0027;s To-Do List {/* watch out for unicode in jsx, it defines the apostrophe */}
        </h1>

        <div className="app-ctn__app-divider"> </div>

        <h2 className="app-ctn__app-sub-heading">
          your created tasks
        </h2>

        <input type="text"className="app-ctn__search-input" />

        <div className="task-list">

          <Task name={"buy toothpaste"} done={ false }/>

          <Task name={"buy toothpaste"} done={ false }/>

          <Task name={"buy toothpaste"} done={ false }/>

          <Task name={"buy toothpaste"} done={ false }/>

          <Task name={"buy toothpaste"} done={ false }/>

          <Task name={"buy toothpaste"} done={ false }/>
        </div>

        <div className="app-ctn__app-divider"> </div>

        <Add__button/>
      </div>
    )
  }
}

export default App
