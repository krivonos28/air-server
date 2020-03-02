const db = require('../index');
const axios = require('axios');

const removeApostrophe = (string) => {
    return string.replace(/\'/g, "\''");
};
const removeDoubleQoutes = (string) => {
    return string.replace(/\"/g, '');
}

const getAllInfarmations = async () => {
   const { data } = await axios.get('https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat');
  
   const airports = data.split('\n');
   airports.pop();
   const promises = airports.map(item => {
       item = removeDoubleQoutes(removeApostrophe(item));
       const arrAirpors = item.split(',');
       db.query(`INSERT INTO airports (
            airportId,
            name,
            city,
            country,
            iata,
            icao,
            latitude,
            longitude,
            altitude,
            timezone,
            dst,
            tzDatabaseTimeZone,
            type_id,
            source_id)
        VALUES 
            (
                '${arrAirpors[0]}',
                '${arrAirpors[1]}',
                '${arrAirpors[2]}',
                '${arrAirpors[3]}',
                '${arrAirpors[4]}',
                '${arrAirpors[5]}',
                '${arrAirpors[6]}',
                '${arrAirpors[7]}',
                '${arrAirpors[8]}',
                '${arrAirpors[9]}',
                '${arrAirpors[10]}',
                '${arrAirpors[11]}',
                '${arrAirpors[12]}',
                '${arrAirpors[13]}')
            ;`)
   });
  return await Promise.all(promises);
}

const createAirportsTable = async () => {
   return await db.query(
        `
        CREATE TABLE airports (
            airportId int,
            name text,
            city varchar(150),
            country varchar(100),
            iata varchar(15),
            icao varchar(4),
            latitude varchar(150) not null,
            longitude varchar(50) not null,
            altitude varchar(100),
            timezone varchar(100),
            dst varchar(10),
            tzDatabaseTimeZone varchar(50),
            type_id varchar(50),
            source_id varchar(50)
        );`,
    )
}
const createTable = async () => {
    console.log('2');

    await db.query(
        `
        DROP TABLE IF EXISTS airports;
        `
    )
    await createAirportsTable();
    await getAllInfarmations();
    console.log('hjghljk',)
}

createTable();

module.exports = {
    removeApostrophe,
    removeDoubleQoutes,
}
