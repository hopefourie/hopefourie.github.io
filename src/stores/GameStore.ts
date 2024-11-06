import { createStore } from 'zustand/vanilla';

interface GameStore {
  ickCount: number;
  score: number;
  level: number;
  incrementIck: () => void;
  incrementScore: () => void;
  incrementLevel: () => void;
  reset: () => void;
}

const initialState = {
  ickCount: 0,
  score: 0,
  level: 10,
};

const store = createStore<GameStore>(set => ({
  ...initialState,
  incrementIck: () => set(state => ({ ickCount: state.ickCount + 1 })),
  incrementScore: () => set(state => ({ score: state.score + 50 })),
  incrementLevel: () => set(state => ({ level: state.level + 1 })),
  reset: () => set({ ...initialState }),
}));

export default store;
