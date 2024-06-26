import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import HeaderWeb from './components/Header/HeaderWeb';
import Footer from './components/Footer/FooterWeb';
import Home from './pages/Home';
import News from './pages/Home/News';
import Merch from './pages/Home/Merch';
import Gallery from './pages/Home/Gallery';
import Confession from './pages/Home/Confession';
import AboutUs from './pages/Home/AboutUs';
import NoPage from './pages/Home/NoPage';
import MoreGallery from './pages/Gallery/MoreGallery';
import MoreMerch from './pages/Merch/MoreMerch';
import MoreNews from './pages/News/MoreNews';
import Message from './pages/Confession/Message';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className="flex flex-col gap-[25px] py-[25px]">
        <div>
          <HeaderWeb />
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="merch" element={<Merch />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="confession" element={<Confession />} />
            <Route path="AboutUs" element={<AboutUs />} />
            <Route path="MoreGallery" element={<MoreGallery />} />
            {/* <Route path="MoreMerch" element={<MoreMerch />} /> */}
            <Route path="MoreNews" element={<MoreNews />} />
            <Route path="Message" element={<Message />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
