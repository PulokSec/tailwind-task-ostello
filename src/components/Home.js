import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import logo from "../assets/Ellipse 303.png";
import brand from "../assets/OSTELLO.png";
import Courses from './Courses/Courses';

const Home = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto bg-white">
      <div className="flex pt-4">
        <div className="flex align-center justify-center">
          <img className="w-104" src={logo} alt="" />
        </div>
        <div className="flex align-center justify-center">
          <img className="w-104 h-5 pl-2 mt-3" src={brand} alt="" />
        </div>
      </div>
    </div>
		<div className='flex flex-col md:flex-row'>
			<div className='md:min-h-screen md:w-80 xl:w-96'>
				<Sidebar></Sidebar>
			</div>
      <div className='flex flex-col'>
      <Courses/>
      </div>
		</div>
    </>
  );
};

export default Home;