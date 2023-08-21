import React, { useEffect, useState } from 'react'
/* "Ubuntu Mono",monospace */
import Header from '../Layout/Header'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Education.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  const [highLight, setHighLight] = useState('Education')
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Header highLight={highLight} />
      <div className='educationMainContainer' data-aos="fade-right" data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">
        <p className='tag_line special'>{'<'}Education {'/ >'}</p>
        <Timeline position="alternate">
          <TimelineItem >
            <TimelineSeparator >
              <SchoolIcon sx={{ fontSize: 35, color: '#00CDFE' }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent color="text.secondary"><div className='qualification'>
              <p>B.Tech, CSE (2021 - 2025)</p>
              <p className='educQualidfic'>◉ Currently pursuing my B.Tech in CSE from Jalpaiguri Government Engineering College, 8.17 CGPA till now.
              </p>
              <p className='educQualidfic'>
                ◉ Highly active in the domains of Web.</p>
            </div></TimelineContent>
          </TimelineItem>
          <TimelineItem >
            <TimelineSeparator >
              <SchoolIcon sx={{ fontSize: 35, color: '#00CDFE' }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent color="text.secondary"><div className='qualification-1'>
              <p>12th Board, PCMB
                (2017 - 2019)</p>
              <p className='educQualidfi-1'>◉ Finished 12th board exam from Bargachia Union Priyanath Pathsala (H.S.) with 86.4% marks in Physics , Chemistry , Mathematics and Biology.
              </p>
            </div></TimelineContent>
          </TimelineItem>
          <TimelineItem >
            <TimelineSeparator >
              <SchoolIcon sx={{ fontSize: 35, color: '#00CDFE' }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent color="text.secondary"><div className='qualification'>
              <p>10th Board (2017)</p>
              <p className='educQualidfic'> ◉ Finished 10th board exam from Bargachia Union Priyanath Pathsala (H.S.) with 82.4% marks.
              </p>
            </div></TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  )
}

export default Education