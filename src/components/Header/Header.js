import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <div>
         <div className="navbar bg-base-100">
            <div className="navbar-start justify-between w-full">
               <Link to="/" className="sm:ml-6 btn btn-ghost normal-case text-3xl font-semibold text-sky-500">
                  Quiz Hack
               </Link>
               <div className="dropdown dropdown-end sm:mr-6">
                  <label tabIndex={0} className="btn btn-ghost sm:hidden rotate-180">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                     </svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content items-end mt-3 p-2 shadow bg-base-100 rounded-box w-40 font-semibold">
                     <li>
                        <Link to="/">Topics</Link>
                     </li>
                     <li>
                        <Link to="/statistics">Statistics</Link>
                     </li>
                     <li>
                        <Link to="/blog">Blog</Link>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="navbar-center hidden sm:flex sm:mr-8">
               <ul className="menu menu-horizontal p-0 font-semibold">
                  <li>
                     <Link to="/">Topics</Link>
                  </li>
                  <li>
                     <Link to="/statistics">Statistics</Link>
                  </li>
                  <li>
                     <Link to="/blog">Blog</Link>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Header;
