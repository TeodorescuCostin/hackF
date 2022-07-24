import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{background:'#0f172a'}} className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        

        <main>
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-4 gap-1">
              <div>
              < svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-2/3 pt-8 m-auto h-2/3"
                fill="none"
                viewBox="0 0 24 32"
                stroke="#f9f9f9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  fill="#f9f9f9"
                  d="M19.733 6.26674L13.6193 0.262277C13.4489 0.0948661 13.2188 0 12.9773 0H0.909091C0.40625 0 0 0.398996 0 0.892857V24.1071C0 24.601 0.40625 25 0.909091 25H19.0909C19.5938 25 20 24.601 20 24.1071V6.90011C20 6.66295 19.9034 6.43415 19.733 6.26674ZM17.9034 7.31027H12.5568V2.05915L17.9034 7.31027ZM17.9545 22.9911H2.04545V2.00893H10.625V8.03571C10.625 8.34651 10.7507 8.64459 10.9745 8.86436C11.1982 9.08412 11.5017 9.20759 11.8182 9.20759H17.9545V22.9911ZM9.77273 15.4576H4.54545C4.42045 15.4576 4.31818 15.558 4.31818 15.6808V17.0201C4.31818 17.1429 4.42045 17.2433 4.54545 17.2433H9.77273C9.89773 17.2433 10 17.1429 10 17.0201V15.6808C10 15.558 9.89773 15.4576 9.77273 15.4576ZM4.31818 11.8862V13.2254C4.31818 13.3482 4.42045 13.4487 4.54545 13.4487H15.4545C15.5795 13.4487 15.6818 13.3482 15.6818 13.2254V11.8862C15.6818 11.7634 15.5795 11.6629 15.4545 11.6629H4.54545C4.42045 11.6629 4.31818 11.7634 4.31818 11.8862Z"
                />
              </svg>
              </div>

                      
            </div>
          </div>

          
        </main>

      </div>
    </div>
  );
}

export default Dashboard;