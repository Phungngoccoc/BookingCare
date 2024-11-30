import React, { Component } from 'react';
import { connect } from 'react-redux';
import './About.scss'
class About extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
        //fire redux event: actions
    }


    render() {

        return (
            <div className='section-About' >
                <div className='About-container'>
                    <div className='About-header'>
                        <span className='title1 text-center'>Truyền thông nói về BookingCare</span>
                    </div>
                    <div className='About-body'>
                        <div className='content-left'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/FyDQljKtWnI?si=3Sj1mqBO7dHsUKnk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <div className='content-right'>
                            <div className='child-content'>
                                <div className='cover-bg'>
                                    <div className='img1'></div>
                                </div>
                                <div className='cover-bg'>
                                    <div className='img2'></div>
                                </div>
                            </div>
                            <div className='child-content'>
                                <div className='cover-bg'>
                                    <div className='img3'></div>
                                </div>
                                <div className='cover-bg'>
                                    <div className='img4'></div>
                                </div>
                            </div>
                            <div className='child-content'>
                                <div className='cover-bg'>
                                    <div className='img5'></div>
                                </div>
                                <div className='cover-bg'>
                                    <div className='img6'></div>
                                </div>
                            </div>
                            <div className='child-content'>
                                <div className='cover-bg'>
                                    <div className='img7'></div>
                                </div>
                                <div className='cover-bg'>
                                    <div className='img8'></div>
                                </div>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
