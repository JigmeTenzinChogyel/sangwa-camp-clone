import Image from "next/image";
import campHeroImg from "@/../public/landing/camp-bg.avif";

export const Landing: React.FC = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <h4 className="text-2xl">The Luxury Tented</h4>
      <h1 className="text-6xl">Sangwa Camp</h1>
      <h5 className="text-xl mt-4">
        Into the deepest, most secluded regions of Bhutan
      </h5>
      <Image
        src={campHeroImg}
        fill
        quality={100}
        placeholder="blur"
        alt="Bhutan’s Boutique Luxury Travel"
        className="hidden lg:block absolute inset-0 -z-10"
      />
    </section>
  );
};

Landing.displayName = "Landing";
