import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeFooter.scss'
class HomeFooter extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
        //fire redux event: actions
    }


    render() {

        return (

                <div className='section-HomeFooter' >
                    <div className='HomeFooter-container'>
                        <div className='HomeFooter-header'>
                            <div className='titles'>
                                <p>© 2024 BookingCare.</p>
                            </div>
                            <div className='footer'>
                                <div className='fb'>
                                    <i className="fab fa-facebook-f"></i>
                                </div>
                                <div className='ytb'>
                                    <i className="fab fa-youtube"></i>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
