import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ForYou.scss'
import { FormattedMessage } from 'react-intl';
class ForYou extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
        //fire redux event: actions
    }


    render() {

        return (

                <div className='section-ForYou'>
                    <div className='ForYou-container'>
                        <div className='ForYou-header'>
                            <span className='title1'>Dành cho bạn</span>
                        </div>
                        <div className='ForYou-body'>
                            <div className='img-custom'>
                                <div className='bg-img'>
                                </div>
                                <div className='title2'>
                                    <span>Chuyên khoa</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(ForYou);
