const axios = require('axios');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const { data } = await axios.get('https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat');
     
    const removeApostrophe = (string) => {
      return string.replace(/\'/g, "\''");
  };
  const removeDoubleQoutes = (string) => {
      return string.replace(/\"/g, '');
  }

  
  
  const airports = data.split('\n');
  airports.pop();
  // console.log(airports)
  const body = airports.reduce((airport, item) => {
      item = removeDoubleQoutes(removeApostrophe(item));
      const arrAirpors = item.split(',');
      return [
        ...airport,
        {
          airport_id:         arrAirpors[0],
          name:               arrAirpors[1],
          city:               arrAirpors[2],
          country:            arrAirpors[3],
          iata:               arrAirpors[4],
          icao:               arrAirpors[5],
          latitude:           arrAirpors[6],
          longitude:          arrAirpors[7],
          altitude:           arrAirpors[8],
          timezone:           arrAirpors[9],
          dst:                arrAirpors[10],
          tzDatabaseTimeZone: arrAirpors[11],
          type_id:            arrAirpors[12],
          source_id:          arrAirpors[13],
        },
      ]
  }, []);

   
   
    return queryInterface.bulkInsert('Airports', body, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Airports', null, {});
  }
};