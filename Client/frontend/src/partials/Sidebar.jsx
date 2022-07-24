import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, Link} from 'react-router-dom';

import SidebarLinkGroup from './SidebarLinkGroup';

function Sidebar({
  sidebarOpen,
  setSidebarOpen
}) {

  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      {/* style={{background:'#F9F9F9',borderRadius:'25px', margin:'0 0 0 10px'}} */}
      <div  className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        // , height: '97%', width: '97%',borderRadius:'25px', margin:'5% 0 0 10px'
        style={{background:'#F9F9F9'}}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
      >

        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/" className="block">
            <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M26 2C26 0.895431 20.1797 0 13 0C5.8203 0 0 0.895431 0 2C0 5.74904 1.58698 9.12741 4.12581 11.5C1.58698 13.8726 0 17.251 0 21C0 22.1046 5.8203 23 13 23C20.1797 23 26 22.1046 26 21C26 17.251 24.413 13.8726 21.8742 11.5C24.413 9.12741 26 5.74904 26 2Z" fill="url(#paint0_linear_7_2)"/>
              <defs>
                <linearGradient id="paint0_linear_7_2" x1="13" y1="0" x2="13" y2="19" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00A3FF"/>
                  <stop offset="0.963542" stop-color="#3106FF"/>
                  <stop offset="0.9998" stop-color="#3106FF"/>
                  <stop offset="0.9999" stop-color="#3106FF"/>
                  <stop offset="1" stop-color="#3300FF"/>
                </linearGradient>
              </defs>
            </svg>

          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
              <span style={{color:'#0f172a'}} className="lg:hidden lg:sidebar-expanded:block 2xl:block">Files</span>
            </h3>
            <ul className="mt-3">
              {/* Dashboard */}
              <li style={{ borderRadius:'9px'}} className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('recents')  && 'bg-slate-900'}`}>
                <NavLink end to="/" className={`block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes('recents')  && 'hover:text-slate-200'}`}>
                  <div className="flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 24C5.37306 24 0 18.6272 0 12C0 5.37277 5.37306 0 12 0C18.6269 0 24 5.37277 24 12C24 18.6272 18.6269 24 12 24ZM12 2.25015C6.61469 2.25015 2.25061 6.61491 2.25061 12C2.25061 17.3851 6.61469 21.7498 12 21.7498C17.3853 21.7498 21.7494 17.3851 21.7494 12C21.7494 6.61491 17.3829 2.25015 12 2.25015ZM16.8735 13.1263H14.6229H13.1241H11.9976C11.3755 13.1263 10.8735 12.6235 10.8735 12V5.24954C10.8735 4.62847 11.3755 4.12323 11.9976 4.12323C12.6196 4.12323 13.1241 4.626 13.1241 5.24954V10.8762H14.6229H16.8735C17.4955 10.8762 17.9976 11.3789 17.9976 12C18 12.6211 17.4955 13.1263 16.8735 13.1263Z" fill={`#36549c`} />
                    </svg>
                    <span style={{color:'#36549c'}} className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Recents</span>
                  </div>
                </NavLink>
              </li>
              {/* Analytics */}
              <li style={{borderRadius:'9px'}}className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('primary') && 'bg-slate-900'}`}>
                <NavLink end to="/primary" className={`block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes('primary') && 'hover:text-slate-200'}`}>
                  <div className="flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 8.00836H4.50002L0 12.8133H2.24988L5.24999 9.60992H18.75L21.7501 12.8133H24L19.5 8.00836Z" fill="#36549c"/>
                      <path d="M16.4999 12.7885V14.3901C16.4999 15.271 15.825 15.9917 15 15.9917H8.99996C8.17497 15.9917 7.49998 15.271 7.49998 14.3901V12.7885H0V22.3984C0 23.2793 0.674987 24 1.49998 24H22.4999C23.3249 24 23.9999 23.2793 23.9999 22.3984V12.7885H16.4999Z" fill="#36549c"/>
                      <path d="M16.3499 5.60584H14.2499V0.800858C14.2499 0.320343 13.9499 0 13.4998 0H10.4999C10.0499 0 9.74986 0.320343 9.74986 0.800858V5.60584H7.64993C6.82494 5.60584 6.52493 6.1664 6.8999 6.88713L11.2499 11.4518C11.6249 12.1725 12.2999 12.1725 12.7499 11.4518L17.0999 6.88713C17.4749 6.1664 17.1749 5.60584 16.3499 5.60584Z" fill="#36549c"/>
                    </svg>
                    <span style={{color:'#36549c'}} className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Primary</span>
                    
                  </div>
                </NavLink>
              </li>
              {/* Analytics */}
              <li style={{borderRadius:'9px'}}className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('deleted') && 'bg-slate-900'}`}>
                <NavLink end to="/deleted" className={`block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes('deleted') && 'hover:text-slate-200'}`}>
                  <div className="flex items-center">
                    <svg width="24" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.4801 5.59536L15.9462 4.47138L16.0776 4.21305C16.6525 3.08248 16.1354 1.72577 14.9249 1.18875L12.7424 0.220679C12.1561 -0.0395079 11.4964 -0.0706053 10.8847 0.132626C10.2731 0.335942 9.78286 0.749587 9.50437 1.29726L9.373 1.55558L6.83908 0.431515C5.51331 -0.156461 3.92217 0.372532 3.29235 1.61076L2.64362 2.88626C2.54066 3.08873 2.52808 3.32112 2.60852 3.53221C2.68904 3.74338 2.85598 3.91602 3.07276 4.01219L9.78783 6.99094H0.904733C0.651667 6.99094 0.410273 7.0899 0.238999 7.2638C0.0676338 7.4378 -0.0178676 7.67069 0.00312318 7.9062L1.19227 21.2329C1.3307 22.7846 2.74505 24 4.41219 24H11.0659C12.733 24 14.1473 22.7846 14.2858 21.2329L15.3369 9.45245L17.8888 10.5845C18.0142 10.6401 18.1463 10.6663 18.2764 10.6663C18.6148 10.6663 18.9394 10.4882 19.0943 10.1837L19.7429 8.90824C20.3724 7.66967 19.806 6.18359 18.4801 5.59536ZM11.1389 2.0223C11.2101 1.88244 11.3353 1.77681 11.4914 1.72476C11.6479 1.67287 11.8163 1.68073 11.966 1.74732L14.1484 2.71531C14.4577 2.85254 14.5898 3.19918 14.4429 3.48801L14.3115 3.74634L11.0075 2.28071L11.1389 2.0223ZM12.4823 21.0925C12.4214 21.775 11.7992 22.3098 11.0658 22.3098H4.4121C3.67869 22.3098 3.05647 21.775 2.99558 21.0925L1.88814 8.68093H13.5898L12.4823 21.0925ZM18.1081 8.18295L17.8477 8.69504L4.66643 2.8479L4.92692 2.33572C5.12859 1.93898 5.63835 1.76971 6.06278 1.95807L17.7037 7.12192C18.1284 7.31036 18.3098 7.78637 18.1081 8.18295Z" fill={`#36549c`} />
                    </svg>
                    <span style={{color:'#36549c'}} className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Recently deleted</span>
                  </div>
                </NavLink>
              </li>
              <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
                <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
                <span style={{color:'#0f172a'}} className="lg:hidden lg:sidebar-expanded:block 2xl:block">Explorer</span>
              </h3>
              {/* Team */}
              <li style={{borderRadius:'9px'}}className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('files') && 'bg-slate-900'}`}>
                <NavLink end to="/files" className={`block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes('files') && 'hover:text-slate-200'}`}>
                  <div className="flex items-center">
                  < svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-2/3m-auto h-2/3"
                              fill="none"
                              width="24" height="24"
                              stroke="#36549c"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                                />
                            </svg>
                    <span style={{color:'#36549c'}} className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Files</span>
                    
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;