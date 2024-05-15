// import react as usual
import React from 'react';

// import prop-types for proper props declaration and validation
import PropTypes from 'prop-types';


class Display_Ctn extends React.Component {
    // initialize component
    constructor( props ) {
        super( props );
    }

    render() {
        // render display_ctn
        return (
            <div className={`display-ctn ${
                    ( this.props.shouldDisplayFull ) ? "display-ctn_display-full" : ""
                }
                ${
                    ( this.props.shouldDisplayHalf ) ? "display-ctn_display-half" : ""
                }`}
            >
              <img className="display-ctn__display-icon" 
              src={ this.props.icon }/>

              <p className="display-ctn__display-text">
                { this.props.text }
              </p>
            </div>
        );
    }
}


// create default values for props
Display_Ctn.defaultProps = {
    shouldDisplayFull: false,
    shouldDisplayHalf: false,
}


// create prop-types declaration for component( Display_Ctn )
Display_Ctn.propTypes = {
    icon: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    shouldDisplayFull: PropTypes.bool.isRequired,
    shouldDisplayHalf: PropTypes.bool.isRequired,
}


export default Display_Ctn;