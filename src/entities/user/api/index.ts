import axios from 'axios';
import { User } from '../type';

export async function getUserById(id: number): Promise<User> {
  const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.data;
  return data;
}