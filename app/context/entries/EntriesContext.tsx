import { createContext } from 'react';

export type Entry = {
  id: string;
  description: string;
  status: string;
  createdAt: string;
};

type ContextProps = {
  entries: Entry[];
  saveEntriesToState: (entries: Entry[]) => void;
  updateEntriesToState: (entries: Entry[]) => void;
};

export const EntriesContext = createContext({} as ContextProps);
