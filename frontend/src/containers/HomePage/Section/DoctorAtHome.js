import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DoctorAtHome.scss'
import Slider from 'react-slick';
//import css file 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class DoctorAtHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slidesToShow: 4,
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
        //fire redux event: actions
    }

    handleResize = () => {
        // Detect zoom level using window.devicePixelRatio or window.innerWidth
        const zoomLevel = Math.round(window.devicePixelRatio * 100);

        if (zoomLevel >= 250 && zoomLevel < 300) {
            this.setState({ slidesToShow: 3 });
        } else if (zoomLevel >= 300 && zoomLevel < 400) {
            this.setState({ slidesToShow: 2 });
        } else if (zoomLevel >= 400) {
            this.setState({ slidesToShow: 1 });
        } else {
            this.setState({ slidesToShow: 4 });
        }
    }


    render() {
        let setting = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: this.state.slidesToShow,
            slidesToScroll: 1,
        }
        return (
                <div className='section-DoctorAtHome' >
                    <div className='DoctorAtHome-container'>
                        <div className='DoctorAtHome-header'>
                            <span className='title1'>Bác sĩ tại nhà</span>
                            <button className='btn-xemthem'>Xem thêm</button>
                        </div>
                        <div className='DoctorAtHome-body'>
                            <Slider {...setting}>
                                <div className='img-custom'>
                                    <div className='bg-img1'></div>
                                    <div className='text-center fs-5 fw-bold'>Điều dưỡng tại nhà</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img2'></div>
                                    <div className='text-center fs-5 fw-bold'>Bác sĩ khám bệnh tại nhà của Trung tâm y khoa Gia đình Hà Nội Dr.Care</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img3'></div>
                                    <div className='text-center fs-5 fw-bold'>Bác sĩ khám bệnh tại nhà - Hệ thống Phòng Khám Y Khoa Heli Bác sĩ khám bệnh tại nhà - Hệ thống Phòng Khám Y Khoa Heli</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img4'></div>
                                    <div className='text-center fs-5 fw-bold'>Gói xét nghiệm sức khỏe cơ bản 16 chỉ số tại nhà (NVM77) </div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img5'></div>
                                    <div className='text-center fs-5 fw-bold'>
                                        Gói xét nghiệm sức khỏe và tầm soát ung thư cao cấp cho Nam tại nhà (NVM19M)</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img6'></div>
                                    <div className='text-center fs-5 fw-bold'>Bệnh viện u bướu Hưng Việt</div>
                                </div>
                            </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorAtHome);
