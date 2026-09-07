"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import { useNotes } from "../notes-context";

export default function NotePage({ params }) {
  const { id } = use(params);
  const { notes } = useNotes();
  const currentNote = notes.find((i) => id === i.id);

  if (!currentNote) {
    return notFound();
  }

  const { title, content } = currentNote;

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}