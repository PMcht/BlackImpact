import React from 'react'
import './About.css'

const AboutAttribute = [{
  id: 0,
  title: 'Data Scientist',
  description: 'Worked at Artefact for a year on AccorHotel\'s SEA accounts.',
  img: '/images/logos/artefact.png',
  list: [ {
        id: 1,
        text: 'In charge of AccorHotel Southern Europe & IMEAT accounts.'
      }, {
        id: 2,
        text: 'Automated some ressource-heavy tasks with either Excel VBA or Python.'
      }, {
        id: 3,
        text: 'Generated +15% traffic & +10% CVR in 6 months on IMEAT accounts.'
      }
  ]
  }, {
  id: 1,
  title: 'Marketing Student',
  description: 'Enrolled in MBA diploma at Trinity College Dublin for a year.',
  img: '/images/logos/tcd-logo.svg',
  list: [{
        id: 0,
        text: 'Graduated with honours in 2021.'
      }, {
        id: 1,
        text: 'Majored in Data-Analysis and Web-Development.'
      }, {
        id: 2,
        text: 'Thesis on YouTube\'s videos fame repeatability.'
      }
    ]
  }, {
  id: 2,
  title: 'Marketing Manager',
  description: 'Traditional & Digital Marketing for La Tyrolienne.',
  img: '/images/logos/tyrolienne.png',
  list: [{
        id: 0,
        text: 'Started as an intern, became marketing manager in a small business in 2020.'
      }, {
        id: 1,
        text: 'I handled Google Ads campaigns and traditional marketing.'
      }, {
        id: 2,
        text: 'I updated the company\'s website and became accustomed with social media.'
      }
    ]
  }];


export default function About() {
  const listItems = AboutAttribute.map( (about, index) => (

        <div className='AboutBlock flex flex-h' key={about.id}>

          <img src={`${about.img}`} alt={'AboutIMG'} className='AboutImg' />

          <div className='AboutLine' />

          <p className='AboutTitle'>{about.title}</p>
          <p>{about.description}</p>

          <div className='AboutLine' />

          <p className='highlights'>Highlights :</p>

          <ul className='listAbout'>
          
              {about.list?.map( (test, index) => (
                        
                      <li className='listItem' key={index}><p>{test.text}</p></li>
                      
                  ))}

          </ul>

        </div>
  ));
  return (
    <section id="about" className='flex flex-h'>
            
    <h2 className='trigger'>

        <div className='word'>
            <label className='char toShow'>A</label>
            <label className='char toShow'>b</label>
            <label className='char toShow'>o</label>
            <label className='char toShow'>u</label>
            <label className='char toShow'>t</label>
        </div>

    </h2>
    <p className='AboutHeader'>I started as a data scientist and SEA Specialist, got good at Microsoft Excel fast. Having some knowledge in programming, I decided to switch my career and enroll in a OpenClassroom diploma.</p>

      <div className='aboutGrid'>

        {listItems}

      </div>

      <div className='border' />

    </section>

  );
}