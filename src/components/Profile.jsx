import ProfileImage from "../assets/astro-profile.png";
import QR from "../assets/qr.png";

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
        <section className="w-2/3  m-4 flex gap-4 ">
          {/*   <h4 className="outline outline-offset-2 outline-windowColor text-slate-200 font-bold">
            BIO:
          </h4> */}
          <section className="w-2/3">
            <h4 className=" bg-headerColor p-2 text-white">Camilo Suarez</h4>
            <p className=" text-white text-justify  p-2 border-2 border-borderWindow">
              I am a frontend developer with 2 years of experience working on
              web applications. I have a deep understanding of HTML, CSS, and
              JavaScript, and I am able to create responsive and user-friendly
              interfaces. I am able to utilize them to create efficient and
              high-quality code. Additionally, I have a strong understanding of
              browser compatibility issues and how to work around them. I am
              able to work independently and am able to take ownership of
              projects. I am also a quick learner and am always willing to learn
              new technologies.Lastly, I also have a strong interest in AI and
              web3, and I am looking to learn more about these technologies.
            </p>
            <article className="pt-4">
              <h4 className=" bg-headerColor p-2 text-white">toolkits</h4>
              <ul className="border-2 p-2 border-borderWindow">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>SASS</li>
                <li>Figma</li>
                <li>Astro</li>
                <li>Reactjs</li>
              </ul>
            </article>
          </section>
          <section className="w-1/3">
            <article className="pt-2">
              <h4 className=" bg-headerColor p-2 text-white">Abilities:</h4>
              <ul className="border-2 p-2 border-borderWindow">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>SASS</li>
                <li>Figma</li>
                <li>Astro</li>
                <li>Reactjs</li>
              </ul>
            </article>
            <article className="pt-2">
              <h4 className=" bg-headerColor p-2 text-white">
                Areas of interest
              </h4>
              <ul className="border-2 p-2 border-borderWindow">
                <li>AI</li>
                <li>UI/UX</li>
                <li>A11y</li>
                <li>Web3</li>
                <li>Astronomy</li>
              </ul>
            </article>
            <article className="pt-2">
              <h1 className="bg-headerColor p-2 text-white">
                Scan for more info
              </h1>
              <img className="border-2  border-borderWindow" src={QR} alt="" />
            </article>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Profile;

/*
I am a frontend developer with years of experience working on web applications. I have a deep understanding of HTML, CSS, and JavaScript, and I am able to create responsive and user-friendly interfaces. I am able to utilize them to create efficient and high-quality code. Additionally, I have a strong understanding of browser compatibility issues and how to work around them. I am able to work independently and am able to take ownership of projects. I am also a quick learner and am always willing to learn new technologies.Lastly, I also have a strong interest in AI and web3, and I am looking to learn more about these technologies.

"A frontend developer is someone who takes a design and makes it work. They take a design and make it look good and work well."

A frontend developer is someone who creates the look and feel of a website or app. They make sure the user interface is easy to use and visually appealing.


I am a Frontend developer with 2 year of experience. I have a good understanding of HTML, CSS, and JavaScript. I am able to create responsive websites using Bootstrap or Foundation. I have also worked with React and React Native. I am able to work independently and can take ownership of a project.

I am a quick learner and have a good eye for detail. I am able to work under pressure and can meet deadlines. I am also a team player and am able to work collaboratively with other team members.

I am looking for a position where I can continue to learn and grow as a Frontend developer.


I am a frontend developer who is passionate about creating beautiful and user-friendly web experiences. I am always up for a challenge, and I pride myself on being able to quickly learn new technologies. I am committed to creating the best possible user experience for my clients and their users.
 */
