import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';


export const Header = () => {
  return (
    <div className="bg-blue-600">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Left: Logo */}
        <div className="flex-col items-center">
          <img
            className="w-20 h-auto mx-2 "
            src="https://pbs.twimg.com/profile_images/1838803034240958464/xPqVM8Ud_400x400.jpg"
            alt="Company-logo"
          />
          <Sidebar/>
         
        </div>

        {/* Right: Navigation Links */}
        <div className="flex gap-8 text-lg font-medium">
          {/* <Link to="/home" className="hover:underline">Home</Link> */}
          <Link to="/" className="hover:opacity-20 text-white">Home</Link>
          {/* <Link to="/pricing" className="hover:opacity-20 text-white">Pricing</Link>
           */}
          {/* <Link to="/ask" className="hover:underline">Ask AI</Link> */}
          {/* <Link to="/experts" className="hover:opacity-20 text-white ">Experts</Link>
          <Link to="/signin" className="hover:opacity-20 text-white">Sign In</Link> */}
        </div>
      </div>
    </div>
  );
};


