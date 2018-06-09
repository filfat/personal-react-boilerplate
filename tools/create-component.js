/* eslint no-console: 0 */
const fs = require('fs');
const component = process.argv[2];

if (process.argv.length < 3) {
    console.log('Usage: yarn run create-component {name}');
    process.exit(1);
}

// Content
const indexFile = `import ${component} from './${component}';

export default ${component};`;

const componentFile = `import React, { Component } from 'react';

class ${component} extends Component {
    render() {
        return (
			<div></div>
        );
    }
}

export default ${component};`;

const testFile = `import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter} from 'react-router-dom';

import ${component} from './${component}';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <${component} />
        </MemoryRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
});`;

// Make the directory
fs.mkdirSync('./src/Components/' + component);

// Write the files
fs.writeFileSync('./src/Components/' + component + '/index.js', indexFile, 'utf8');
fs.writeFileSync('./src/Components/' + component + '/' + component + '.js', componentFile, 'utf8');
fs.writeFileSync('./src/Components/' + component + '/' + component + '.test.js', testFile, 'utf8');

console.log('Wrote 3 files...');