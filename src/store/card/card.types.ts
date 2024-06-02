interface ICardStoreActions {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}
export interface ICardStore {
  count: number;
  actions: ICardStoreActions;
}
