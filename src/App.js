import React, { Component } from 'react';

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

import './scss/main.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;