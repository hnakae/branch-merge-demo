import Image from "next/image";
import Box from "./components/Box";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Hello</h1>
        <Box />
      </div>
    </main>
  );
}
