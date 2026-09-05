import Image from "next/image";
import { notes } from "./notes/notes-context";
import Link from "next/link";
export default function Home() {
  return (
   <div>
    {notes.map((i) => {
      return (
        <Link href={`/notes/${i.id}`} key={i.id}>{i.title}</Link>
      )
    })}
   </div>
  );
}
