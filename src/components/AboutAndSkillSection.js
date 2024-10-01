import React from "react";

function AboutAndSkillSection() {
  return (
    <div className="h-screen gap-6 flex flex-col justify-center items-center bg-gradient-to-br to-slate-100 from-slate-300">
        
        <div className="bg-white shadow-lg p-8 rounded-lg z-10 w-[80%]">

            <img
            src="https://res.cloudinary.com/dtge0owvn/image/upload/v1727292945/profileImage_krmr9g.jpg" 
            alt="img"
            className="max-xl:w-24 max-xl:h-24  xl:w:20 2xl:w-24 xl:h-20 2xl:h-24 object-cover float-left mr-3 border-2 border-slate-500" // Add margin to the right for spacing
            />

            <div className="text-justify">
            <p className="text-xl font-semibold text-blue-800 mb-2">About Me</p>
            <p className="text-sm text-slate-600 mb-2">Hi, I'm Sameer Paul.</p>
            <p className="text-sm text-slate-600 mb-2">A passionate Frontend Developer with a foundational understanding of frontend technologies. My journey into web development began after completing my B.Tech in Mechanical Engineering and working at Tata Steel as a high-risk mechanical supervisor.</p>
            <p className="text-sm text-slate-600 mb-2">Intrigued by the possibilities of technology, I joined AccioJob to learn web development, focusing on frontend technologies. I'm currently expanding my knowledge to include backend technologies as well.</p>
            <p className="text-sm text-slate-600 mb-2">Although I don't have a large portfolio of projects yet, I'm actively working on new ones. More projects will come with time, as I'm committed to continuous learning and growth.</p>
            </div>

        </div>

        <div className="bg-white shadow-lg w-[80%] p-8 rounded-lg space-y-8 z-10">
          <div className="text-lg font-bold">Skills</div>
          <div className="flex flex-col gap-3">

            <p className="text-sm font-bold">Learned</p>

            <div className='flex gap-3 max-lg:gap-9'>

              <div className="text-xl font-semibold text-slate-800 mb-2 flex flex-col items-center">
                <img src="https://www.svgrepo.com/show/375320/html-document.svg" className='w-8 h-8'/>
                <p className='text-sm'>html</p>
              </div>

              <div className="text-xl font-semibold text-slate-800 mb-2 flex flex-col items-center">
                <img src="https://www.svgrepo.com/show/452185/css-3.svg" className='w-8 h-8'/>
                <p className='text-sm'>css</p>
              </div>

              <div className="text-xl font-semibold text-slate-800 mb-2 flex flex-col items-center">
                <img src="https://www.svgrepo.com/show/452045/js.svg" className='w-8 h-8'/>
                <p className='text-sm'>javascript</p>
              </div>

              <div className="text-xl font-semibold text-slate-800 mb-2 flex flex-col items-center">
                <img src="https://www.svgrepo.com/show/354259/react.svg" className='w-8 h-8'/>
                <p className='text-sm'>react</p>
              </div>

              <div className="text-xl font-semibold text-slate-800 mb-2 flex flex-col items-center">
                <img src="https://www.svgrepo.com/show/452093/redux.svg" className='w-8 h-8'/>
                <p className='text-sm'>redux</p>
              </div>

            </div>
           
          </div>

          <div className="flex flex-col gap-3">

            <p className="text-sm font-bold">Learning</p>

            <div className='flex gap-3 max-lg:gap-9'>
              <div className="text-xl font-semibold text-slate-800 mb-2 flex flex-col items-center">
                <img src="https://www.svgrepo.com/show/354119/nodejs-icon.svg" className='w-8 h-8'/>
                <p className='text-sm'>NodeJs</p>
              </div>
              <div className="text-xl font-semibold text-slate-800 mb-2 flex flex-col items-center">
                <img src="https://www.svgrepo.com/show/373845/mongo.svg" className='w-8 h-8'/>
                <p className='text-sm'>MongoDB</p>
              </div>
              <div className="text-xl font-semibold text-slate-800 mb-2 flex flex-col items-center">
                <img src="https://icon.icepanel.io/Technology/svg/Mongoose.js.svg" className='w-8 h-8'/>
                <p className='text-sm'>Mongoose</p>
              </div>
              <div className="text-xl font-semibold text-slate-800 mb-2 flex flex-col items-center">
                <img src="https://icon.icepanel.io/Technology/png-shadow-512/Express.png" className='w-8 h-8'/>
                <p className='text-sm'>Express</p>
              </div>
            </div>
            
          </div>
      
      </div>
    </div>

)}

export default AboutAndSkillSection;
