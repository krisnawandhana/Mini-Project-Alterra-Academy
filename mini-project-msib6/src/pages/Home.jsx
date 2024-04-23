import React from 'react'
import Summary from './Home/Summary'
import News from './Home/News'
import Merch from './Home/Merch'
import Gallery from './Home/Gallery'

export default function Home() {
  return (
    <div>
        <div className="flex flex-col bg-rose-300 ">
          <div className="flex flex-col gap-[25px]" />
            <img 
            src="/assets/wallpaper2.png" 
            alt="carousel" 
            className="max-w-full h-auto object-cover" 
            style={{ maxHeight: "400px", opacity: 0.7 }}/>
        </div>

        <div className="container">
          <Summary /> 
          <News />
          <Merch />
          <Gallery />
        </div>
    </div>
  )
}
