'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = 3001;

const app = (0, _express2.default)();
const dev = process.env.NODE_ENV === 'development';

app.use('/graphql', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use('/graphql', (0, _expressGraphql2.default)({
    schema: _schema2.default,
    graphiql: true
}));

const server = app.listen(port, () => {
    console.log(`\n\nExpress listen at http://localhost:${port} \n`);
});