const seedUser = require('./user-seeds');
const seedTrip = require('./trip-seeds');
const seedActivity = require('./activity-seeds');
const seedFood = require('./food-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUser();
    console.log('\n----- USERS SEEDED -----\n');

    await seedTrip();
    console.log('\n----- TRIPS SEEDED -----\n');

    await seedActivity();
    console.log('\n----- ACTIVITY SEEDED -----\n');

    await seedFood();
    console.log('\n----- FOOD SEEDED -----\n');

    process.exit(0);
};

seedAll();