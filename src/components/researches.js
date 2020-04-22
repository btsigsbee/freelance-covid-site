import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Row, Col,Image} from 'react-bootstrap';
import pic1 from '../Abigail Ocobock.jpg';
import pic2 from '../Lindsay.jpg';
import {FaEnvelope, FaTwitter} from 'react-icons/fa';
class Researchers extends Component{


render() {
    return (
        <div className='container'>
            <Row className='fluid h-25' >
                <Col className='col col-lg-3 h-25'>
                <Image src={pic1} className= 'img-fluid' roundedCircle></Image>
                <Row sm={4}className='d-flex justify-content-end' ><a href='mailto: aocobock@nd.edu'><FaEnvelope className='make-white' sm={2} size={32}/></a></Row>
                </Col >
                <Col><br/><text className='font-mont text-wrap h-25'><h4 className='font-signika font-color-sec size-up border-dark border-bottom'>Abigail Ocobock</h4>Abigail is the Principal Investigator of the study. She works as a Sociology Professor at
the University of Notre Dame. She conducts research and teaches classes in the areas of family
sociology, gender, and sexuality. Her work has been published in academic journals, such as the
Journal of Marriage and Family, and covered in media venues, such as The Atlantic and Slate
Magazine. She is originally from the United Kingdom. She is the mother of a 5-year-old and 1-

year-old and shares in the struggle of trying to balance work and family life, especially during
the coronavirus! She is excited to hear about your experiences.</text><br/>

</Col>
            </Row>
            <Row className='fluid'>
                
                <Col><br/><text className='font-mont text-wrap'><h4 className='font-signika text-right font-color-sec display-3 size-up border-dark border-bottom'>Lindsay Heldreth</h4>Lindsay Heldreth is a Graduate Student Research Assistant for the study. She is currently a Ph.D. student in the Department of Sociology at the University of Notre Dame. She is originally from Canfield, Ohio, and is a graduate of Youngstown State University, with a BA in Philosophy. Her current research focuses on gender and culture. She lives with her partner and their three cats: Pippa, Tabasco, and Meowgatron. In her spare time, she enjoys playing tennis, practicing piano, and hiking! She is excited to hear your stories and hopes they will offer some insight into how to succeed at work-life balance. 
</text>
</Col>
<Col className='col col-lg-3'>
                <Image src={pic2} className= 'img-fluid' roundedCircle></Image>
                <Row  sm={4}className=''><a href='mailto: lheldret@nd.edu'><FaEnvelope className='make-white' sm={2} size={32}/></a> <a href='https://twitter.com/lindsayheldreth'><FaTwitter className='make-white'size={32}/></a></Row>

                </Col>
            </Row>
        </div>
    );
}
}
export default Researchers;
