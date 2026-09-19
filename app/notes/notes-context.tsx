"use client";

import { createContext, useContext, useState } from "react";
type Note = {
  id: string;
  title: string;
  content: string;
};
const initialNotes: Array<Note> = [
  {
    id: "1",
    title: "First note",
    content: "This is my first note, just testing things out.",
  },
  { id: "2", title: "Grocery list", content: "Milk, eggs, bread, coffee." },
  {
    id: "3",
    title: "Random idea",
    content: "What if the notes app also had tags someday?",
  },
];

type NotesContextType = {
  notes: Array<Note>;
  addNote: (note: Note) => void;
};
const NotesContext = createContext<NotesContextType | undefined>(undefined);
export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState(initialNotes);

  const addNote = (note: Omit<Note, "id">) => {
    setNotes((prev) => {
      return [
        ...prev,
        {
          ...note,
          id: Date.now().toString(),
        },
      ];
    });
    
  };

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}
