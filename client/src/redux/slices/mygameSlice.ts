import { createSlice } from '@reduxjs/toolkit';
import type { QuestionType, ThemeType } from '../../types/mygameTypes';
import { fetchThemesThunk, validateAnswerThunk } from '../thunkActions/questionsThunkAction';

const mygameSlice = createSlice({
  name: 'mygame',
  initialState: {
    themes: [] as ThemeType[],
    currentQuestion: null as QuestionType | null,
  },

  reducers: {
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchThemesThunk.fulfilled, (state, action) => {
      state.themes = action.payload;
    });

    builder.addCase(validateAnswerThunk.fulfilled, (state, action) => {
      state.currentQuestion = action.payload;
    });
  },
});

export default mygameSlice.reducer;
