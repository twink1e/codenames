import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer'
import Board from './board';
import { Codenames } from './game';

const App = Client({ 
  game: Codenames,
  board: Board,
  multiplayer: SocketIO({ server: 'http://localhost:8000/' }),
});

export default App;