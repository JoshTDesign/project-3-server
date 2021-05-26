const User = require('./User');
const Trip = require('./Trip');
const Activity = require('./Activity');

User.hasMany(Trip, {as: "creator"});
Trip.belongsTo(User, {as: "creator"});
Trip.belongsToMany(User, {
        through: "tripUser"
});

User.belongsToMany(Trip, {through: "tripUser"})
Activity.belongsTo(Trip);
Trip.hasMany(Activity);
User.belongsToMany(Activity, {through: "userActivity"});
Activity.belongsToMany(User, {through: "userActivity"});

User.belongsToMany(User, {as: "friend", through: "friends"});

module.exports = {User, Trip, Activity}