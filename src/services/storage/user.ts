export function getStoredUserName(): string {
  return localStorage.getItem('@front:username') || '';
}

export function setStoredUserName(username: string) {
  localStorage.setItem('@front:username', username);
}
