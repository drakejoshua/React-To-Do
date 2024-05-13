import React from "react";
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';


class Add__button extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
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


Add__button.propTypes = {
  onClick: PropTypes.func.isRequired
}


export default Add__button;