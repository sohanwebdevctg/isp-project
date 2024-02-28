import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="bg-gray-400">
      <div className="container mx-auto h-16">
        <div className="flex justify-between items-center h-full">
        <h1>Isp-provider</h1>
        <ul className="flex gap-10">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">about</Link></li>
          <li><Link to="/">contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;