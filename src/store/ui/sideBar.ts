import { create } from 'zustand'

interface State {
    toggleSideMenu : () => void;
    state : boolean;
}

export const useStore = create<State>()((set) => ({
   state : false,
   toggleSideMenu: () => set((prev) => ({ state: !prev.state })),
}));
