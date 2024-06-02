import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import one from '../../assets/timeline1.png'
import two from '../../assets/timeline2.png'
import three from '../../assets/timeline3.png'
import four from '../../assets/timeline4.png'

const AboutTimeline = () => {
  return (
    <div className='AboutTimeline'>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent >
          <div className='timelineContent'>
            <div className='timelineHead'>Our Approach</div>
            <div className='text'>We believe that effective staffing solutions begin with a deep understanding of your unique needs and challenges. That's why our process starts with a consultative approach, where we take the time to learn about your company culture, operational goals, and staffing requirements. <br /> <br />Through this collaborative effort, we craft bespoke manpower solutions that seamlessly integrate with your existing workforce, ensuring a cohesive and productive team environment.</div>
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator style={{marginTop:"0px"}}>
          <TimelineDot/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <div className='timelineImgDiv'>
                <img src={one} />
            </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent >
          <div className='timelineContent'>
            <div className='timelineHead'>Rigorous Screening</div>
            <div className='text'>Recognizing that your staff's caliber directly impacts your business's prosperity, we implement a meticulous screening and assessment regimen.  <br /> <br />Each candidate we present undergoes rigorous evaluation by our team of experts, assessing their skills, experience, and qualifications to ensure they possess the ideal blend of expertise and cultural alignment to enrich your organization.</div>
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <div className='timelineImgDiv'>
                <img src={two} />
            </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent >
          <div className='timelineContent'>
            <div className='timelineHead'>Ongoing Support</div>
            <div className='text'>Our commitment to your triumph extends beyond initial placement. We prioritize cultivating enduring partnerships with our clients, offering continuous support and guidance to facilitate a seamless integration of our staff into your team. <br /> <br />From tackling any arising challenges to nurturing open communication and feedback channels, we stand by you every step of the way, ensuring a seamless and triumphant staffing journey.</div>
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <div className='timelineImgDiv'>
                <img src={three} />
            </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent >
          <div className='timelineContent'>
            <div className='timelineHead'>Our Promise</div>
            <div className='text'>At Aadmiwala, we take pride in our capacity to deliver staffing solutions tailored precisely to your needs, executed efficiently, and steadfast in their outcomes. Our dedication to excellence propels us to surpass your expectations, contributing significantly to the advancement and prosperity of your business.</div>
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <div className='timelineImgDiv'>
                <img src={four} />
            </div>
        </TimelineContent>
      </TimelineItem>
      {/* <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          12:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          9:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem> */}
    </Timeline>
    </div>
  );
}

export default AboutTimeline