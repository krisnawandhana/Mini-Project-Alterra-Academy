import React from 'react'
import Navbar from '../NavBar/NavBar'

export default function HeaderWeb() {
  return (
    <div className="container">
      <div className="flex flex-col py-[25px]">
        <div className="flex justify-center items-center">
          <img src="/lipsum.svg" alt="alt img" width={"215px"} />
        </div>
      </div >
      <Navbar />
    </div>
  )
}
