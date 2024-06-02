import {useCardStore} from './card.store';

export const useCardStoreActions = () => {
  useCardStore(state => {
    state.actions;
  });
};
