// store/progressStore.ts
import { create } from "zustand";

type ProgressState = {
  topikProgress: number;
  quizProgress: number;
  score: number;
  setTopikProgress: (val: number) => void;
  setQuizProgress: (val: number) => void;
  setScore: (val: number) => void;
};

export const useProgressStore = create<ProgressState>((set) => ({
  topikProgress: 0,
  quizProgress: 0,
  score: 0,
  setTopikProgress: (val) => set({ topikProgress: val }),
  setQuizProgress: (val) => set({ quizProgress: val }),
  setScore: (val) => set({ score: val }),
}));