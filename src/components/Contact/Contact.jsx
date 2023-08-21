import React, { useEffect, useState, useRef } from 'react'
import Header from '../Layout/header'
import './Contact.css'
import emailjs from '@emailjs/browser';
import AOS from 'aos'
import 'aos/dist/aos.css'
import SendIcon from '@mui/icons-material/Send';
import newsletter from '../../assets/newsletter.svg'
import { Button } from '@mui/material';
const Contact = () => {
  const [highLight, setHighLight] = useState('Contact')
  const [senderName, setSenderName] = useState('')
  const [senderEmail, setSenderEmail] = useState('')
  const [senderSubject, setSenderSubject] = useState('')
  const [senderMessage, setSenderMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, import.meta.env.VITE_YOUR_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setSenderName('');
        setSenderEmail('');
        setSenderSubject('');
        setSenderMessage('');
      }, (error) => {
        console.log(error.text);
      });
  };

  const form = useRef();
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Header highLight={highLight} />
      <div className='contactMainContainer' data-aos="fade-right" data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">
        <p className='tag_line special'>{'<'}Contact Me {'/ >'} </p>
        <div className='leftContact'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='formName'>
              <p>Name</p>
              <input type='text' name='user_name' value={senderName} placeholder='Enter Your Name' onChange={(e) => setSenderName(e.target.value)} />
            </div>
            <div className='formEmail'>
              <p>Email</p>
              <input type='email' name='user_email' value={senderEmail} placeholder='Enter Your Email' onChange={(e) => setSenderEmail(e.target.value)} />
            </div>
            <div className='formSubject'>
              <p>Subject</p>
              <input type='text' name='subject' value={senderSubject} placeholder='Enter Your Subject' onChange={(e) => setSenderSubject(e.target.value)} />
            </div>
            <div className='formSubject'>
              <p>Message</p>
              <input type='text' name='message' contenteditable value={senderMessage} placeholder='Enter Your Message' onChange={(e) => setSenderMessage(e.target.value)} />
            </div>
            <div className='moreEvents'>
              <Button type='submit' endIcon={<SendIcon />} variant='contained' sx={{ width: '10vw', height: '7vh', padding: ' 2vh 10vh', margin: '2vh auto', font: '2.5vh JetBrains Mono' }}>Submit</Button>
            </div>
          </form>
          <img src={newsletter} className='imageNewsletter' />
        </div>
      </div>
    </>
  )
}

export default Contact