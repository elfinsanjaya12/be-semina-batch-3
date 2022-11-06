const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  urlDb: process.env.URL_MONGODB_DEV,
  jwtSecret: process.env.JWT_SECRET,
  jwtRefreshTokenSecret: process.env.JWT_SECRET_REFRESH_TOKEN,
  jwtExpiration: '1m',
  jwtRefreshTokenExpiration: '2m',
};
