//server file

const link = require('./config/connection.js');
const routes = require('./routes');
const exp = require('express');
// const sesh = require('express-session');
const bars = require('express-handlebars');
// const store = require('connect-session-sequelize')(sesh.store);
console.log(link);

const app = exp();
app.use(exp.json());
app.use(exp.urlencoded({ extended: true }));
app.use(routes);

link.sync({ force: true }).then(() => {
    app.listen(3001, () => {
        console.log('app listening');
    });
});
