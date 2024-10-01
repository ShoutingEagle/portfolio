import React from 'react';

const EndSection = () => {
  const projects = [
    { id: 1, title: "CryptoTracker", description: "A crypto tracking app" },
    { id: 2, title: "News App", description: "Real-time news articles" },
    // Add more projects as needed
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-bl from-slate-100 to-slate-300 max-xl:bg-gradient-to-br max-xl:to-slate-100 max-xl:from-slate-300 flex max-lg:justify-center max-lg:items-center items-center lg:space-x-8 relative lg:pl-20">
      
      <div className='max-xl:hidden  absolute left-20 w-3/4 h-3/4 bg-gradient-to-r from-slate-900 to-slate-700 blur-sm'></div>


      <div className="max-lg:hidden h-fit bg-white shadow-lg w-fit p-8 rounded-lg space-y-8 z-10 ">
          <div className="text-lg font-bold">Skills</div>
          <div className="flex flex-col gap-3">

            <p className="text-sm font-bold">Learned</p>

            <div className='flex gap-3'>

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

            <div className='flex gap-3'>
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


      <div className="max-md:h-[42rem] max-lg:w-[90%] max-lg:h-fit max-lg:shadow-lg max-lg:rounded-lg max-lg:bg-white max-lg:p-8 w-[45%] h-[60%] z-10 font-poppins flex flex-col gap-4 max-md:static">
          <div className="text-lg font-bold max-xl:text-indigo-500 text-white">Next Project Idea</div>
          <p className='font-bold max-xl:text-sky-500'>E-Commerce Web App</p>
          <div className="proj-idea flex flex-col gap-2 text-justify text-white tracking-wide leading-7 pr-6 overflow-y-auto box-content max-xl:text-black max-xl:text-sm">
          
          <p>For my next project, I’m planning to build a full-stack e-commerce web application using the MERN stack. This app will likely include both a frontend and backend with several key features.</p>

          <p>The user interface will be built with React, where users can browse products, view details, apply filters, and add items to their cart. It will focus on being responsive and user-friendly.</p>

          <p>I’ll develop the backend using Node.js and Express to manage the business logic, handle product data, and process orders. API endpoints will be set up for interacting with the database and frontend.</p>

          <p>I’m planning to implement user authentication where users can sign up, log in, and manage their profiles. Security will be a priority, so features like JWT or session management will be used to protect user sessions.</p>

          <p>Logged-in users will have their sessions maintained, allowing them to keep items in their cart or return to previous orders even after logging out.</p>

          <p>MongoDB will be used to store data such as user profiles, product information, and order histories. This will ensure that the app can scale efficiently and retrieve data quickly.</p>

          <p>As the project progresses, I might include features like payment integration, real-time order tracking, and an admin panel for inventory and order management.</p>
            
          </div>

      </div>
    </div>
  );
};

export default EndSection;
