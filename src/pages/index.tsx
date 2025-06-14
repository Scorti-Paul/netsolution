import Image from "next/image";
import Hero from "./hero";
import Problem from "./problem";
import Proposed from "./proposed";
import Technologies from "./technologies";
import Transformation from "./transformation";



export default function Home() {
  return (
    <div>
      <main className="">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
        />
        <Hero />
        <Problem />
        <Proposed />
        <Technologies />
        <Transformation />
      </main>

    </div>
  );
}
