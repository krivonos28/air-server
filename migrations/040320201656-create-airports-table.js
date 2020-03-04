module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Airports', {
      airport_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      iata: {
        type: Sequelize.STRING,
        allowNull: false
      },
      icao: {
        type: Sequelize.STRING,
        allowNull: false
      },
    latitude: {
      type: Sequelize.STRING,
      allowNull: false
    },
      longitude: {
        type: Sequelize.STRING,
        allowNull: false
      },
      altitude: {
        type: Sequelize.STRING,
        allowNull: false
      },
      timezone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dst: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tzDatabaseTimeZone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      source_id: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Airports');
  }
}