import { create } from "zustand";

interface ResearchRunStore {
  runningCount: number;
  start: () => void;
  stop: () => void;
}

export const useResearchRunStore = create<ResearchRunStore>((set) => ({
  runningCount: 0,
  start: () => set((state) => ({ runningCount: state.runningCount + 1 })),
  stop: () =>
    set((state) => ({
      runningCount: Math.max(0, state.runningCount - 1),
    })),
}));
