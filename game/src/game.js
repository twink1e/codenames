export const Codenames = {
  setup: () => ({ cards: Array.from(Array(25)).map((_, i) => i+1) }),

  moves: {
    guessAgent: (G, ctx, id) => {
      G.cards[id] = ctx.currentPlayer;
    },
  },
};