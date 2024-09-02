import React from 'react';

const MainContent = () => {
  return (
    <main className="p-8">
      <section className="about mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>Hi!, I am Lin a second-year student from Assumption University, majoring in IT. I love softwares and games.</p>
      </section>
      <section className="social-resume-container grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <section className="languages">
          <h2 className="text-2xl font-semibold mb-4">Languages I use</h2>
          <ul className="list-disc list-inside">
            <li><i className="fa-brands fa-python"></i> Python</li>
            <li><i className="fa-brands fa-java"></i> Java</li>
            <li><i className="fa-brands fa-js"></i> JavaScript</li>
          </ul>
        </section>
        
        <section className="social-links text-white">
          <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
          <ul className="space-y-2">
            <li><a href="https://github.com/Reon1917" target="_blank" className="tooltip flex items-center space-x-2">
              <i className="fa-brands fa-github"></i>
              <span className="tooltiptext">Github</span>
            </a></li>
            
            <li><a href="https://www.linkedin.com/in/lin-myat-phyo-b872b1217/" target="_blank" className="tooltip flex items-center space-x-2">
              <i className="fa-brands fa-linkedin"></i>
              <span class="tooltiptext">Linkedin</span>
            </a></li>
            
            <li><a href="https://www.instagram.com/re0n1917/" target="_blank" className="tooltip flex items-center space-x-2">
              <i className="fa-brands fa-instagram"></i>
              <span className="tooltiptext">Instagram</span>
            </a></li>
          </ul>
        </section>
        
        <section className="resume">
          <h2 className="text-2xl font-semibold mb-4">Resume</h2>
          <a href="/resources/Resume.pdf" target="_blank" className="Resume-downloadBtn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Download my Resume</a>
        </section>
      </section>
      
      <div className="projects-container text-white">
        <h1 className="text-center text-3xl font-bold mb-8">My Practice Projects</h1>
        <div className="flex flex-wrap -mx-4">
          <div className="project-card size-96  bg-gray-700 shadow-md rounded-lg overflow-hidden mb-8 mx-4">
            <div className="project-image bg-cover bg-center h-48" style={{ backgroundImage: "url('/projectImg/weatherApp.png')" }}></div>
            <div className="project-info p-4">
              <h3 className="text-xl font-semibold mb-2">Weather App</h3>
              <p>I used this project get experience utilizing API.</p>
            </div>
          </div>
          <div className="project-card size-96 bg-gray-700 shadow-md rounded-lg overflow-hidden mb-8 mx-4">
            <div className="project-image bg-cover bg-center h-48" style={{ backgroundImage: "url('/projectImg/loginPage.png')" }}></div>
            <div className="project-info p-4">
              <h3 className="text-xl font-semibold mb-2">Login Page</h3>
              <p>This project helped me understand HTML CSS better.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;