// import react as usual
import React from 'react';
import './App.css';

// import image( illustration ) assets to use for display ctn's in the page
import confettiBall from "./confetti-ball.svg";
import layersPlus from "./layers-plus.svg";
import searchCross from "./search-cross.svg";
import searchFolder from "./search-folder.svg";

// import dependency components to be used
import Add__button from './Add_button/Add_button';
import Display_Ctn from './Display-Ctn/Display-Ctn';
import Task_list from './Task_List/Task_list';



class App extends React.Component {
  // initialize component
  constructor( props ) {
    super( props );

    // initialize state
    this.state = {
      uiState: {
        isSearchInputFocused: false
      },
      searchTerm: "",
      searchStatus: "not-found",
      taskData: []
    };

    // bind "this" to all component functions
    this.addTask = this.addTask.bind( this );
    this.removeTask = this.removeTask.bind( this );
    this.markTaskAsDone = this.markTaskAsDone.bind( this );
    this.markTaskAsUnDone = this.markTaskAsUnDone.bind( this );
    this.handleInputBlurFromCancelButton = this.handleInputBlurFromCancelButton.bind( this );
    this.handleInputFocus = this.handleInputFocus.bind( this );
    this.handleInputValue = this.handleInputValue.bind( this );
  }

  // fetch data from localStorage after component has been 
  // mounted to the DOM
  componentDidMount() {
    var taskData = [];

    // retrieve user task data from localStorage
    var tasksInBrowserStorage = ( localStorage.getItem("react-todo-tasks") == "" || localStorage.getItem("react-todo-tasks") == null ) ? 
      [] : JSON.parse( localStorage.getItem("react-todo-tasks") );
    
    // check if user has any created tasks in storage, if true, 
    // set application task data to user stored task data and update
    // application state
    if ( tasksInBrowserStorage != [] || tasksInBrowserStorage != null ) {

      taskData = tasksInBrowserStorage;

      this.setState({
        uiState: {
          isSearchInputFocused: false
        },
        searchTerm: "",
        searchStatus: "not-found",
        taskData: taskData
      })
    }
  }


  // addTask() - function: to add new task to Todo list by prompting user
  // for new task objective and then adding it to app's task data
  addTask() {
    // prompt user for new task objective
    var newTaskObjective = prompt("Enter the objective for the new task:");
    var newTaskId = ( this.state.taskData.length ) + 1;

    // retrieve local copy of task data from app's state
    var newTaskData = this.state.taskData

    // add new task( with objective ) to local copy of task data
    newTaskData.push(
      {
        id: newTaskId,
        objective: newTaskObjective,
        done: false
      }
    );

    // check if new task objective not empty, if so, update state with new task added
    // also save app's task data to localstorage
    if ( newTaskObjective != "" ) {
      this.setState({
        taskData: newTaskData 
      });

      localStorage.setItem( "react-todo-tasks", JSON.stringify( this.state.taskData ) );
    }
  }

  // removeTask() - function: to remove task from Todo list by using
  // the given task id, generating task actual index in template task data array
  // and then splicing( removing ) it and update to app's task data
  removeTask( taskIdToDelete ) {
    // template task data from app's state
    var newTaskData = this.state.taskData;
    
    // find task index in array( template task data ) using it's task.id
    var indexInArray = newTaskData.findIndex( 
                        function( task ) {
                          return ( task.id == taskIdToDelete );
                        }
                      );

    // destructively delete the task from template task data
    // as far as the task index is valid, then update app's state
    // with new task data and also localStorage
    if ( indexInArray != -1 ) {
      // destructive deletion off task using index in array
      newTaskData.splice( indexInArray, 1 );

      // update state
      this.setState({
        taskData: newTaskData
      });

      // update localStorage
      localStorage.setItem( "react-todo-tasks", JSON.stringify( this.state.taskData ) );
    }
  }

