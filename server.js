var express = require('express');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;
var allRoutes = require('./controllers');
const cors = require("cors");

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
