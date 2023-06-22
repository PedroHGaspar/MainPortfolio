import profile from "../components/assets/profile.jpeg";

const About = () => {
  return (
    <>
      {/* <Header /> */}
      <section id="hero" style={{ overflow: "hidden" }}>
        <div
          className="flex h-screen flex-col items-center justify-center space-y-8 text-center" style={{ marginTop: "5rem" }}
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute mt-52 h-[200px] w-[200px] animate-ping rounded-full border border-[#444444]" />
            <div className="absolute mt-52 h-[300px] w-[300px] rounded-full border border-[#333333]" />
            <div className="absolute mt-52 h-[500px] w-[500px] rounded-full border border-[#333333]" />
            <div className="absolute mt-52 h-[650px] w-[650px] animate-pulse rounded-full border border-yellow-400" />
            <div className="absolute mt-52 h-[800px] w-[800px] rounded-full border border-[#333333]" />
          </div>
          <img
            src={profile}
            alt="Profile picture"
            className="relative mx-auto h-36 w-36 rounded-full"
            style={{ height: 144, width: 144 }}
          />
          <div className="z-20">
            <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-400">
              Software Engineer
            </h2>
            <h1 className="px-10 text-3xl font-semibold md:text-4xl lg:text-6xl text-white">
              Pedro H. Gaspar
            </h1>
            {/* <div className="pt-5">
              {["Experience", "Works"].map((section) => (
                <a
                  href={`#${section}`}
                  key={section}
                  className="rounded-full border border-[#242424] px-6 py-2 text-sm uppercase tracking-widest text-gray-400 transition-all hover:border-accent-500/40 hover:text-accent-500/40"
                >
                  {section}
                </a>
              ))}
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
