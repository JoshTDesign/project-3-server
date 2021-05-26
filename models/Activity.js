const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const moment = require("moment");

class Activity extends Model {}

Activity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    activityName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reservation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    activityUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cost: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    activity_date: {
      type: DataTypes.DATEONLY,
      get: function () {
        return moment(this.getDataValue("reservation_date"))
        .format("ll");
      },
    },
    start_time: {
      type: DataTypes.TIME,
      get: function () {
        return moment(
          this.getDataValue("start_time"))
          .format("hh:mm A");
      },
    },
    end_time: {
      type: DataTypes.TIME,
      get: function () {
        return moment(
          this.getDataValue("end_time"))
          .format("hh:mm A");
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscore: true,
    modelName: "activity",
  }
);

module.exports = Activity;
