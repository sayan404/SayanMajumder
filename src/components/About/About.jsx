import React, { useEffect, useState } from 'react'
import './About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import personal_img from '../../assets/personal_img.png'
import myResume from '../../assets/MyResume.pdf'
import Header from '../Layout/header'
import { Link } from 'react-router-dom';
const About = () => {
  const [highLight, setHighLight] = useState('About')
  useEffect(() => {
    AOS.init()
  }, [])

  const handleDownload = () => {
    fetch(myResume)
      .then(response => response.blob())
      .then(blob => {
        const blobURL = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = blobURL;
        a.download = 'Sayan_Majumder_Resume.pdf'; // Set the desired file name
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(blobURL);
      });
  };

  return (
    <>
      <Header highLight={highLight} className='navAdjust'/>
      <div className='homeContainer' data-aos="fade-right"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">
        <div className='leftHomeContainer'>
          <p className='p-first-child'>{'<'}Welcome{'/ >'}</p>
          <div className='innerPTags'>
            <p>
              <span className='first-child'>I'm a passionate full-stack web developer from India, dedicated to crafting seamless digital experiences. With expertise in both front-end and back-end development, I turn creative ideas into functional websites and applications. Let's collaborate to bring your digital dreams to life!
              </span>
            </p>
          </div>
          <div className='social_handels'>
          <Link to="https://github.com/sayan404"><GitHubIcon sx={{fontSize : 36 , color : 'black'}} /></Link>
          <Link to="https://www.linkedin.com/in/sayan404/"><LinkedInIcon sx={{fontSize : 36}}/></Link>
          <Link to="https://www.instagram.com/_sayan404_/"><InstagramIcon sx={{fontSize : 36 ,  color : 'red'}}/></Link></div>
          <Button variant="contained" onClick={handleDownload}
          sx={{marginTop : "3vh"  , fontSize : 20}}
          endIcon={<ArrowCircleDownOutlinedIcon />}>
            Resume
          </Button>
        </div>
        <div className='rightHomeContainer'>
          <img src={personal_img} className='personal_img'></img>
        </div>
      </div>
    </>
  )
}

export default About