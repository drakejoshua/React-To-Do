import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

class Task_list extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        var tasksCompleted = this.props.tasksCompleted;
        var tasksToRender = this.props.tasks.filter( function( value ){
                                return ( value.done == tasksCompleted );
                            } )

        return (
            <div className={`task-list ${
                ( this.props.displayLessPadded ) ? "task-list_less-padded" :""
            }`}>
                {
                    
                    tasksToRender.map( function( value ){
                        return ( 
                            <Task objective={ value.objective } 
                                done={ value.done } key={ value.id }/>
                        )
                    } )
                }
            </div> 
        );
    }
}


Task_list.defaultProps = {
    tasksCompleted: false,
    displayLessPadded: false,
    tasks: []
}

Task_list.propTypes = {
    tasksCompleted: PropTypes.bool.isRequired,
    tasks: PropTypes.array.isRequired,
    handler: PropTypes.object,
    displayLessPadded: PropTypes.bool.isRequired
}


export default Task_list;