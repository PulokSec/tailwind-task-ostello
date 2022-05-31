import React from "react";
import dashboard from "../../assets/dashboard.png";
import accountancy from "../../assets/accountancy.png";
import courses from "../../assets/courses.png";
import users from "../../assets/users.png";
import logout from "../../assets/logout.png";
import notification from "../../assets/notification.png";
import settings from "../../assets/settings.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="max-w-40 pl-8 bg-white">
    <div className='md:min-h-screen md:w-96'>
      <div className="grid pt-10 lg:grid-cols-1">
        <ul
          className="text-base font-normal text-brand-6 space-y-5 pb-6"
        >
          <li className='flex pt-2 rounded-md cursor-pointer items-center gap-x-4 
              '>
            <img alt="img" src={dashboard} />
              <a href="/"><span className='origin-left'>
                Dashboard
              </span></a>
          </li>
          <li className='flex pt-2 rounded-md cursor-pointer items-center gap-x-4 
              '>
            <img alt="img" src={courses} />
              <a href="/"><span className='origin-left text-brand-1 font-bold'>
                Courses
              </span></a>
          </li>
          <li className='flex pt-2 rounded-md cursor-pointer items-center gap-x-4 
              '>
            <img alt="img" src={accountancy} />
              <a href="/"><span className='origin-left'>
                Accountancy
              </span></a>
          </li>
          <li className='flex pt-2 rounded-md cursor-pointer items-center gap-x-4 
              '>
            <img alt="img" src={users} />
              <a href="/"><span className='origin-left'>
                My Profile
              </span></a>
          </li>
          <li className='flex pt-2 rounded-md cursor-pointer items-center gap-x-4 
              '>
            <img alt="img" src={notification} />
              <a href="/"><span className='origin-left'>
                Notification
              </span></a>
          </li>
          <li className='flex pt-2 rounded-md cursor-pointer items-center gap-x-4 
              '>
            <img alt="img" src={settings} />
              <a href="/"><span className='origin-left'>
                Settings
              </span></a>
          </li>
          <li className='flex pt-2 rounded-md cursor-pointer items-center gap-x-4 
              '>
            <img alt="img" src={logout} />
              <a href="/"><span className='origin-left'>
                Log Out
              </span></a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
