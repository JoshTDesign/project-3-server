const express = require('express');
const router = express.Router();
const userRoutes = require('./usersController');
const tripsRoutes = require('./tripsController');
const activitiesRoutes = require('./activitesController');


router.get('/', (req, res) => {
    res.send("welcome home!");
    // res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

router.use(userRoutes);
router.use("/api/trips", tripsRoutes);
router.use("/api/activities", activitiesRoutes);
module.exports = router;