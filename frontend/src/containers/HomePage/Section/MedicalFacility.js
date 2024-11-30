import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss'
import Slider from 'react-slick';
//import css file 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getAllHospital } from '../../../services/userService';
import { withRouter } from 'react-router-dom';
class MedicalFacility extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slidesToShow: 4,
            listHospital: []
        };
    }

    async componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();

        let res = await getAllHospital();
        // console.log("check res", res)
        if (res && res.data && res.data.error_code === 0) {
            this.setState({
                listHospital: res.data.data
            })
        }
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

    handleViewDetailHospital = (id) => {
        this.props.history.push(`/detail-hospital/${id}`);
    }
    render() {
        let setting = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: this.state.slidesToShow,
            slidesToScroll: 1,
        }
        let { listHospital } = this.state
        // console.log("list hos", listHospital)
        return (

                <div className='section-MedicalFacility' >
                    <div className='MedicalFacility-container'>
                        <div className='MedicalFacility-header'>
                            <span className='title1'>Cơ sở y tế nổi bật</span>
                            <button className='btn-xemthem'>Xem thêm</button>
                        </div>
                        <div className='MedicalFacility-body'>
                            <Slider {...setting}>
                                {listHospital && listHospital.length > 0 && listHospital.map((item, index) => {
                                    return (
                                        <div className='img-custom' onClick={() => this.handleViewDetailHospital(item.id)}>
                                            <div className='bg-img1' style={{ backgroundImage: `url(${item.img})` }}></div>
                                            <div className='text-center fs-5 fw-bold'>{item.name}</div>
                                        </div>
                                    )
                                })}

                                <div className='img-custom'>
                                    <div className='bg-img2'></div>
                                    <div className='text-center fs-5 fw-bold'>Bệnh viện chợ rẫy</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img3'></div>
                                    <div className='text-center fs-5 fw-bold'>Doctor Check - Tầm Soát Bệnh Để Sống Thọ Hơn</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img4'></div>
                                    <div className='text-center fs-5 fw-bold'>Phòng khám Bệnh viện Đại học Y Dược 1</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img5'></div>
                                    <div className='text-center fs-5 fw-bold'>Trung Tâm khám sức khỏe định kỳ, Bệnh viên Trung ương Quân đội 108</div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MedicalFacility));
