import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 ">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Aaron Yii
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a full stack developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
            Passionate about learning new things and am presently engaged in
            expanding my expertise in front-end and back-end development.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500} className="text-white group border-2 px-6 py-3 my-2 flex items-center
           hover:bg-pink-600 hover:border-pink-600 justify-between cursor-pointer max-w-[200px]">
            View Work 
            <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 "/>
            </span>
          </Link >
        </div>
      </div>
    </div>
  );
};

export default Home;
