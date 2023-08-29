import Image from "next/image";
import Box from "./components/Box";
import NewFeature from "./components/NewFeature";
import Feature2 from "./components/Feature2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Hello</h1>
        <Box />
        <NewFeature />
        <Feature2 />
      </div>
    </main>
  );
}
