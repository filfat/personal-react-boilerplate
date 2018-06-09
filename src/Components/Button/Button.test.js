import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactTestUtils from 'react-dom/test-utils';
import { MemoryRouter} from 'react-router-dom';

import Button from './../Button';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <Button label="test1" href="/test1"/>
        </MemoryRouter>,
    div);
    
    ReactDOM.unmountComponentAtNode(div);
});

it('renders label correctly', () => {
    let component = ReactTestUtils.renderIntoDocument(
        <MemoryRouter>
            <Button label="test2" href="/test2"/>
        </MemoryRouter>,
    );
    let renderedDOM = ReactDOM.findDOMNode(component);

    expect(renderedDOM.textContent).toEqual('test2');
});

it('sets href correctly', () => {
    let component = ReactTestUtils.renderIntoDocument(
        <MemoryRouter>
            <Button label="test3" href="/test3"/>
        </MemoryRouter>,
    );
    let renderedDOM = ReactDOM.findDOMNode(component);

    expect(renderedDOM.href).toEqual('http://localhost/test3');
});