// filepath: /birthday-greeting-app/birthday-greeting-app/src/services/auth.ts
import axios from 'axios';

const API_URL = 'https://your-api-url.com/api'; // 替换为你的API URL

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

export const logout = async () => {
  await axios.post(`${API_URL}/logout`);
};