  // markTaskAsDone() - function: to mark task in Todo list as done by using
  // the given task id, generating task actual index in template task data array
  // and then modifying it as done and update to app's task data
  markTaskAsDone( taskIdToMarkDone ) {
    // template task data from app's state
    var templateTaskData = this.state.taskData;

    // find task index in array( template task data ) using it's task.id
    var indexInArray = templateTaskData.findIndex(
      function( task ) {
        return ( task.id ==  taskIdToMarkDone );
      }
    )

    // directly modify the task as done from template task data
    // as far as the task index is valid, then update app's state
    // with new task data and also localStorage 
    if ( indexInArray != -1 ) {
      // modify task as done
      templateTaskData[ indexInArray ].done = true;

      // update app's state with changed template task data
      this.setState({
        taskData: templateTaskData
      })

      // update localStorage with app's task data
      localStorage.setItem( "react-todo-tasks", JSON.stringify( this.state.taskData ) );
    }
  }
  
  // markTaskAsUnDone() - function: to mark task in Todo list as un-done by using
  // the given task id, generating task actual index in template task data array
  // and then modifying it as un-done and update to app's task data
  markTaskAsUnDone( taskIdToMarkUnDone ) {
    // template task data from app's state
    var templateTaskData = this.state.taskData;

    // find task index in array( template task data ) using it's task.id
    var indexInArray = templateTaskData.findIndex(
      function( task ) {
        return ( task.id == taskIdToMarkUnDone );
      }
    )

    // directly modify the task as un-done from template task data
    // as far as the task index is valid, then update app's state
    // with new task data and also localStorage 
    if ( indexInArray != -1 ) {
      // modify task as un-done
      templateTaskData[ indexInArray ].done = false;

      // update app's state with changed template task data
      this.setState({
        taskData: templateTaskData
      })

      // update localStorage with app's task data
      localStorage.setItem( "react-todo-tasks", JSON.stringify( this.state.taskData ) );
    }
  }

  // handleInputBlurFromCancelButton() - function: to cancel searching by blurring 
  // ( remove focus ) from the search input and resetting app's search state
  handleInputBlurFromCancelButton( ) {
    // reset app's search state
    this.setState({
      uiState: {
        isSearchInputFocused: false
      },
      searchStatus: "not-found",
      searchTerm: ""
    });

    // remove focus from active( focused ) element in document
    // i.e. searchInput as that point
    window.document.activeElement.blur();
  }
  
  // handleInputFocus() - function: to initialize searching by initializing 
  // app's search state thereby initializing app's search display UI
  handleInputFocus( ) {
    // initialize app's search state
    this.setState({
      uiState: {
        isSearchInputFocused: true
      }
    })
    
  }
  
  // handleInputValue() - function: to handle app search operations on app's task data
  // by handling search-input state/value, performing searches on app's task data
  // and updating app's search state if neccessary to make sure the right UI is displayed
  handleInputValue( event ) {
    // retrieve search term from search-input
    // ( i.e. search-input is the event's target )
    var searchTerm = event.target.value;
    
    // reset app's search state before performing search on app's task data
    // ( this is done due to repeated calls as user inputs a search-term continuously in
    //  the search-input triggering multiple function calls but can end up with stale 
    // search state leading to bugs in the app )
    this.setState({
      searchStatus: "not-found",
      searchTerm: searchTerm
    })
    
    // perform search directly on app's task data and report
    // if search-term was found
    var searchResult = this.state.taskData.some(
      function( task ) {
        return ( task.objective.includes( searchTerm ) );
      }
    )
    
    // update app's search state( search-status ) as far as search-term was
    // found
    if ( searchResult ) {
      this.setState({
        searchStatus: "found"
      })
    }
  }

