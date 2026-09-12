
import { useState } from 'react';
import image from '../../assets/logo-text.png'; 
import { RxCross2 } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHamburger = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="sticky top-0 bg-white z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center py-4">
          
          <div className="flex md:hidden items-center">
            <button onClick={toggleHamburger} className="text-2xl text-gray-700 cursor-pointer p-1"
            >
              {isOpen ? <RxCross2 /> : <GiHamburgerMenu />}
            </button>
          </div>

          <div className="flex items-center justify-center">
            <img src={image} alt="DevStack Logo" className="h-8 md:h-10" />
          </div>

          <ul className="hidden md:flex items-center gap-6 text-[#475569] font-medium text-sm">
            <li><a href="#" className="text-[#DB2777] font-semibold">Home</a></li>
            <li><a href="#" className="hover:text-[#DB2777] transition">Technologies</a></li>
            <li><a href="#" className="hover:text-[#DB2777] transition">Projects</a></li>
            <li><a href="#" className="hover:text-[#DB2777] transition">About</a></li>
            <li><a href="#" className="hover:text-[#DB2777] transition">Contact</a></li>
          </ul>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer px-1">
              Sign In
            </button>
            <button className="bg-[#D91B7E] hover:bg-[#c0156d] text-white text-xs sm:text-sm font-medium px-3 sm:px-5 py-1.5 ms:py-2 rounded-full cursor-pointer transition ">
              Sign Up
            </button>
          </div>

        </div>

        
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-2 bg-white">
            <ul className="flex flex-col gap-2 text-[#475569] font-medium text-sm px-2">
              <li><a href="#" className="block text-[#DB2777] font-semibold py-1.5" onClick={() => setIsOpen(false)}>Home</a></li>
              <li><a href="#" className="block hover:text-[#DB2777] py-1.5" onClick={toggleHamburger}>Technologies</a></li>
              <li><a href="#" className="block hover:text-[#DB2777] py-1.5" onClick={toggleHamburger}>Projects</a></li>
              <li><a href="#" className="block hover:text-[#DB2777] py-1.5" onClick={toggleHamburger}>About</a></li>
              <li><a href="#" className="block hover:text-[#DB2777] py-1.5" onClick={toggleHamburger}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


