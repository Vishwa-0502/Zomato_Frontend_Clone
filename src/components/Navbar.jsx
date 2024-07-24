import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-scroll';

export default function Navbar() {
  const headItems = [
    { id: 1, text: 'Signup', target: 'signup' },
    { id: 2, text: 'Login', target: 'login' },
    { id: 3, text: 'Address', target: 'address' },
  ];

  return (
    <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 shadow-lg">
      <div className="flex max-w-[1240px] mx-auto items-center p-4 justify-between">
        <div className="cursor-pointer">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-4xl text-white transition duration-200 hover:text-gray-200">
            Zoomato
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex justify-center bg-white h-12 rounded-full shadow-md sm:pl-4 sm:w-[300px] lg:w-[300px] items-center overflow-hidden transition duration-200 focus-within:shadow-lg">
            <input
              type="search"
              className="flex-grow bg-transparent p-2 text-black focus:outline-none"
              placeholder="Search..."
            />
            <button className="bg-black text-white p-2 h-12 w-12 flex items-center justify-center rounded-full hover:bg-gray-800 transition duration-200">
              <FiSearch size={20} />
            </button>
          </div>
          <div className="hidden md:flex space-x-8">
            {headItems.map(({ id, text, target }) => (
              <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                <Link
                  to={target}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass='active'
                  className='cursor-pointer text-white hover:text-gray-200'
                >
                  {text}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
