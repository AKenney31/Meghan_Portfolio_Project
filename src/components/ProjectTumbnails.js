import React from 'react'
import Project from './Project'
import ProjectGD from './ProjectGD'
import ProjectPDF from './ProjectPDF'
import Projects from '../Projects/Project_embeds'
 
function Arch() {
  return (
    <Project emb={Projects.arch_embed} caption={'This photograph was taken of Steinman Center at Elizabethtown College, the Fine Arts and Communications Building. The columns on this building give it a unique look compared to other buildings on the campus, giving it a democratic style and a regal feel.'} 
    title={'STEINMAN'} date={'Fall 2019- Digital Photography'} method={'Lightroom'}/>
  );
}

function Lamp() {
  return (
    <Project emb={Projects.lamp_embed} caption={''} title={'ETOWN AT NIGHT'} date={'Fall 2019- Digital Photography'} method={'Lightroom, and Photoshop'}/>
  );
}

function Nah() {
  return (
    <Project emb={Projects.nah_embed} caption={''} title={'Sarah ‘21'} date={'Fall 2019- Digital Photography'} method={'Lightroom'}/>
  );
}

function St3() {
  return (
    <Project emb={Projects.studio_3_embed} caption={''} title={'Emma ‘21'} date={'Fall 2019- Digital Photography'} method={'Lightroom'}/>
  );
}

function Artistic() {
  return (
    <Project emb={Projects.artistic_embed} caption={''} title={'BEFORE, DURING, AND AFTER'} date={'Fall 2019- Digital Photography'} method={'Lightroom'}/>
  );
}

function Urban() {
  return (
    <ProjectGD emb={Projects.kenney_urban_embed} caption={'This project came with an interesting new Photoshop tool, the word brush. We had to be able to make words into new brushes and use these brushes to accent the collage. I took all but one of these photographs in London, England in May 2019.'} 
    title={'URBAN COLLAGE'} date={'Spring 2020- Advanced Digital Arts Project'} method={'Photoshop'}/>
  );
}

function Logo() {
  return (
    <ProjectPDF emb_d={Projects.logo_demo_embed} emb={Projects.logo_embed} caption={'This is the first time that I had ever used Illustrator. Where it did have its challenges, I was proud with what I was able to produce for our client project! We had meetings with the clients so that they could tell us what they were wanting us to produce for them and they went through each person’s designs until they picked their favorites. REQUIREMENTS: We had to provide a logo for the client that could be used on signage and official paperwork (meaning it had to be able to look good in grayscale). The students also created business cards for the client that doubled as appointment cards on the back. Finally, students created a pocket folder for the practice to give out paperwork in which also doubled as an info booklet.'} 
    title={'LOGO PROJECT'} date={'Fall 2019- Introduction to Graphic Design CLIENT Project'} method={'Illustrator'}/>
  );
}

function Vinyl() {
  return (
    <ProjectPDF emb_d={Projects.vinyl_demo_embed} emb={Projects.vinyl_embed} caption={'The final project for my Introduction to Graphic Design class was to create a “greatest hits” vinyl cover, dust cover, and record sticker for an artist that started making music before the 2000’s. This project used Photoshop for all photo editing but was fully assembled using InDesign. We had fairly free reign over the design and I chose to combine elements from prior U2 album themes to create their greatest hits cover. The pictures used on the front are both press photos from The Joshua Tree while the color pattern belongs to The Unforgettable Fire, and so on. This is my favorite project to date, it took many hours of work to get it perfect but I am very pleased with how it turned out.'} 
    title={'VINYL PROJECT'} date={'Fall 2019- Introduction to Graphic Design FINAL Project'} method={'Photoshop, InDesign'}/>
  );
}

function Rs1() {
  return (
    <ProjectPDF emb_d={Projects.rs_1_embed} emb={Projects.rs_embed} caption={'This project was for my first ever graphic design class. We had to make our own edition of an existing magazine, including all original text. The cover image was edited in Photoshop using the magnetic lasso tool as well as a drop shadow. All text was added in InDesign. This project utilized a grid system as well as many different lines.'} 
    title={'ROLLING STONE MAGAZINE'} date={'Spring 2018- Visual Communications FINAL Project'}
    method={'Photoshop, InDesign'}/>
  );
}

function Proj4() {
  return (
    <ProjectPDF emb_d={Projects.proj_4_demo_embed} emb={Projects.proj_4_embed} caption={'This is a new example of a magazine spread from my final graphic design class. We had to create a lifestyle magazine, mine was entitled “Lancaster Lifestyle Magazine”. This magazine includes layouts that could be seen in a professional magazine, including an article called “Where to Camp in Your Area” that I wrote for Susquehanna Style Magazine during my internship in the spring of 2020. For this article in particular, I created an infographic to go along with this article as well.'} 
    title={'MAGAZINE LAYOUT'} date={'Spring 2020- Advanced Digital Arts Project'} method={'Photoshop, InDesign, & Illustrator'}/>
  );
}


export {Arch, Lamp, Nah, St3, Artistic, Urban, Logo, Vinyl, Rs1, Proj4};