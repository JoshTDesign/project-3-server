const express = require('express');
const router = express.Router();
const userRoutes = require('./usersController');
const tripsRoutes = require('./tripsController');
const activitiesRoutes = require('./activitesController');
const expensesRoutes = require('./expensesController');
const accessRoutes = require('./accessController');


router.get('/', (req, res) => {
    res.send("Welcome to the Rally Travel API!");
});

router.use(userRoutes);
router.use("/api/trips", tripsRoutes);
router.use("/api/activities", activitiesRoutes);
router.use("/api/access", accessRoutes);
router.use("/api/expenses", expensesRoutes);
module.exports = router;