import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { Link } from 'react-router-dom';
import './ProjectCards.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const ProjectCrds = ({ techStack, img, deployedLink, githubLink, description, name }) => {
    const colors = ['red', 'blue' , 'green' , '#7F00FF' , 'orange' , '#330066' , '#FFBA86']
    useEffect(() => {
        AOS.init()
      }, [])
    
    return (
        <>
            <div className="card" data-aos="flip-right" data-aos-duration="2000" ata-aos-delay="100" >
                <div className="content">
                    <img className="profile" src={img} />
                    <p className='name'>{name}</p>
                    <p className='description'>{description}</p>
                    <div className='techstackConponent'>
                        {techStack ?
                            (techStack.map((tech , idx)=> {
                                return <p key={idx} style={{ backgroundColor : colors[idx] , color : 'white' , gap : "20px" , width : '30%'}} className='techstacks'>{tech}</p>
                            })) : <></>
                        }
                    </div>
                    <div className='buttons' >
                        <Link to={githubLink}><Button variant="outlined" sx={{ color: 'black' }} startIcon={<GitHubIcon />}>
                            Github
                        </Button>
                        </Link>
                        {
                            deployedLink ? <Link to={deployedLink}> <Button variant="outlined" sx={{ color: 'blue' }} startIcon={<DirectionsRunIcon />}>
                                Live Here
                            </Button>
                            </Link>
                                : <></>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCrds