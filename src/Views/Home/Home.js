import React, { Component } from 'react';

class Home extends Component {
    componentDidMount() {
        document.title = "Home"; // FIXME:
    }

    render() {
        return (
			<div className="home align-center">
                <h1>Hello World!</h1>
			</div>
        );
    }
}

export default Home;
