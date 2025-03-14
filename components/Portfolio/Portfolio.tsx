import React from 'react'

const Portfolio = () => {
  return (
    <div id="portfolio" className="max-w-[1240px] mx-auto py-8">
      <h1 className="font-bold text-2xl text-center mb-4">Green University of Bangladesh Captured by GUPC</h1>
      <div className="grid grid-rows-none md:grid-cols-5 gap-2 px-2">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <div className="w-full h-[300px] md:h-[400px] overflow-hidden">
            <img
              src="/assets/GUB.jpg"
              alt="Green University Building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full h-full">
          <div className="w-full h-[150px] md:h-[200px] overflow-hidden">
            <img
              src="/assets/GUB2.jpg"
              alt="Green University Campus"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full h-full">
          <div className="w-full h-[150px] md:h-[200px] overflow-hidden">
            <img
              src="/assets/GUB3.jpg"
              alt="Green University Building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full h-full">
          <div className="w-full h-[150px] md:h-[200px] overflow-hidden">
            <img
              src="/assets/GUB4.jpg"
              alt="Green University Campus"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full h-full">
          <div className="w-full h-[150px] md:h-[200px] overflow-hidden">
            <img
              src="/assets/GUB1.jpg"
              alt="Green University Building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
