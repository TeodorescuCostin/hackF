import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../../utils/Transition';

import Moralis from 'moralis/dist/moralis.min.js';

function UserMenu() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);


  const serverUrl="https://drww6jthgc1z.usemoralis.com:2053/server";
  const appId="TF33IR2fFIdZclNmTe4Xi0myM01dJiXqjSPvStI1";
  Moralis.start({ serverUrl, appId });

  async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
  }

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
      
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="white"/>
          <path d="M16.0001 4.78945C12.2675 4.78945 9.23077 7.82614 9.23077 11.5588C9.23077 13.3703 9.94518 15.426 11.1418 17.0576C12.4953 18.9031 14.2207 19.9196 16.0001 19.9196C17.7795 19.9196 19.5048 18.9032 20.8584 17.0576C22.0551 15.426 22.7695 13.3703 22.7695 11.5588C22.7695 7.82614 19.7327 4.78945 16.0001 4.78945ZM16.0001 18.4763C14.7112 18.4763 13.3646 17.6482 12.3057 16.2041C11.2992 14.8318 10.674 13.0518 10.674 11.5588C10.674 8.62194 13.0633 6.2327 16.0001 6.2327C18.9369 6.2327 21.3261 8.62194 21.3261 11.5588C21.3262 14.6079 18.8184 18.4763 16.0001 18.4763Z" fill="#0F172A"/>
          <path d="M16 0C7.17764 0 0 7.17754 0 16C0 24.8224 7.17754 32 16 32C24.8225 32 32 24.8225 32 16C32 7.17754 24.8224 0 16 0ZM16 30.5568C13.104 30.5567 10.403 29.7063 8.13307 28.2426C8.21196 26.0326 9.21242 23.9606 10.9064 22.5221C11.5795 21.9505 12.5625 21.8881 13.3524 22.3667C14.2057 22.8838 15.0965 23.146 16.0003 23.146C16.9039 23.146 17.7944 22.8839 18.6473 22.3671C19.4364 21.8889 20.4167 21.9491 21.0867 22.5167C22.7819 23.9532 23.788 26.0311 23.8668 28.2428C21.5969 29.7064 18.8959 30.5568 16 30.5568ZM25.2272 27.2502C24.9156 24.9907 23.7829 22.9098 22.0197 21.4156C20.8757 20.4463 19.2198 20.3326 17.8993 21.1329C16.651 21.8892 15.349 21.8891 14.1004 21.1325C12.7784 20.3313 11.1195 20.4478 9.97215 21.4221C8.21043 22.9181 7.08229 24.9931 6.77151 27.2492C3.52046 24.5773 1.44324 20.5268 1.44324 16.0001C1.44324 7.97335 7.97345 1.44324 16 1.44324C24.0267 1.44324 30.5568 7.97335 30.5568 16C30.5568 20.5273 28.4791 24.5783 25.2272 27.2502Z" fill="#0F172A"/>
        </svg>

        <div className="flex items-center truncate">
          <span style={{color:'#36549c'}}  className="truncate ml-2 text-sm font-medium group-hover:text-slate-800">Acme Inc.</span>
          <svg style={{color:'#36549c'}} className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200">
            <div style={{color:'#0f172a'}} className="font-medium text-slate-800">Acme Inc.</div>
          </div>
          <ul>
            <li>
              <Link
                style={{color:'#36549c'}} 
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                to="/profile"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                style={{color:'#36549c'}} 
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                to="/"
                onClick={logOut}
              >
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  )
}

export default UserMenu;