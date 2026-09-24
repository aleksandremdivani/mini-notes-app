"use client";
import { use, useState } from "react";
import Link from "next/link";
import { useNotes } from "./notes/notes-context";
type FormElement = HTMLInputElement | HTMLTextAreaElement;

export default function Home() {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });
  const handleChange = (e: React.ChangeEvent<FormElement>) => {
    const { name, value } = e.target;
    setNewNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
const { notes, addNote } = useNotes();
  return (
    <>
      <div>
        {notes.map((i) => {
          return (
            <Link href={`/notes/${i.id}`} key={i.id}>
              {i.title}
            </Link>
          );
        })}
      </div>
      <form className="flex flex-col">
        <input
          name="title"
          value={newNote.title}
          type="text"
          className="border w-100"
          placeholder="Enter title"
          onChange={handleChange}
        />
        <textarea
          name="content"
          value={newNote.content}
          onChange={handleChange}
          className="border w-100 h-100"
        ></textarea>
        <button
          onClick={(e) => {
            e.preventDefault();
            addNote(newNote);
            setNewNote({ title: "", content: "" });
          }}
          className="border w-100"
        >
          Add
        </button>
      </form>
    </>
  );
}
