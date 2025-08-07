// store/userStore.ts
import {create} from 'zustand';

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}

interface UserState {
  userData: UserData | null;
  setUser: (userData: UserData) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>(set => ({
  userData: null,
  setUser: userData => set({userData}),
  clearUser: () => set({userData: null}),
}));
