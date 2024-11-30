import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/Section/HomeFooter'
import Information from '../../HomePage/Section/Information'
import './AtHome.scss'
import Healthy from '../Section/Healthy';
import DoctorQnA from '../Section/DoctorQnA';
import RemoteExamination from '../Section/RemoteExamination';
import HomeTest from '../Section/HomeTest';
import DoctorAtHome from '../Section/DoctorAtHome';
import { Helmet } from 'react-helmet'
class AtHome extends Component {
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
                    <title>Tại nhà</title>
                </Helmet>
                <HomeHeader locations={"at-home"} />
                <div className='AtHome-container'>
                    <div className='AH-banner'>
                        <img alt="" src="https://bookingcare.vn/_next/image?url=https%3A%2F%2Fcdn.bookingcare.vn%2Ffo%2F2023%2F11%2F02%2F113503-dich-vu-cham-soc-suc-khoe-tai-nha.png&w=1920&q=75" />
                    </div>

                </div>
                {/* <HomeTest /> */}
                <HomeTest />
                <DoctorAtHome />
                <RemoteExamination />
                <DoctorQnA />
                <Healthy />
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

export default connect(mapStateToProps, mapDispatchToProps)(AtHome);
