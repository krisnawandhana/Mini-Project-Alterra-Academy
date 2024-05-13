import React from 'react'
import Summary from './Home/Summary'
import News from './Home/News'
import Gallery from './Home/Gallery'

export default function Home() {
  return (
    <div>
        <div className="carousel flex flex-col bg-rose-300 ">
            <img 
            id="item1"
            src="/assets/wallpaper2.png" 
            alt="carousel" 
            className="carousel-item max-w-full h-auto object-cover" 
            style={{ maxHeight: "400px", opacity: 0.7 }}/>
        </div>

        <div className="container">
          <Summary /> 
          <News />
          <Gallery />
        </div>
    </div>
  )
}
