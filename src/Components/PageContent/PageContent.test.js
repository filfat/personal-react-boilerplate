import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter} from 'react-router-dom';

import PageContent from './PageContent';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <PageContent />
        </MemoryRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
});