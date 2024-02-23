import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../../services/apiService';
import type { ThemeType } from '../../../types/mygameTypes';

export const fetchThemesThunk = createAsyncThunk<ThemeType[]>('themes/fetchAll', async () => {
  const themes = await apiService.getThemes();
  return themes;
});
