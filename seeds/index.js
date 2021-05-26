const seedUser = require('./user-seeds');
const seedTrip = require('./trip-seeds');
const seedActivity = require('./activity-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUser();
    console.log('\n----- USERS SEEDED -----\n');

    const seedTrips = await seedTrip();
    seedTrips.forEach(async trip => {
            await trip.addUsers([1,2, 3, 4]);
        });
    console.log('\n----- TRIPS SEEDED -----\n');

    await seedActivity();
    console.log('\n----- ACTIVITY SEEDED -----\n');


    //process.exit(0);
};

seedAll();