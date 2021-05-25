const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const moment = require("moment");

class Food extends Model {}

Food.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    restaurantName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cuisine: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    restaurantUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cost: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    reservation: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    reservation_date: {
        type: DataTypes.DATEONLY,
      get: function () {
        return moment(this.getDataValue("reservation_date"))
        .format("ll");
      },
    },
    reservation_time: {
      type: DataTypes.TIME,
      get: function () {
        return moment(
          this.getDataValue("reservationTime"))
          .format("hh:mm A");
      },
    },
    trip_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "trip",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscore: true,
    modelName: "food",
  }
);

module.exports = Food;
