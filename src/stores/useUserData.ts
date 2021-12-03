import create from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
  name: string;
  age: number;
};

export const useUserData = create<User>(
  persist(
    () => ({
      name: 'Levir',
      age: 23,
    }),
    {
      name: 'useUserData',
    }
  )
);
