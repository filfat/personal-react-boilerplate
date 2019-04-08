import React, { Component } from 'react';

import './PageContent.css';

class PageContent extends Component {
    render() {
        return (
            <div className={`PageContent ${this.props.className || ''}`}>
                {this.props.children}
            </div>
        );
    }
}

export default PageContent;
