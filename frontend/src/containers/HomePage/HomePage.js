import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import FullService from './Section/FullService';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import FamousDoctor from './Section/FamousDoctor';
import RemoteExamination from './Section/RemoteExamination';
import MetalHealth from './Section/MetalHealth';
import DoctorQnA from './Section/DoctorQnA';
import HandBook from './Section/HandBook';
import Healthy from './Section/Healthy';
import About from './Section/About';
import ForDoctor from './Section/ForDoctor';
import Information from './Section/Information';
import HomeFooter from './Section/HomeFooter';
import Banner from './Banner';
import { Helmet } from 'react-helmet'
class HomePage extends Component {
    constructor(props) {
        super(props);
        // Khởi tạo state cho vị trí cuộn
        this.state = {
            scrollX: 0,
            scrollY: 0
        };
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>BookingCare - Nền tảng y tế sức khỏe toàn diện</title>
                </Helmet>
                <HomeHeader isShowBanner={true} locations={"all"} />
                <Banner />
                <FullService />
                <Specialty />
                <MedicalFacility />
                <FamousDoctor />
                <RemoteExamination />
                <MetalHealth />
                <DoctorQnA />
                <HandBook />
                <Healthy />
                <About />
                <ForDoctor />
                <Information />
                <HomeFooter />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
