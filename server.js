// const path = require('path');
// const express = require('express');
// const session = require('express-session');
// const allRoutes = require('./controllers');
// const cors = require('cors');
// //const helpers = require('./utils/helpers');

// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const app = express();
// const PORT = process.env.PORT || 3001;

// // const sess = {
// //   secret: 'Super secret secret',
// //   cookie: {},
// //   resave: false,
// //   saveUninitialized: true,
// //   store: new SequelizeStore({
// //     db: sequelize
// //   })
// // };

// app.use(session(sess));
// app.use(routes);
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening on PORT 3001'));
// });


var express = require('express');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;
var allRoutes = require('./controllers');
const cors = require("cors")

// Requiring our models for syncing
var sequelize = require('./config/connection.js');
const {User} = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//LOCAL
// app.use(cors());

//DEPLOYED
app.use(cors());

app.use('/',allRoutes);



sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log('App listening on PORT ' + PORT);
    });
});