/* eslint no-console: 0 */
const fs = require('fs');
const view = process.argv[2];

if (process.argv.length < 3) {
    console.log('Usage: yarn run create-view {name}');
    process.exit(1);
}

// Content
const indexFile = `import ${view} from './${view}';

export default ${view};`;

const componentFile = `import React, { Component } from 'react';

class ${view} extends Component {
    render() {
        return (
            <div></div>
        );
    }
}

export default ${view};`;

const testFile = `import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter} from 'react-router-dom';

import ${view} from './${view}';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <${view} />
        </MemoryRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
});`;

// Make the directory
fs.mkdirSync('./src/Views/' + view);

// Write the files
fs.writeFileSync('./src/Views/' + view + '/index.js', indexFile, 'utf8');
fs.writeFileSync(
    './src/Views/' + view + '/' + view + '.js',
    componentFile,
    'utf8'
);
fs.writeFileSync(
    './src/Views/' + view + '/' + view + '.test.js',
    testFile,
    'utf8'
);

console.log('Wrote 3 files...');
