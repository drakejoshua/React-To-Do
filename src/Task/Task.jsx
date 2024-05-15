import React from "react";
import PropTypes from "prop-types";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


class Task extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div className="task">
                <input type="checkbox" className="task__task-check"
                    onClick={ this.props.onToggleDone }
                    
                    defaultChecked={
                        ( this.props.done ) ? "defaultChecked" : ""
                    }
                />

                <p className={`task__task-objective ${ 
                    ( this.props.done ) ? "task_task-done" : ""
                 }`}>
                    {
                        this.props.objective
                    }
                </p>

                
                <FontAwesomeIcon icon={faTimes} className="task__task-cancel" onClick={ this.props.onRemoveTask }/>
            </div>
        )
    }
}


Task.propTypes = {
    done: PropTypes.bool.isRequired,
    objective: PropTypes.string.isRequired,
    onRemoveTask: PropTypes.func.isRequired,
    onToggleDone: PropTypes.func.isRequired
}



export default Task;