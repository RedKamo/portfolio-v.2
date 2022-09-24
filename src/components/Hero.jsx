import HeroImage from "../assets/hero_image.png";

//import Atropos from "atropos/react";
//import "atropos/atropos.css";

const Hero = () => {
  return (
    <main className="flex h-screen items-center">
      <section className=" text-textColor w-1/2">
        <h1 className="text-6xl font-bold">
          Hi 👋 <br /> I'm Camilo Suarez
        </h1>
        <p className="text-2xl pt-10">
          Frontend developer and UI enthusiast based in Bogota,Co.
        </p>
      </section>
      <section className="flex justify-center w-1/2">
        <img src={HeroImage} alt="" />
      </section>
    </main>
  );
};

export default Hero;
