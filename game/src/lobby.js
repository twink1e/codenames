import { Lobby } from 'boardgame.io/react';
import Board from './board';
import { Codenames } from './game';

Codenames.minPlayers = 4;

const importedGames = [
  { game: Codenames, board: Board },
];

const hostname = 'localhost'

const LobbyView = () => (
  <div style={{ padding: 50 }}>
    <h1>Lobby</h1>

    <Lobby
      gameServer={`http://${hostname}:8000`}
      lobbyServer={`http://${hostname}:8000`}
      gameComponents={importedGames}
    />
  </div>
);

export default LobbyView;