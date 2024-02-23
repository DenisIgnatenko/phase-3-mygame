import type { AxiosInstance } from 'axios';
import axios from 'axios';
import type { TodoType } from '../types/todoTypes';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BASEURL}`,
});

class ApiService {
  constructor(private readonly apiInstance: AxiosInstance) {}

  public getTodos(): Promise<TodoType[]> {
    return this.apiInstance.get<TodoType[]>('/todo').then((res) => res.data);
  }

  public deleteTodo(id: number): Promise<void> {
    return this.apiInstance.delete(`/todo/${id}`);
  }

  public changeTodoStatus(id: number): Promise<TodoType> {
    return this.apiInstance.put<TodoType>(`/todo/${id}`).then((res) => res.data);
  }
}

export default new ApiService(api);
