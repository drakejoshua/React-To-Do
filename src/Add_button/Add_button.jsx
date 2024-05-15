// import react as usual
import React from "react";

// import prop-types for proper props declaration and validation
import PropTypes from 'prop-types';

// import font-awesome icon for icon usage 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';


class Add__button extends React.Component {
  // initialize component
  constructor( props ) {
      super( props );
  }

  render() {
    // render "add" button
    return (
      <button className="add-button" onClick={ this.props.onClick }>
        <FontAwesomeIcon icon={faAdd} className='add-button__button-icon'/>

        <span className="add-button__button-text">
          add task
        </span>
      </button>
    )
  }
}


// create prop-types declaration for component( Add_button )
Add__button.propTypes = {
  onClick: PropTypes.func.isRequired
}


export default Add__button;