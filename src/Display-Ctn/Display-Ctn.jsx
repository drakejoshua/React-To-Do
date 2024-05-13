import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Display_Ctn extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div className={`display-ctn ${
                (
                    this.props.shouldDisplayFull
                ) ? "display-ctn_display-full" : ""
            }
            ${
                (
                    this.props.shouldDisplayHalf
                ) ? "display-ctn_display-half" : ""
            }`}>
              <FontAwesomeIcon className="display-ctn__display-icon" 
              icon={ this.props.icon }/>

              <p className="display-ctn__display-text">
                {
                    this.props.text
                }
              </p>
            </div>
        );
    }
}


Display_Ctn.defaultProps = {
    shouldDisplayFull: false,
    shouldDisplayHalf: false,
}


Display_Ctn.propTypes = {
    icon: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    shouldDisplayFull: PropTypes.bool.isRequired,
    shouldDisplayHalf: PropTypes.bool.isRequired,
}


export default Display_Ctn;