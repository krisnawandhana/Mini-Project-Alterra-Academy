import react from 'react'
import Navbar from './components/NavBar'
import Footer from "./components/Footer/FooterWeb"
import Summary from './pages/Summary'
import News from './pages/News'
// import LogIn from './pages/Login'
// import Home from './pages/Home'
// import Gallery from './pages/Gallery'
// import News from './pages/News'
// import Confession from './pages/Confession'
// import Merch from './pages/Merch'

function App() {

  return (
    <div>
      <div className="flex flex-col gap-[25px] py-[25px]">
        <div className="flex justify-center items-center">
          <img src="/lipsum.svg" alt="alt img" width={"215px"} />
        </div>

        <div className="flex flex-col gap-[25px] py-[25px]"> 
          <Navbar className="my-8" />
          <img src="/assets/wallpaper.png" alt="carousell" />
        </div>

        <div className="container">
          <Summary className="my-8"/>
          <News />
        </div>


        <div className="container">
          <div className="flex gap-8">
            <img src="/logo.svg" alt="logo" width={"40px"} />
            <h1 className="font-black my-8 col-span-2 text-rose-300 text-xl tracking-[4px]">MERCH </h1>
          </div>
          <div className="flex gap-8 col-span-2 justify-center">
            <div className="group relative">
              <img src="/assets/merch.png" alt="merch 1" className="w-1/1 rounded-lg shadow-md group-hover:scale-105 transition duration-300"/>
              <div className="rounded-lg absolute inset-0 bg-gradient-to-b from-transparent to-rose-300 opacity-0 group-hover:opacity-60 scale-105 transition duration-300"></div>
              <p className="text-white absolute inset-x-0 bottom-0 px-4 py-2 invisible group-hover:visible scale-105 transition duration-300">Merch Description 1</p>
            </div>
            <div className="group relative">
              <img src="/assets/merch.png" alt="merch 2" className="w-1/1 rounded-lg shadow-md group-hover:scale-105 transition duration-300"/>
              <div className="rounded-lg absolute inset-0 bg-gradient-to-b from-transparent to-rose-300 opacity-0 group-hover:opacity-60 scale-105 transition duration-300"></div>
              <p className="text-white absolute inset-x-0 bottom-0 px-4 py-2 invisible group-hover:visible scale-105 transition duration-300">Merch Description 2</p>
            </div>
            <div className="group relative">
              <img src="/assets/merch.png" alt="merch 3" className="w-1/1 rounded-lg shadow-md group-hover:scale-105 transition duration-300"/>
              <div className="rounded-lg absolute inset-0 bg-gradient-to-b from-transparent to-rose-300 opacity-0 group-hover:opacity-60 scale-105 transition duration-300"></div>
              <p className="text-white absolute inset-x-0 bottom-0 px-4 py-2 invisible group-hover:visible scale-105 transition duration-300">Merch Description 3</p>
            </div>
        </div>
          <br />
          <a href="#" className="font-black my-[8] text-rose-300 flex justify-end items-end">More Merch &rarr;</a>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default App
