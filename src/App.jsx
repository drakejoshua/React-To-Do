import React from 'react';
import './App.css';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


import Add__button from './Add_button/Add_button';
import Display_Ctn from './Display-Ctn/Display-Ctn';
import Task_list from './Task_List/Task_list';



class App extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      uiState: {
        isFirstTimeUser: false,
        isThereAnyCreatedTasks: true,
        isSearchInputFocused: false,
        isThereAnyCompletedTasks: false
      },
      searchTerm: "",
      searchStatus: "not-found",
      taskData: [
        {
          id: 1,
          objective: "go brush",
          done: true
        },
        {
          id: 2,
          objective: "flatten up",
          done: false
        },
        {
          id: 3,
          objective: "mow the lawn",
          done: false
        },
        {
          id: 4,
          objective: "pay bills",
          done: true
        },
        {
          id: 5,
          objective: "think out loud",
          done: false
        },
        {
          id: 6,
          objective: "saying??",
          done: false
        },
        {
          id: 7,
          objective: "watch films",
          done: true
        },
        {
          id: 8,
          objective: "sleep till tomorrow",
          done: true
        }
      ]
    }


    this.addTask = this.addTask.bind( this );
  }

  addTask() {
    var newTaskObjective = prompt("Enter the objective for the new task:");
    var newTaskId = this.state.taskData.length;

    var newTaskData = this.state.taskData
    newTaskData.push(
      {
        id: newTaskId,
        objective: newTaskObjective,
        done: false
      }
    );

    if ( newTaskObjective != "" ) {
      this.setState( newTaskData );
    }
  }
  



  render() {
    return ( 
      <div className="app-ctn">
        <h1 className="app-ctn__app-heading">
          Your ToDo
        </h1>

        <div className="tasks-ctn">

          { ( !this.state.uiState.isFirstTimeUser ) &&
            <>
              {/* your created tasks section */}
              <h2 className="app-ctn__app-sub-heading">
                your created tasks
              </h2>

              <div className="app-ctn__app-divider"></div>

              { 
                ( this.state.uiState.isThereAnyCreatedTasks ) && 
                <>
                  <input type="text"className="app-ctn__search-input"
                    placeholder='search' />

                  { 
                    ( !this.state.uiState.isSearchInputFocused &&
                      this.state.searchTerm == ""
                     ) && 
                    <Task_list tasks={this.state.taskData} />
                  }

                  { 
                    ( this.state.uiState.isSearchInputFocused &&
                      this.state.searchTerm == ""
                     ) && 

                    <Display_Ctn icon={ faArrowLeft } text={
                      "Enter a text to search for"
                    } shouldDisplayHalf={true}/>
                  }
                  
                  { 
                    ( this.state.uiState.isSearchInputFocused &&
                      this.state.searchTerm != "" && 
                      this.state.searchStatus == "not-found"
                     ) && 

                    <Display_Ctn icon={ faArrowLeft } text={
                      `No task with the term 
                        "${ this.state.searchTerm }" were found`
                    } shouldDisplayHalf={true}/>
                  }
                  
                  { 
                    ( this.state.uiState.isSearchInputFocused &&
                      this.state.searchTerm != "" && 
                      this.state.searchStatus == "found"
                     ) && 

                    <Display_Ctn icon={ faArrowLeft } text={
                      `No task with the term 
                        "${ this.state.searchTerm }" were found`
                    } shouldDisplayHalf={true}/>
                  }
                </>
              }

              { 
                ( !this.state.uiState.isThereAnyCreatedTasks ) && 
                <Display_Ctn icon={ faArrowLeft } text={
                  "Hello there!, you haven't created any tasks yet"
                }/>
              }


              {/* your completed tasks section */}

              { 
                ( this.state.uiState.isThereAnyCompletedTasks 
                  && !this.state.uiState.isSearchInputFocused
                ) && 
                  <>
                    <h2 className="app-ctn__app-sub-heading app-ctn_less-margined">
                      your completed tasks
                    </h2>

                    <div className="app-ctn__app-divider"></div>

                    <Task_list tasks={ this.state.taskData } tasksCompleted={true} 
                      displayLessPadded={true}/>
                  
                  </>
              }
            </> 
          }

          {
            ( this.state.uiState.isFirstTimeUser ) &&
            <Display_Ctn icon={ faArrowLeft } text={
              `Hello! Welcome! Create your very first task. 
              Click the add task button below`
            } shouldDisplayFull={ true }/>
          }

        </div>

        <div className="app-ctn__app-divider app-ctn_invisible"></div>

        <Add__button onClick={ this.addTask }/>
      </div>
    )
  }
}

export default App;
