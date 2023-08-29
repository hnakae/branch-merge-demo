import Image from "next/image";
import Box from "./components/Box";
import NewFeature from "./components/NewFeature";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Hello</h1>
        <Box />
        <NewFeature />
      </div>
    </main>
  );
}
