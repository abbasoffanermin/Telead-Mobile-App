import {create} from 'zustand';
import {ICardStore} from './card.types';
export const useCardStore = create<ICardStore>(set => ({
  count: 0,
  actions: {
    increment: () => set(state => ({count: state.count + 1})),
    decrement: () => set(state => ({count: state.count - 1})),
    reset: () => set({count: 0}),
  },
}));