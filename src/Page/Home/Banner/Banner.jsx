import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import './Banner.css'


const Banner = () => {
  return (
    <div className="bg-sky-600 banner">
      <div className="container mx-auto h-[450px]">
        <div className="flex justify-center items-center h-full">
          <div className="text-center w-full">
            <h3 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold"><span className="text-black">Find The Best ISP</span>(Internet Service <br></br>Provider) in Your Area</h3>
            <form className="w-full md:w-5/6 lg:w-4/6 text-center mx-auto mt-5 px-4">
              <div className="md:flex items-center p-4 bg-slate-300 rounded-lg gap-3">
                <div className="w-full flex overflow-hidden relative">
                  <input type="email" placeholder="Enter Your Email" className="input input-md w-full md:rounded-e-none md:h-16 text-lg" />
                  <FaLocationCrosshairs className="absolute top-3 md:top-6 right-6 text-slate-400 text-xl"></FaLocationCrosshairs>
                </div>
                <button className="btn btn-success md:rounded-s-none md:h-16 md:w-44 w-full mt-2 md:mt-0 text-lg font-bold text-white"><IoSearch className="text-xl"></IoSearch>Find ISP</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;