import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../../services/apiService';
import { ThemeType } from '../../../types/mygameTypes';

export const fetchThemeThunk = createAsyncThunk<ThemeType[]>('themes/fetchAll', async()=>{
    const themes = await apiService.getThemes();
    return themes
})
