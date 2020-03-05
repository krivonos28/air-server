
module.exports = (sequelize, DataTypes)  => {
  const Airports = sequelize.define('Airport', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  airport_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }, 
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  iata: {
    type: DataTypes.STRING,
    allowNull: false
  },
  icao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  latitude: {
    type: DataTypes.STRING,
    allowNull: false
  },
  longitude: {
    type: DataTypes.STRING,
    allowNull: false
  },
  altitude: {
    type: DataTypes.STRING,
    allowNull: false
  },
  timezone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dst: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tzDatabaseTimeZone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type_id: {
    type: DataTypes.STRING,
    allowNull: false
    },
  source_id: {
    type: DataTypes.STRING,
    allowNull: false
  },

});
return Airports
};
