import api from './api';

export async function getUser(user: string) {
  return api.get(`users/${user}`);
}
