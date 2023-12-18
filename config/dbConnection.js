import config from './';
import mysql from 'mysql2';

const dbConnection = mysql.createPool(config.mysql);

const query = (qryStr, values) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(qryStr, values, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

export default query;