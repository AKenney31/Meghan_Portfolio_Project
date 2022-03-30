import React from 'react'

function Inside() {
  return (
    <div className='flex flex-col justify-center p-2 w-3/4'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/6UMrsMzVbm8" title="YouTube video player" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen className='w-full'></iframe>
      <div>
        <p className='font-bold text-2xl'>inside.</p>
        <p>Spring 2020- Advanced Production FINAL Project, made with Premiere</p>
        <p className='font-light border-b-2 border-gray-600'>The only requirement for this video was that it had to be over five minutes long, other than that, 
          the class had full creative liberty as to what the video was about and how it was created. Since this was created right after the COVID-19 lockdown, 
          the focus of the plot was on the isolation and monotony of quarantine and used only equipment that I had at home.</p>
      </div>
    </div>
  );
}

function Sarah() {
    return (
      <div className='flex flex-col justify-center p-2 w-3/4'>
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/Unfg9i8oPjQ" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen className='w-full'></iframe>
        <div>
          <p className='font-bold text-2xl'>What Sarah Said- Music Video</p>
          <p>Fall 2018- Video Production Project, made with Premiere</p>
          <p className='font-light border-b-2 border-gray-600'>This assignment was one of my first real video creations. The class was tasked with creating a unique music video for an existing song 
          that had a story and a plot that flowed through the whole video. The song used in this video is What Sarah Said by Death Cab for Cutie and the idea behind the 
          video is that a man’s girlfriend gets into a car accident and ends up passing away. He has to deal with the grief from this event and the fact that the last time 
          they spoke they were in a huge fight. The two most common effects added to this video were video transitions (namely Cross-Dissolves) and color grading.</p>
        </div>
      </div>
    );
  }

  function JS() {
    return (
      <div className='flex flex-col justify-center p-2 w-3/4'>
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/KV2sPY9hOzA" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen className='w-full'></iframe>
        <div>
          <p className='font-bold text-2xl'>Junior Senior Reveal Video</p>
          <p>Spring 2020- A Client Project, made with Premiere</p>
          <p className='font-light border-b-2 border-gray-600'>For this video, a partner and I were tasked with creating an elegant venue reveal for a school event. 
          Drone shots as well as regular DSLR shots were used in the creation of this video. </p>
        </div>
      </div>
    );
  }

  function Traveling() {
    return (
      <div className='flex flex-col justify-center p-2 w-3/4'>
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/fn0f7Oyp3Vc" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen className='w-full'></iframe>
        <div>
          <p className='font-bold text-2xl'>The Fun House- Traveling Tap</p>
          <p>Fall 2020- A Client Project/Senior Seminar Project, made with Premiere</p>
          <p className='font-light border-b-2 border-gray-600'>This project was a part of my senior seminar client project with local Central PA radio station Fun 101.3. 
          Our group was asked to create a series of “fun” videos, called “The Fun House”,  in an attempt to create better name recognition for the station. 
          This particular video was shot on location at The Traveling Tap and features the DJs in a cocktail-making competition.
          </p>
        </div>
      </div>
    );
  }

  function Brew() {
    return (
      <div className='flex flex-col justify-center p-2 w-3/4'>
        <iframe 
        width="560" height="315" 
        src="https://www.youtube.com/embed/5S2neaP1h7Q" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen className='w-full'></iframe>
        <div>
          <p className='font-bold text-2xl'>3rd Annual Brew-chanan Fest</p>
          <p>Fall 2019- Broadcast News Project, made with Premiere</p>
          <p className='font-light border-b-2 border-gray-600'>The Broadcast News class at Etown College focuses on how to create news packages, voiceovers, VO/SOT’s 
          (voiceover/sound on tape), and more so that students can feel comfortable going into possible news professions in the future. This is an example of a news 
          package where I covered ESPN Radio’s 3rd Annual Brew-chanan Fest in Buchanan Park in Lancaster City, PA. There are multiple SOTs included in this package.</p>
        </div>
      </div>
    );
  }

export {Inside, JS, Brew, Sarah, Traveling};