import React, { useEffect, useRef, useState } from 'react';
import {data} from '../data/data'





const ProjectSection = () => {  
  const [current,setCurrent] = useState(data[0])
  const [image,setImage] = useState(data[0])
  
  useEffect (() => {
    function handleScreenResize () {
      const screenWidth = window.innerWidth
      if(screenWidth > 1280){
        setImage(current.img_link.xxl)
      }
      if(screenWidth > 1024 && screenWidth <= 1280){
        setImage(current.img_link.xl)
      }
      if(screenWidth <= 1024){
        setImage(current.img_link.sm)
      }
    }


    window.addEventListener("resize",handleScreenResize)

    return () => {
      window.removeEventListener("resize",handleScreenResize)
    }
    
    
    
    
  },[current])

  function handleExternalRedirect () {
    window.open(current.link,'_blank')
  }

  function handleCardClick (id) {  
    setCurrent(data.find((item) => {
      return id === item.id
    }))
  }
  

  return (
    <div className="w-full h-screen flex max-xl:justify-center max-xl:items-center  items-center space-x-8 bg-gradient-to-br to-slate-100 from-slate-300 relative max-xl:bg-gradient-to-bl max-xl:from-slate-100 max-xl:to-slate-300 ">

      <div className='max-xl:hidden absolute right-20 w-[80%] h-[95%] bg-gradient-to-r from-slate-900 to-slate-700 blur-sm '></div>

      <div className="absolute max-md:h-[48rem] max-lg:relative max-lg:w-[80%] max-xl:right-0 max-2xl:right-15 right-36 max-xl:w-full max-2xl:w-[80%] max-2xl:h-[95%] w-[80%] h-[80%] max-xl:justify-center max-xl:items-center flex max-2xl:flex-col gap-4 ">
        
        <div className='max-md:w-full max-2xl:h-[75%] w-[95%]' >

          {/* Background image */} 
          <div  className="w-full h-full relative">
            <img 
              src={image} 
              alt="crypto" 
              className={`w-full h-full rounded-lg object-cover ${image === "" ?"bg-black" : null}`}
            />

          {/* Black overlay */}
            <div className="top-0 left-0 w-full h-full bg-gradient-to-r from-slate-950 to-transparent bg-opacity-50 absolute rounded-lg">
            </div>

            <div className='text-white flex flex-col max-md:justify-center max-md:h-full max-md:w-full gap-4 max-md:gap-2 pl-10 pb-10 max-md:pb-0 w-[50%] absolute bottom-0 left-0 max-md:text-base'>
              <p className='font-anton  max-lg:text-xl text-3xl tracking-wide max-xl:text-2xl'>{current.title}</p>
              <p className='font-oswald max-lg:text-md text-xl tracking-wide'>Description : {current.description}</p>
              <p className='font-oswald tracking-wide max-lg:text-sm'>Tech Used : {current.techUsed}</p>
              <p className='font-oswald text-sm tracking-wide max-lg:text-sm'>Status : {current.status}</p>
              <button 
              className="max-lg:text-sm mt-4 px-6 py-2 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-600 w-fit"
              onClick={handleExternalRedirect}
              >
                View Project
              </button>
            </div>


          </div>

        </div>
          

        

        {/* Card container */}
        <div className="max-2xl:w-[95%] max-2xl:h-[25%] max-2xl:flex gap-4 w-[13rem] h-full overflow-auto z-10 project-cards snap-y">
          {data.map((item) => (
            <div
            className="max-2xl:w-[17rem] max-2xl:h-full w-full h-64 overflow-hidden cursor-pointer max-2xl:mb-0 mb-4 rounded-lg bg-black relative group snap-center" // Added 'group' class
            onClick={() => handleCardClick(item.id)}
            key={item.id}
            >
              <img 
                src={item.img_link.sm} 
                alt={item.img_link.sm ? item.title : "Image not available"}
                className="relative w-full h-full object-cover text-white" 
              />
              <p
                className="absolute w-full h-full top-0 left-0 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300"
              >
                {item.title}
              </p>
          </div>
          
          ))}
        </div>

      </div>


      
    </div>
  );
};

export default ProjectSection;
