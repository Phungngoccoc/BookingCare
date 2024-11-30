import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DoctorQnA.scss'
//import css file 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class DoctorQnA extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
        //fire redux event: actions
    }


    render() {
        return (
                <div className='section-DoctorQnA' >
                    <div className='DoctorQnA-container'>
                        <div className='DoctorQnA-header'>
                            <span className='title1'>Bác sĩ hỏi đáp</span>
                        </div>
                        <div className='DoctorQnA-body'>
                            <div className='img-custom'>
                                <div className='bg-img1'></div>
                                <div className='text-center fs-4 fw-bold'>Hỏi bác sĩ miến phí</div>
                            </div>
                            <div className='img-custom'>
                                <div className='bg-img2'></div>
                                <div className='text-center fs-4 fw-bold'>Cẩm nang hỏi đáp</div>
                            </div>
                        </div>

                    </div>
                </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorQnA);
