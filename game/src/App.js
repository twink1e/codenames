import { Client } from 'boardgame.io/react';
import Board from './Board.js';

const Codenames = {
  setup: () => ({ cards: Array.from(Array(25)).map((_, i) => i+1) }),

  moves: {
    guessAgent: (G, ctx, id) => {
      G.cards[id] = ctx.currentPlayer;
    },
  },
};

const App = Client({ 
  game: Codenames,
  board: Board,
});

export default App;