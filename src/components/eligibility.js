import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React, {Component} from 'react';

class Eligibility extends Component {
    render(){
        return(
            <div className='container'>
                <h1 className=' font-signika border-thick pb-1 text-center size-up font-color-sec h1'>Eligibility for COVID-19 Parenting and Work Study</h1>
                <p className='text-center h4'>To be eligible, you must meet <text className='font-weight-bold'>ALL</text> of the following:</p>

                <ul className='font-mont list-group w-75 mx-auto'>
                    <li class="text-wrap list-group-item list-group-item-warning text-center list-group-item-action my-1">You have at least one child of elementary or middle-school age (as of the 2019-2020 school year).</li>
                    <li class="text-wrap list-group-item list-group-item-warning text-center list-group-item-action my-1">You live with a partner, with whom you share parenting responsibilities.</li>
                    <li class="text-wrap list-group-item list-group-item-warning text-center list-group-item-action my-1">You and your partner both have full time jobs.</li>
                    <li class="text-wrap list-group-item list-group-item-warning text-center list-group-item-action my-1">You and your partner both had to work from home during COVID-19.</li>
                    <li class="text-wrap list-group-item list-group-item-warning text-center list-group-item-action my-1">You and your partner abided by “stay at home” or “shelter in place” orders, meaning that you only left the house for essentials (i.e. not to work) during COVID-19.</li>
                    <li class="text-wrap list-group-item list-group-item-warning text-center list-group-item-action mt-1">You did not rely on outside help to care for your elementary or middle-school aged child/children during COVID-19 (i.e. no nannies, relatives, or babysitters).</li>
                </ul>

                <br/>
                <div className='font-mont rounded-top mx-auto font-italic border-top border-bottom border-left border-right border-warning' ><ul><li> We encourage both partners to take part in the study, so we can hear the perspectives of both
parents, but this is not a requirement for taking part. If only one of you wishes to
participate that’s OK.</li><li>
It does not matter whether you are still currently at home due to COVID-19 or have returned to
work but were previously working at home due to it.</li> <li>If you are unsure whether you are eligible to participate, click on this <a className='linkage'href='https://nd.qualtrics.com/jfe/form/SV_1zT002Tiaq6RNK5'>link</a> to complete our 2-
minute eligibility survey.
</li></ul>
</div>

            </div>
        );
    }
}
export default Eligibility;