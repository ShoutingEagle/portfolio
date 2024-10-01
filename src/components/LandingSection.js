import React, { useState } from 'react';
import resume from '../assets/Resume.pdf'
import '../cssFiles/landingSection.css'



const LandingSection = () => {
  const [toolTipState,setToolTipState] = useState('')



  function handleDownloadResume () {
    window.open(resume)
  }

  return (
    <div className="w-full h-screen bg-gradient-to-bl from-slate-100 to-slate-300 flex items-center space-x-8 relative max-xl:justify-center max-xl:pl-0 pl-20">
      <div className='max-xl:hidden absolute left-20 w-3/4 h-3/4 bg-gradient-to-r from-slate-900 to-slate-700 blur-sm '></div>
        <div className="bg-white shadow-lg max-xl:w-[24rem] xl:w-[22rem] 2xl:w-[24rem] p-8 rounded-lg mb-8 z-10 max-lg:hidden">

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


        <div className="font-poppins col-span-1 flex flex-col gap-8 justify-center z-10 ">
          
          <div>
            <p className="text-[2.5rem] font-bold text-slate-700">Welcome to my Portfolio</p>
            <p className="text-5xl font-bold text-slate-700">I'm Sameer Paul</p>
            <p className="text-3xl text-slate-600">Frontend Developer </p>
          </div>
          
          <button 
          className="mt-4 px-6 py-4 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-600 w-fit"
          onClick={handleDownloadResume}
          >
                Download Resume
          </button>

          <div className='flex gap-4 '>
             {/* Gmail Icon */}
              <a 
                className='cursor-pointer w-fit relative group' 
                href='https://mail.google.com/mail/?view=cm&fs=1&to=sameerpaul58@gmail.com' 
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security best practice
              >
                <img 
                  src='https://www.svgrepo.com/show/303161/gmail-icon-logo.svg' 
                  className='w-10' 
                  onMouseEnter={() => setToolTipState('email')} 
                  onMouseLeave={() => setToolTipState('')}
                />
                <span className={`absolute text-white bg-black p-2 rounded-lg text-xs mt-4 ${toolTipState === 'email' ? 'block' : 'hidden'}`}>
                  sameerpaul58@gmail.com
                </span>
              </a>

              {/* Phone Icon */}
              <a 
                className='cursor-pointer w-fit relative group' 
                href='tel:+916206382019' // Opens the dialer with the phone number
              >
                <img 
                  src='https://www.svgrepo.com/show/468361/contact-book.svg' 
                  className='w-10'
                  onMouseEnter={() => setToolTipState('phone')} 
                  onMouseLeave={() => setToolTipState('')}
                />
                <span className={`absolute text-white bg-black p-2 rounded-lg text-xs mt-4 ${toolTipState === 'phone' ? 'block' : 'hidden'}`}>
                  6206382019
                </span>
              </a>

              {/* WhatsApp Icon */}
              <a 
                className='cursor-pointer w-fit relative group' 
                href='https://wa.me/916206382019' // WhatsApp link with the phone number
                target='_blank'
                rel="noopener noreferrer"
              >
                <img 
                  src='https://www.svgrepo.com/show/138928/whatsapp.svg' 
                  className='w-10'
                  onMouseEnter={() => setToolTipState('whatsapp')} 
                  onMouseLeave={() => setToolTipState('')}
                />
                <span className={`absolute text-white bg-black p-2 rounded-lg text-xs mt-4 ${toolTipState === 'whatsapp' ? 'block' : 'hidden'}`}>
                  6206382019
                </span>
              </a>

              {/* LinkedIn Icon */}
              <a 
                className='cursor-pointer w-fit relative group' 
                href='https://www.linkedin.com/in/sameerpaul239421233' // Direct LinkedIn URL
                target='_blank'
                rel="noopener noreferrer"
              >
                <img 
                  src='https://www.svgrepo.com/show/448234/linkedin.svg' 
                  className='w-10'
                  onMouseEnter={() => setToolTipState('linkedin')} 
                  onMouseLeave={() => setToolTipState('')}
                />
                <span className={`absolute text-white bg-black p-2 rounded-lg text-xs mt-4 ${toolTipState === 'linkedin' ? 'block' : 'hidden'}`}>
                  linkedin.com/in/sameerpaul58
                </span>
              </a>

              {/* GitHub Icon */}
              <a 
                className='cursor-pointer w-fit relative group' 
                href='https://github.com/ShoutingEagle' // Direct GitHub URL
                target='_blank'
                rel="noopener noreferrer"
              >
                <img 
                  src='https://www.svgrepo.com/show/512317/github-142.svg' 
                  className='w-10'
                  onMouseEnter={() => setToolTipState('github')} 
                  onMouseLeave={() => setToolTipState('')}
                />
                <span className={`absolute text-white bg-black p-2 rounded-lg text-xs mt-4 ${toolTipState === 'github' ? 'block' : 'hidden'}`}>
                  github.com/ShoutingEagle
                </span>
              </a>
          </div>
          
        </div>

        

    </div>
  );
};

export default LandingSection;


















