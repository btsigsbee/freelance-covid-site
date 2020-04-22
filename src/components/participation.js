import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import pic from '../IMG_9550.jpg';
import React, {Component, } from 'react';
import {Row, Col, Image, Button} from 'react-bootstrap';
class Participation extends Component {
    render(){
        return(
            <div className='container h-100'>
               <h1 className=' font-signika border-thick pb-1 text-center size-up font-color-sec h1'>Participating in the COVID-19 Parenting and Work Study</h1>
               <Row><Col className='col-sm-6 font-mont'><p>Follow the link below to complete a 2-minute survey. Your answers
will help us determine whether or not you are eligible to take part in the study. If you are not
eligible, you will be informed of this while taking the survey. If you are eligible, you will be
asked to share your contact information with us, so that we can set up an interview.</p>
<text>We will contact you to set up a date and time to complete an interview with you. Interviews
can be scheduled whenever is most convenient for you, day or night. They can be completed
by phone or online, using Zoom or Skype.</text>



</Col><Col><Image rounded fluid className='' src={pic}></Image></Col></Row>
<Row><Col className='col-sm-6 font-mont'><text className='' ><text className='font-color-sec font-weight-bold'>All participants will be paid $25 as a thank you for taking part in the interviews</text>. Participants may choose whether
to be paid by check or gift card, and these will be mailed to you within 4 weeks of completing
the interview.
<text className='font-color-sec font-weight-bold'> If both partners take part in the study, you will each receive $25. All information collected is private and confidential</text></text>

<br/><br/><p className='font-mont'>Ideally, we want to interview people as soon as possible. But if you do not feel you are able to
complete the interview while working and parenting from home, we understand! We can
schedule an interview with you later in the year, when life has hopefully returned to “normal”!
Just let us know!</p>
<div></div></Col><Col><text className='font-mont'>During the interview, we will ask you a series of open-ended questions. There are no right or
wrong answers; we are just interested in hearing your thoughts, feelings, and experiences
regarding COVID-19 and how you have managed to balance work and parenting demands. The
interviews are variable in length, but typically last between 60-90 minutes. Most people find the
interview enjoyable and interesting, and they appreciate the opportunity to reflect on their
experiences. You do not have to ask any question you don’t want to and can stop the interview at
any time. All information you share with us will be kept strictly confidential. This means it won’t
be shared with anyone beyond the research team – including your partner if they also decide to
participate.</text></Col></Row>
<Button size='lg' href='https://nd.qualtrics.com/jfe/form/SV_1zT002Tiaq6RNK5'className=' col-sm-6 font-mont btn-block participation-btn mb-5 font-weight-bold'>Eligibility Survey</Button> 
            </div>
        );
    }
}
export default Participation;