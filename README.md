# airline-backend


The http-status-codes package is a small and very useful Node.js library to manage HTTP status codes cleanly instead of hardcoding numbers like 200, 404, etc.

The dotenv package is used in Node.js to load environment variables from a .env file into process.env.

API versioning 
node-watch
npx nodemon src/index.js
why api/v1/.... why api ?
express router 
windston
ORM AND ODM 
sequelize & driver
sequelize cli - github repo
development test production environment

npm install sequelize-cli --save-dev

npx sequelize db:create
npx sequelize model:generate --name airplane --attribute modelNumber:string,capacity:integer
npx sequelize db:migrate
npx sequelize seed:generate --name add-airplanes
npx  Sequelize db:seed:all



mysql -u root -p
show databases;
use airline
desc airplanes


`src` → Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate tests folder)

Lets take a look inside the `src` folder

- `config` → In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.

- `routes` → In the routes folder, we register a route and the corresponding middleware and controllers to it.

- `middlewares` → they are just going to intercept the incoming requests where we can write our validators, authenticators etc.

- `controllers` → they are kind of the last middlewares as post them you call your business layer to execute the business logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in cont






