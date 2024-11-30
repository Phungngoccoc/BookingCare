import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/Section/HomeFooter'
import Information from '../../HomePage/Section/Information'
import './Appointment.scss'
import { Helmet } from 'react-helmet'
class Appointment extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    async componentDidMount() {
    }
    componentDidUpdate(prepProps, preState, snapshot) {

    }
    returnToHome = () => {
        this.props.history.push(`/home`);
    }
    render() {

        return (
            <>
                <Helmet>
                    <title>Lịch hẹn</title>
                </Helmet>
                <HomeHeader />
                <div className='appointment-container'>
                    <div className='appoinment-address'>
                        <span><i className="fas fa-home" onClick={() => this.returnToHome()}></i> / Lịch hẹn đã đặt</span>
                    </div>
                    <div className='appoinment'>
                        <span>Lịch hẹn đã đặt</span>
                        <p>Bạn chưa đặt lịch hẹn trên trình duyệt này</p>
                    </div>
                </div>
                <Information />
                <HomeFooter />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointment);
