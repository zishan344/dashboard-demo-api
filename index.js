const http = require("http");
const app = require("./app");
const PORT = process.env.PORT || 3306;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

/* 
host:https://slime.hostitbro.com
Port: 3306
Username- elitepro_learning-elite
Password - w6)iZ3udU?GK
db name  - elitepro_learning-elite
username: shubh
*/
