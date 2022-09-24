import ProfileImage from "../assets/astro-profile.png";

const Profile = () => {
  return (
    <main className=" pb-20">
      <section className="border-x-2 border-t-2  border-borderWindow flex  items-center bg-headerColor h-12 rounded-t-xl">
        <h1 className="text-lg text-textColor pl-6">Astrodev's profile</h1>
      </section>
      <section className="flex backdrop-blur-md bg-windowColor bg-opacity-20 rounded-b-xl border-x-2 border-b-2  border-borderWindow">
        <section className=" w-1/3 backdrop-blur-md bg-windowColor bg-opacity-20 border-r-2  border-r-borderWindow">
          <article className=" bg-headerColor m-4 rounded-xl">
            <img
              className=" object-cover h-[470px] rounded-br-xl"
              src={ProfileImage}
              alt=""
            />
          </article>
        </section>
        <section className="w-2/3">
          <h1>info</h1>
        </section>
      </section>
    </main>
  );
};

export default Profile;
