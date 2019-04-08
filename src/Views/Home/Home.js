import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import PageContent from '../../Components/PageContent';

class Home extends Component {
    componentDidMount() {
        document.title = 'Home'; // FIXME:
    }

    render() {
        return (
            <div className="HomePage">
                <Helmet>
                    <title>Hello World</title>
                </Helmet>

                <PageContent className="align-center">
                    <h1>Hello World!</h1>
                </PageContent>
            </div>
        );
    }
}

export default Home;
