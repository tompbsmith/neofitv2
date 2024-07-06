import Image from "next/image";
import { ComponentButton } from "./ComponentButton";
import { BlockNavigation } from "./BlockNavigation";
import { BlockHero } from "./BlockHero";
import { BlockAboutNeofit } from "./BlockAboutNeofit";
import { BlockDemo } from "./BlockDemo";

export default function Home() {
  return (
    <main className="w-full flex-col p-0 m-0 bg-white">
      <BlockNavigation />
      <BlockHero />
      <BlockAboutNeofit />
      <BlockDemo />
    </main>
  );
}
