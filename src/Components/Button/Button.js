import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

/**
 * Button wrapper
 */
class Button extends Component {
    render () {
        return (
            <Link to={ this.props.href ? '' + this.props.href /* Needed for Link to correctly parse the prop */ : '' }
                className={ "btn btn-default " + this.props.className }>
                { this.props.label }
            </Link>
        );
    }
}

export default Button;