const fs = require('fs');

if (fs.existsSync('./public')) {
  process.env.NODE_ENV = 'production';
  process.env.databaseUri = 'mongodb://pranjal007:speak1234@ds159662.mlab.com:59662/meantestapp'; // Databse URI and database name
  process.env.databaseName = 'production database: angular-2-app'; // Database name
} else {
  process.env.NODE_ENV = 'development';
  process.env.databaseUri = 'mongodb://pranjal007:speak1234@ds159662.mlab.com:59662/meantestapp'; // Databse URI and database name
  process.env.databaseName = 'development database: mean-angular-2'; // Database name
}
