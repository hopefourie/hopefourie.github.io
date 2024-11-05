import { createStore } from 'zustand/vanilla';

interface GameStore {
  ickCount: number;
  score: number;
  level: number;
  incrementIck: () => void;
  incrementScore: () => void;
}
const store = createStore<GameStore>(set => ({
  ickCount: 0,
  score: 0,
  level: 1,
  incrementIck: () => set(state => ({ ickCount: state.ickCount + 1 })),
  incrementScore: () => set(state => ({ score: state.score + 50 })),
}));

export default store;
