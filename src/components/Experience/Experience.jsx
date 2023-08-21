import React, { useEffect, useState } from 'react'
/* "Ubuntu Mono",monospace */
import Header from '../Layout/Header'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Experience.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
    const [highLight, setHighLight] = useState('Experience')
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <Header highLight={highLight} />
            <div className='educationMainContainer' data-aos="fade-right" data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">
                <p className='tag_line special'>{'<'}Experience {'/ >'}</p>
                <Timeline position="alternate">
                    <TimelineItem >
                        <TimelineSeparator >
                            <SchoolIcon sx={{ fontSize: 35, color: '#00CDFE' }} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent color="text.secondary"><div className='qualification'>
                            <p>Google Developer Student Clubs - JGEC (2023 - 2024)</p>
                            <p className='educQualidfic'>◉ Orchestrated and guided a team of 15 student developers as the Web Development Lead for Google DSC -
                                JGEC, resulting in a 25% increase in website traffic and a 20% boost in user engagement.
                            </p>
                        </div></TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </>
    )
}

export default Education