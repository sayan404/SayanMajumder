import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import CallIcon from '@mui/icons-material/Call'
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import InfoIcon from '@mui/icons-material/Info'
import EventIcon from '@mui/icons-material/Event'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import Backdrop from '@mui/material/Backdrop'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom'
const Header = ({ highLight }) => {
  const [open, setOpen] = useState(false) // Initialize the speed dial as closed
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    AOS.init()
  }, [])

  const navigate = useNavigate()
  const actionsForLoggedInUsers = [
    { icon: <InfoIcon />, name: 'About', func: about },
    { icon: <EventIcon />, name: 'Skills', func: Skills },
    { icon: <AccountTreeIcon />, name: 'Projects', func: projects },
    { icon: <Diversity3Icon />, name: 'Education', func: Education },
    { icon: <CallIcon />, name: 'Contact', func: contact },
  ]

  function about() {
    navigate('/')
  }
  function Skills() {
    navigate('/skills')
  }
  function projects() {
    navigate('/projects')
  }
  function Education() {
    navigate('/education')
  }
  function contact() {
    navigate('/contact')
  }

  const showMenuHandler = () => {
    setOpen(!open) // Toggle the state of the speed dial
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {windowWidth <= 600 ? (<> <Backdrop open={open} style={{ zIndex: "4" }} />
        <img src={logo} className='logo mediaquery' />
        <Box sx={{ height: '100%', transform: 'translateZ(0px)', flexGrow: 1 }} className='speedDial'>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            onClick={showMenuHandler}
            open={open}
            direction='down'
          >
            {actionsForLoggedInUsers.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={action.func}
              />
            ))}
          </SpeedDial>
        </Box>
      </>) : (<div className='headerMainContainer' data-aos="fade-right"
        data-aos-easing="ease-in-back"
        data-aos-offset="0">
        <div className='leftSecton'>
          <img src={logo} className='logo' />
        </div>
        <div className='rightSecton'>
          <ul>
            <Link to={'/'}><p className={(highLight === 'About') ? "About" : ""} >About</p></Link>
            <Link to={'/skills'}><p className={(highLight === 'Skills') ? "Skills" : ""} >Skills</p></Link>
            <Link to={'/projects'}><p className={(highLight === 'Projects') ? "Projects" : ""} >Projects</p></Link>
            <Link to={'/education'}><p className={(highLight === 'Education') ? "Education" : ""} >Education</p></Link>
            <Link to={'/contact'}><p className={(highLight === 'Contact') ? "Contact" : ""} >Contact</p></Link>
          </ul>
        </div>
      </div>)
      }
    </>
  )
}

export default Header