import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';


// Import pages
import Recents from './pages/Dashboard';
import Primary from './pages/Primary';
import UploadDesktop from './pages/Upload/app';
import RecentlyDeleted from './pages/RecentlyDeleted';
import Files from './pages/Files';
import Login from './pages/Login';
import Profile from './pages/Profile';


function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/recents" element={<Recents />} />
        <Route exact path="/primary" element={<Primary />} />
        <Route exact path="/upload" element={<UploadDesktop />} />
        <Route exact path="/deleted" element={<RecentlyDeleted />} />
        <Route exact path="/files" element={<Files />} />
        <Route exact path="/profile" element={<Profile />} />
        
      </Routes>
    </>
  );
}

export default App;
