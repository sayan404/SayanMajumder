import React, { useEffect, useState } from 'react'
import Header from '../Layout/header'
import AOS from 'aos'
import './Skills.css'
import 'aos/dist/aos.css'
import personal_img1 from '../../assets/personal_img1.jpg'
import { Link } from 'react-router-dom'
const Skills = () => {
    const [highLight, setHighLight] = useState('Skills')
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
        <Header highLight={highLight} />
            <div className='homeContainer' data-aos="fade-right"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">
                <div className='leftHomeContainer'>
                    <p className='p-first-child'>{'<'}Technical Skills {'/ >'} </p>
                    <div className='innerLinks'>
                        <Link to='https://www.cprogramming.com/'><img  className='tech_img' src='https://profilinator.rishav.dev/skills-assets/c-original.svg'alt="C"/></Link>
                        <Link to='https://www.cplusplus.com/'><img  className='tech_img' src='https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg' alt="cplusplus"/></Link>
                        <Link to='https://www.python.org/'><img  className='tech_img' src='https://profilinator.rishav.dev/skills-assets/python-original.svg' alt="Python"/></Link>
                        <Link to='https://en.wikipedia.org/wiki/HTML5'><img  className='tech_img' src='https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg'/></Link>
                        <Link to='https://www.w3schools.com/css/'><img  className='tech_img' src='https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg'/></Link>
                        <Link to='https://www.javascript.com/'><img  className='tech_img' src='https://profilinator.rishav.dev/skills-assets/javascript-original.svg'alt="JavaScript"/></Link>
                        <Link to='https://jquery.com/'><img  className='tech_img' src='https://profilinator.rishav.dev/skills-assets/jquery.png'alt="jQuery" /></Link>
                        <Link to='https://reactjs.org/'><img  className='tech_img' src='https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg'alt="React"/></Link>
                        <Link to='https://redux.js.org/'><img  className='tech_img' src='https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png?20180308172936'alt="Redux"/></Link>
                        <Link to='https://nodejs.org/'><img  className='tech_img' src='https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg'alt="Node.js" /></Link>
                        <Link to='https://expressjs.com/'><img  className='tech_img' src='https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg'alt="Express.js" /></Link>
                        <Link to='https://www.mongodb.com/'><img  className='tech_img' src='https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg'alt="MongoDB" /></Link>
                        <Link to='https://firebase.google.com/'><img  className='tech_img' src='https://www.gstatic.com/devrel-devsite/prod/vf320caf77a0228c9ecd0f4fd8dac09ddf6ffc8cefabd3dae3c0b3db9d912735c/firebase/images/touchicon-180.png'alt="Firebase" /></Link>
                        <Link to='https://webpack.js.org/'><img  className='tech_img' src='https://webpack.js.org/icon-pwa-512x512.934507c816afbcdb.png'alt="WebPack" /></Link>
                        <Link to='https://github.com/'><img  className='tech_img' src='https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg'alt="Git" /></Link>
                        <Link to='https://restfulapi.net/'><img  className='tech_img' src='https://zooz.github.io/predator/images/restapi.png'alt="RESTAPI" /></Link>
                        <Link to='https://www.canva.com/'><img  className='tech_img' src='https://logodownload.org/wp-content/uploads/2020/11/canva-logo-0.png'alt="Canva" /></Link>
                        <Link to='https://mui.com/'><img  className='tech_img' src='https://profilinator.rishav.dev/skills-assets/mui.png'alt="Mui" /></Link>
                        <Link to='https://postman.com'><img  className='tech_img' src='https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg'alt="postman" /></Link>
                        <Link to='https://docs.microsoft.com/en-us/powershell/'><img  className='tech_img' src='https://profilinator.rishav.dev/skills-assets/powershell.png' alt="PowerShell" /></Link>
                        <Link to='https://www.gnu.org/software/bash/'><img  className='tech_img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/2048px-Bash_Logo_Colored.svg.png' alt="Bash" /></Link>
                        <Link to='https://code.visualstudio.com/'><img  className='tech_img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png' alt="VS Code" /></Link>
                       
                        
                    </div>
                </div>
                <div className='rightHomeContainer'>
                    <img src={personal_img1} className='personal_img'></img>
                </div>
            </div>

        </>
    )
}

export default Skills