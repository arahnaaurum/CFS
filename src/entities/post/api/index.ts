import axios from 'axios';
import { Post } from '../type';

export async function getAllPosts():Promise<Post[]> {
  const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  const data = await response.data;
  return data;
}

export async function getPostById(id: number): Promise<Post> {
  const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.data;
  return data;
}

export async function searchPosts(query: string): Promise<Post[]> {
  const response = await axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?${query}`);
  const data = await response.data;
  return data;
}