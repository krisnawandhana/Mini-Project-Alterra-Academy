import react from 'react'
import Navbar from './components/NavBar'
import Footer from "./components/Footer/FooterWeb"
// import LogIn from './pages/Login'
// import Home from './pages/Home'
// import Gallery from './pages/Gallery'
// import News from './pages/News'
// import Confession from './pages/Confession'
// import Merch from './pages/Merch'

function App() {

  return (
    <>
      <div className="flex flex-col gap-[88px] py-[88px]">
        <div className="flex justify-center items-center">
          <img src="/lipsum.svg" alt="alt img" width={"215px"} />
        </div>
        <Navbar className="my-8" />
        <img src="/public/assets/wallpaper.png" alt="carousell" />

        {/* <div className="flex flex-col gap-[44px] container">
        </div> */}

        <Footer />
      </div>
    </>
  )
}

export default App
