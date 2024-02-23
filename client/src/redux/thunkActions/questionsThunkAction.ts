import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../services/apiService';

import type { ThemeType, ValidatedData } from '../../types/mygameTypes';

export const fetchThemesThunk = createAsyncThunk<ThemeType[]>('themes/fetchAll', async () => {
  const themes = await apiService.getThemes();
  console.log('Themes from thunk', themes);
  return themes;
});

export const validateAnswerThunk = createAsyncThunk<ValidatedData>(
  'questions/validate',
  async (id: number) => {
    const isValindAnswer = await apiService.validate(id);
    return isValindAnswer;
  },
);
