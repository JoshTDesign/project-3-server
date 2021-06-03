const User = require('./User');
const Trip = require('./Trip');
const Activity = require('./Activity');
const Expense = require('./Expense');

User.hasMany(Trip, {as: "creator"});
Trip.belongsTo(User, {as: "creator"});
Trip.belongsToMany(User, {
        through: "tripUser",
        as: "Trips"
});

User.belongsToMany(Trip, {through: "tripUser"})
Activity.belongsTo(Trip);
Trip.hasMany(Activity);
User.belongsToMany(Activity, {through: "userActivity"});
Activity.belongsToMany(User, {through: "userActivity"});
User.hasMany(Expense);
Expense.belongsTo(User);
Expense.belongsTo(Trip);
Trip.hasMany(Expense);

User.belongsToMany(User, {as: "friend", through: "friends"});

module.exports = {User, Trip, Activity,Expense};