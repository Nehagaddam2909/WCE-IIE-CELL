import React from "react";
import NavbarLinks from "../../../data/navbarLinks";
const Sidebar = ({ showSidebar, setshowSidebar }) => {
  return (
    <div
      className={`flex flex-col z-50 ${
        showSidebar ? " block w-60" : "hidden"
      } transition-all duration-500 ease-in-out  fixed top-0 left-0  lg:hidden h-full p-3 bg-white  border-r border-gray-300 shadow-xl`}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2>Dashboard</h2>
          <button className="p-2" onClick={() => setshowSidebar(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center py-4">
            <button type="submit" className="p-2 focus:outline-none focus:ring">
              <svg
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-5 h-5 "
              >
                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="Search"
            placeholder="Search..."
            className="w-full py-2 pl-10 text-sm  rounded-md transition-[border-color] duration-300  focus:outline-none border  border-transparent hover:border-gray-300 focus:border-gray-500"
          />
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm ">
            {NavbarLinks.map((link, index) => (
              <li key={index} className="rounded-sm">
                <a
                  // rel="noopener noreferrer"
                  href={link}
                  className="flex hover:text-primary pl-5 items-center p-2 space-x-3 rounded-md"
                >
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
             <li  className="rounded-sm">
                <a
                  // rel="noopener noreferrer"
                  href='/register'
                  className="flex hover:text-primary pl-5 items-center p-2 space-x-3 rounded-md"
                >
                  <span>Reach us</span>
                </a>
              </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
          alt=""
          className="w-12 h-12 rounded-lg dark:bg-gray-500"
        />
        <div>
          <h2 className="text-lg font-semibold">Dr. B. F. Momin</h2>
          <span className="flex items-center space-x-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-xs hover:underline dark:text-gray-400"
            >
              View profile
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
