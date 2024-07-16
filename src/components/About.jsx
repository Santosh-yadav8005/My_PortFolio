import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Santosh, I am a web developer, and i designs, builds, and maintains websites, ensuring functionality, aesthetics, and user experience. We use coding languages like HTML, CSS, and JavaScript to create responsive and dynamic sites, often collaborating with designers and content creators to bring digital visions to life.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
           <h1 className="text-red-600 font-bold" > BCA</h1> 
          I have Completed Bachlor of Computer Application from Makhanlal Chaturvedi University (Bhopal, M.P.) <br />
          <h1 className="text-red-600 font-bold" > 12 <sup>th</sup></h1>
          I have compledet 12 <sup>th</sup> from UP Board with 79.80% in 2021 <br />
          <h1 className="text-red-600 font-bold" > 10 <sup>th</sup></h1>
          I have compledet 10 <sup>th</sup> from UP Board with 81.50% in 2019 <br />
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React Js</li>
          </ul>
        </span>
       
      </div>
    </div>
  );
}

export default About;
