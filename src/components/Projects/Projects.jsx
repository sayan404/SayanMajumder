import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import './Projects.css'
import 'aos/dist/aos.css'
import Header from '../Layout/Header'
import ProDoneTemplate from '../../assets/ProDoneTemplate.png'
import YumazyThumbnail from '../../assets/YumazyThumbnail.png'
import PeerAiThumbnel from '../../assets/PeerAiThumbnel.png'
import gdscThumbnel from '../../assets/gdscThumbnel.png'
import GetSetGoThumbnail from '../../assets/GetSetGoThumbnail.png'

import ProjectCrds from './ProjectCrds'
const PresonalProjects = [
  {
    name: 'ProDone',
    description: "An ecommarce web application specially made for college students",
    githubLink: 'https://github.com/sayan404/ProDone',
    deployedLink: 'prodone.onrender.com',
    img: ProDoneTemplate,
    techStack: [
      'ReactJs', 'ReduxJs', 'REST API', 'NodeJs', 'ExpressJs', 'MongoDB'
    ]
  },
  {
    name: 'Peer.Ai',
    description: "An extension that empowers your browsing experience with voice navigation, Q&A, and compression",
    githubLink: 'https://github.com/sayan404/Yumazy',
    deployedLink: '',
    img: PeerAiThumbnel,
    techStack: [
      'ReactJs', 'Web APIs', 'Webpack',
    ]
  },
  {
    name: 'Yumazy',
    description: "An Application that provides amaxing recipes of foods",
    githubLink: 'https://github.com/sayan404/Yumazy',
    deployedLink: 'yumazy-8eym.vercel.app',
    img: YumazyThumbnail,
    techStack: [
      'ReactJs', 'EDAMAM APIs'
    ]
  },
  {
    name: 'Get-Set-Go',
    description: "The one stop solution to experience the rich heritage and culture of India",
    githubLink: 'https://github.com/sayan404/Get-Set-Go',
    deployedLink: 'niloysikdar.github.io/Get-Set-Go',
    img: GetSetGoThumbnail,
    techStack: [
      'HTML', 'CSS' , 'JavaScript' , 'APIs'
    ]
  },
  {
    name: 'GDSC-JGEC-Promo',
    description: "A website that promotes GDSC-JGEC on the college.",
    githubLink: 'https://github.com/sayan404/gdsc-jgec-promo',
    deployedLink: 'gdsc-jgec-promo.vercel.app',
    img: gdscThumbnel,
    techStack: [
      'ReactJs'
    ]
  }
]

const Projects = () => {
  const [highLight, setHighLight] = useState('Projects')
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Header highLight={highLight} />
      <div className='projectMainContainer' data-aos="fade-right"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">
        <p className='tag_line special'>{'<'}Projects{'/ >'}</p>

        <div className='bottom-cntainer'> {
          PresonalProjects.map((data , idx) => {
            return (<ProjectCrds key={idx} techStack={data.techStack} img={data.img} deployedLink={data.deployedLink} githubLink={data.githubLink} description={data.description} name={data.name}/>)
          })
        }
        </div>
      </div>

    </>
  )
}

export default Projects