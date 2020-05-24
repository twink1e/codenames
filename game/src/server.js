const Server = require('boardgame.io/server').Server;
const Codenames = require('./game').Codenames;
const server = Server({ games: [Codenames] });
server.run(8000);