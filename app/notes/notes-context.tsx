// data.ts
export type Note = {
  id: string;
  title: string;
  content: string;
};

export const notes: Note[] = [
  { id: "1", title: "First note", content: "This is my first note, just testing things out." },
  { id: "2", title: "Grocery list", content: "Milk, eggs, bread, coffee." },
  { id: "3", title: "Random idea", content: "What if the notes app also had tags someday?" },
];