  render() {
    // pre-collated search-term for use in jsx
    var searchTerm = this.state.searchTerm;

    return ( 
      <div className="app-ctn">
        {/* app title */}
        <h1 className="app-ctn__app-heading">
          Your ToDo
        </h1>

        {/* app content container */}
        <div className="tasks-ctn">

          {/* using conditional rendering to check if user has any tasks already created
          in localStorage on app's load and display appropriate UI according to the check */}
          {
            ( this.state.taskData.length == 0 ) &&

            // user has no tasks created in localStorage
            <Display_Ctn icon={ layersPlus } text={
              `Hello! Welcome! Create your very first task. 
              Click the add task button below`
            } shouldDisplayFull={ true }/>
          }

          { ( this.state.taskData.length != 0 ) &&

            // user has no tasks created in localStorage
            <>

              {/* your created tasks section */}
              <h2 className="app-ctn__app-sub-heading">
                your created tasks
              </h2>

              <div className="app-ctn__app-divider"></div>
 
              {/* search-input and cancel-btn section/form */}
              <form onSubmit={ function(event){ event.preventDefault() } } className="search-form">

                {/* search input */}
                <input type="text"className="search-form__search-input"
                  placeholder='search' onFocus={this.handleInputFocus}
                  onInput={this.handleInputValue} value={this.state.searchTerm}
                />

                {/* cancel-btn - conditionally rendered based on whether search-input is focused or not */}
                <button type="button" className={`search-form__cancel-search-btn
                  ${ ( !this.state.uiState.isSearchInputFocused ) ? "search-form_btn-hidden" : "" }
                `} onClick={ this.handleInputBlurFromCancelButton }>
                  cancel
                </button>
              </form>

              <>
                {/* using conditional rendering to check app's search state
                 and display appropriate UI according to the check */}
                {
                  ( this.state.uiState.isSearchInputFocused )
                  ?
                    ( this.state.searchTerm != "" )
                    ?
                      ( this.state.searchStatus == "not-found" )
                      ?
                        // user currently typing into search-input but no
                        // tasks are found for that search-term
                        <Display_Ctn icon={ searchCross } text={
                            `No task with the objective 
                              "${ this.state.searchTerm }" was found`
                          } shouldDisplayHalf={true}
                        />
                      :
                        // user currently typing into search-input and some
                        // tasks were found for that search-term
                        <Task_list tasks={ 
                            this.state.taskData.filter( function( task ) {
                                return ( task.objective.includes( searchTerm ) );
                              }
                            )} removeHandler={ this.removeTask }
                          markTaskAsDoneHandler={ this.markTaskAsDone }
                          markTaskAsUnDoneHandler={ this.markTaskAsUnDone }
                        />
                    :
                      // user only focused the search-input but hasn't typed
                      // anything( search-term ) into it
                      <Display_Ctn icon={ searchFolder } text={
                      "Enter an objective to search for"
                      } shouldDisplayHalf={true}/>
                  :
                    // user not currently using/focusing the search-input
                    <>

                      {/* check if user has completed all their task, if so, display appropriate UI */}
                      {
                        ( this.state.taskData.some( function( task ) {
                            return ( task.done == false );
                          }) == false ) &&

                        // appropriate display UI
                        <Display_Ctn icon={ confettiBall } text={
                            "Hurray! You're done with all your task"
                        } shouldDisplayHalf={true}/>
                      }

                      {/* check if user has not completed all their task, if so, display 
                      list of un-completed tasks */}
                      {
                        ( this.state.taskData.some( function( task ) {
                            return ( task.done == false );
                          }) ) &&

                        // list of uncompleted tasks 
                        <Task_list tasks={ 
                            this.state.taskData.filter( function( task ) {
                              return ( task.done == false )
                            })
                          } removeHandler={ this.removeTask } 
                          markTaskAsDoneHandler={ this.markTaskAsDone }
                          markTaskAsUnDoneHandler={ this.markTaskAsUnDone }
                        />
                      }

                      {/* check if user has any completed tasks, if so, display 
                      list of completed tasks */}
                      {
                        ( this.state.taskData.some( function( task ) {
                            return ( task.done );
                          }) ) && 
                        <>
                          <h2 className="app-ctn__app-sub-heading app-ctn_less-margined">
                            your completed tasks
                          </h2>

                          <div className="app-ctn__app-divider"></div>
                          
                          {/* list of completed tasks */}
                          <Task_list tasks={ 
                                this.state.taskData.filter( function( task ) {
                                  return ( task.done )
                                })
                              }
                            displayLessPadded={true} removeHandler={ this.removeTask }
                            markTaskAsDoneHandler={ this.markTaskAsDone }
                            markTaskAsUnDoneHandler={ this.markTaskAsUnDone }
                          />
                        </>
                      }
                    </>
                }
              </>
            </> 
          }

        </div>

        <div className="app-ctn__app-divider app-ctn_invisible"></div>

        {/* app's add button - to prompt user to enter 
        new task objective and create new task */}
        <Add__button onClick={ this.addTask }/>
      </div>
    )
  }
}

export default App;
