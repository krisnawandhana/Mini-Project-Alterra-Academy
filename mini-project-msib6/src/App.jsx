// import react from 'react'
// import HeaderWeb from './components/Header/HeaderWeb'
// import Footer from "./components/Footer/FooterWeb"
// import Home from './pages/Home'

// function App() {
//   return (
//     <div>
//       <div className="flex flex-col gap-[25px] py-[25px]"> 
//         <HeaderWeb />
//         <Home />
//         <Footer />
//       </div>
//     </div>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import HeaderWeb from './components/Header/HeaderWeb';
import Footer from './components/Footer/FooterWeb';
import Home from './pages/Home';
import News from './pages/Home/News';
import Merch from './pages/Home/Merch';
import Gallery from './pages/Home/Gallery';
import Confession from './pages/Home/Confession';
import Profile from './pages/Home/Profile';
import NoPage from './pages/Home/NoPage'
import MoreGallery from './pages/Gallery/MoreGallery';
import MoreMerch from './pages/Merch/MoreMerch';
import MoreNews from './pages/News/MoreNews';

function App() {
  return (
    <Router>
      <div className="flex flex-col gap-[25px] py-[25px]"> 
        <div>
          <HeaderWeb />
        </div>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="merch" element={<Merch />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="confession" element={<Confession />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/MoreGallery" element={<MoreGallery />} />
            <Route path="/MoreMerch" element={<MoreMerch />} />
            <Route path="/MoreNews" element={<MoreNews />} />
            {/* Add other nested routes here */}
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router> 
  );
}

export default App;

