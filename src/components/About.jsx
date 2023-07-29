const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className=" flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I am Aaron. Nice to meet you. Please take a look around. </p>
          </div>
          <div className="text-xl">
            I recently graduated from the University of South Florida with a major in computer
            science. Throughout my academic journey, I have developed a solid
            foundation in computer science, encompassing algorithm analysis,
            object-oriented programming, data structures, and database
            management, among other key areas. 
            <br/><br/>
            These studies have equipped me
            with a deep understanding of fundamental principles and the ability
            to apply them effectively in real-world scenarios.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
