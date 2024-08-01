import Image from "next/image";
import campBg from "../../public/landing/camp-bg.avif";

export default function Home() {
  return (
    <main className="">
      <Image src={campBg} alt="" fill />
    </main>
  );
}
