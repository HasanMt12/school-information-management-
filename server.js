const http = require("http");
const app = require("./app/app");
// database connection
require("./db/dbConnect");
// create server
const port = process.env.PORT || 3000;
const server = http.createServer(app);
// listening port
server.listen( port , () => {
  console.log(`Server is running on port ${port}`);
});
