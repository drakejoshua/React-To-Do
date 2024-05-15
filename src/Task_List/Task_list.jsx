// import react as usual
import React from 'react';

// import prop-types for proper props declaration and validation
import PropTypes from 'prop-types';

// import dependency component to be used
import Task from '../Task/Task';

class Task_list extends React.Component {
    // initialize component
    constructor( props ) {
        super( props );
    }

    render() {
        // pre-collate handler-functions to be used in jsx due to pontential loss of context
        var removeHandlerFunction = this.props.removeHandler;
        var markTaskAsDoneHandlerFunction = this.props.markTaskAsDoneHandler;
        var markTaskAsUnDoneHandlerFunction = this.props.markTaskAsUnDoneHandler;

        return (
            <div className={`task-list ${
                ( this.props.displayLessPadded ) ? "task-list_less-padded" :""
            }`}>
                {/* map each task passed as a prop to a new <task/> */}
                {
                    this.props.tasks.map( function( task ){
                        return ( 
                            <Task objective={ task.objective } 
                                done={ task.done } key={ task.id } 
                                onRemoveTask={ function() { removeHandlerFunction(task.id) } }
                                onToggleDone={ ( task.done ) ? 
                                    function() { markTaskAsUnDoneHandlerFunction(task.id) } : 
                                    function() { markTaskAsDoneHandlerFunction(task.id) } }/>
                        )
                    } )
                }
            </div> 
        );
    }
}


// create default values for props
Task_list.defaultProps = {
    displayLessPadded: false,
    tasks: []
}

// create prop-types declaration for component( Task_list )
Task_list.propTypes = {
    tasks: PropTypes.array.isRequired,
    removeHandler: PropTypes.func.isRequired,
    displayLessPadded: PropTypes.bool.isRequired,
    markTaskAsDoneHandler: PropTypes.func.isRequired,
    markTaskAsUnDoneHandler: PropTypes.func.isRequired
}


export default Task_list;