import React from "react";

function EndRibbon() {
  return (
    <div className="w-full h-20 bg-gradient-to-br to-slate-900 from-slate-950 flex justify-center items-center relative">
        <div className="text-white text-sm flex justify-center items-center flex-wrap gap-4">
        <p>This project was made possible using </p>
        <a href="https://react.dev/" className="flex justify-center items-center space-x-1" target="_blank" rel="noopener noreferrer">
          <img src="https://icon.icepanel.io/Technology/svg/React.svg" className="w-5"/>
          <p>React</p>
        </a> 
        <a href="https://tailwindcss.com/" className="flex justify-center items-center space-x-1" target="_blank" rel="noopener noreferrer">
          <img src="https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg" className="w-5"/>
          <p>tailwindcss</p>
        </a> 
        
        <a href="https://cloudinary.com/" className="flex justify-center items-center space-x-1" target="_blank" rel="noopener noreferrer">
          <img src="https://res-s.cloudinary.com/prod/image/upload/d_console:cld_new_default_cloud_logo_regular_padding.svg/w_32,h_32,c_fill,dpr_2.0/console/customer-logos/47035819eb443c3bc991b08ddb980bcc" className="w-5"/>
          <p>cloudinary</p>
        </a>
        <a href="https://techicons.dev/" className="flex justify-center items-center space-x-1" target="_blank" rel="noopener noreferrer">
          <img src="https://techicons.dev/tech-icons-logo.svg" className="w-5"/>
          <p>techicons.dev</p>
        </a>
         and 
         <a href="https://www.svgrepo.com/" className="flex justify-center items-center space-x-1" target="_blank" rel="noopener noreferrer">
          <img src="https://www.svgrepo.com/logo.svg" className="w-5"/>
          <p>svgrepo.com</p>
        </a>
      </div>
    </div>
)}

export default EndRibbon;
