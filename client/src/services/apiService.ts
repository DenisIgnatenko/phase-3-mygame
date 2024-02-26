import type { AxiosInstance } from 'axios';
import axios from 'axios';
import type { ThemeType, UserAnswer, ValidatedData } from '../types/mygameTypes';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BASEURL}`,
});

class ApiService {
  constructor(private readonly apiInstance: AxiosInstance) {}

  public getThemes(): Promise<ThemeType[]> {
    return this.apiInstance.get<ThemeType[]>('/themes').then((res) => res.data);
  }

  public validate(id: number): Promise<ValidatedData> {
    return this.apiInstance.post<ValidatedData>(`/validate/${id}`).then((res) => res.data);
  }
}

export default new ApiService(api);
