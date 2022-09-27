import HeroImage from "../assets/hero_image.png";

//import Atropos from "atropos/react";
//import "atropos/atropos.css";

const Hero = () => {
  return (
    <main className="flex h-screen items-center ">
      <section className=" text-textColor w-1/2">
        <h1 className="text-6xl font-bold">
          Hi, <br /> I'm{" "}
          <span className=" bg-clip-text  text-transparent bg-gradient-to-r from-green-200 via-green-400 to-purple-700 animate-text">
            Camilo Suarez
          </span>
        </h1>
        <p className="text-2xl pt-10 ">
          <span className=" hover:animate-spin">Frontend developer</span> and UI
          enthusiast who specializes in creating beautiful and user-friendly
          interfaces.
        </p>
      </section>
      <section className="flex justify-center w-1/2">
        <img src={HeroImage} alt="" />
      </section>
    </main>
  );
};

export default Hero;
