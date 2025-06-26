import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Kursus {
  judul: string;
  pengajar: string;
  rating: string;
  durasi: string;
}

interface KursusState {
  data: Kursus[];
}

const initialState: KursusState = {
  data: [],
};

export const kursusSlice = createSlice({
  name: 'kursus',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Kursus[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = kursusSlice.actions;
export default kursusSlice.reducer;
