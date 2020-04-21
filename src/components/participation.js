import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import pic from '../man-lookingdown.jpg';
import React, {Component, } from 'react';
import {Row, Col, Image, Button} from 'react-bootstrap';
class Participation extends Component {
    render(){
        return(
            <div className='container h-100'>
               <h1 className=' font-signika border-thick pb-1 text-center  font-color-sec h1'>Participating in the COVID-19 Parenting and Work Study</h1>
               <Row><Col className='col-sm-6 font-mont'><p>Follow the link below to complete a 2-minute survey. Your answers
will help us determine whether or not you are eligible to take part in the study. If you are not
eligible, you will be informed of this while taking the survey. If you are eligible, you will be
asked to share your contact information with us, so that we can set up an interview.</p>
<p>We will contact you to set up a date and time to complete an interview with you. Interviews
can be scheduled whenever is most convenient for you, day or night. They can be completed
by phone or online, using Zoom or Skype.</p>

<p>All participants will be paid $25 as a thank you for taking part <text className='font-color-sec font-weight-bold'>in the interviews</text>. Participants may choose whether
to be paid by check or gift card, and these will be mailed to you within 4 weeks of completing
the interview.
<text className='font-color-sec font-weight-bold'> If both partners take part in the study, you will each receive $25.</text></p>

<Button size='lg' className='font-mont btn-block participation-btn mb-6 font-weight-bold'>Eligibility Survey</Button>
</Col><Col className='col-sm-6'><Image className='mt-4 fluid w-75' rounded src={pic}></Image></Col></Row>
            </div>
        );
    }
}
export default Participation;