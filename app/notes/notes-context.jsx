"use client";

import { createContext, useContext, useState } from "react";

const initialNotes = [
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

const NotesContext = createContext();

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState(initialNotes);

  const addNote = (note, setNote) => {
    setNotes((prev) => {
      return [
        ...prev,
        {
          ...note,
          id: Date.now().toString(),
        },
      ];
    });
    setNote({ title: "", content: "" });
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
