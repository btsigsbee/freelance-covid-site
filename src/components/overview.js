
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {Component, Link} from 'react';
import pic from '../buzz-img.png'
import {Row, Col, Button, Figure} from 'react-bootstrap';

class Overview extends Component{


render() {
    return (
        <div className='container'>
            <h1 className='font-signika border-thick pb-1 text-center font-color-sec size-up'>COVID-19 Parenting and Work Study</h1>
            <Row>
                <Col s={4}md={7}>
                    <Figure><Figure.Image fluid src={pic} rounded/>
                    <Figure.Caption className='figure-caption'>Image by Agata Nowicka for <a href='https://www.buzzfeednews.com/article/annehelenpetersen/coronavirus-covid19-parents-kids-childcare'>Buzzfeed</a></Figure.Caption>
                    </Figure>
                </Col>
            <Col ><text className='font-mont text-wrap font-color-dark'> This study seeks to understand how parents manage parenting and working from home during the COVID-19 pandemic.
                We are seeking to know how parents are coping with working from home while home-schooling their children. 
                The study will contribute to knowledge about <text className='font-weight-bold font-color-sec'>work-life balance</text><text className='font-weight-bold font-color-sec'>, parenting</text>, and how couples cope with stress.
                </text> 
                <br /><br />
                <text className=' font-mont text-wrap font-color-dark'>We want to hear from both 
                    <text className='font-weight-bold font-color-sec'> Moms and Dads</text>, and we want to hear the highs and lows of working and parenting from home! It doesn't matter what your experience has been, we want to hear from you! You can contribute to knowledge of this unique historical
moment by sharing your story!
                    </text>
                    <br /> 
                    <br/>
                    <Button  size='lg' href='https://nd.qualtrics.com/jfe/form/SV_1zT002Tiaq6RNK5'className='font-mont overview-btn btn-block text-dark font-weight-bold'>Take the Eligibility Survey!</Button>  
            </Col>
            </Row>
            <br />
            <Row><Col><text className='font-mont'>If you have any questions or would like to contact the study, please e-mail the study at <a className='linkage' href='mailto:covidparentingwork@gmail.com'>covidparentingwork@gmail.com</a></text></Col></Row>
        </div>
    );
}
}
export default Overview;

