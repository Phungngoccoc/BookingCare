import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss'
import { withRouter} from 'react-router-dom';
import Slider from 'react-slick';
//import css file 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Specialty extends Component {

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

        if (zoomLevel >= 250 && zoomLevel < 400) {
            this.setState({ slidesToShow: 3 });
        } else if (zoomLevel >= 400 && zoomLevel < 550) {
            this.setState({ slidesToShow: 2 });
        } else if (zoomLevel >= 550) {
            this.setState({ slidesToShow: 1 });
        } else {
            this.setState({ slidesToShow: 4 });
        }
    }
    handleViewListSpecialty = () => {

        // console.log("view info: ", doctor);
        // this.props.history.push(`/users/${doctor.id}`);
        this.props.history.push(`/list-specialty`);
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

                <div className='section-specialty' >
                    <div className='specialty-container'>
                        <div className='specialty-header'>
                            <span className='title1'>Chuyên khoa</span>
                            <button className='btn-xemthem' onClick={() => this.handleViewListSpecialty()}>Xem thêm</button>
                        </div>
                        <div className='specialty-body'>
                            <Slider {...setting}>
                                <div className='img-custom'>
                                    <div className='bg-img1'></div>
                                    <div className='text-center fs-4 fw-bold'>Cơ xương khớp</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img2'></div>
                                    <div className='text-center fs-4 fw-bold'>Thần kinh</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img3'></div>
                                    <div className='text-center fs-4 fw-bold'>Tiêu hóa</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img4'></div>
                                    <div className='text-center fs-4 fw-bold'> Tim mạch</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img5'></div>
                                    <div className='text-center fs-4 fw-bold'>Tai mũi họng</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img6'></div>
                                    <div className='text-center fs-4 fw-bold'>Cột sống</div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Specialty));
