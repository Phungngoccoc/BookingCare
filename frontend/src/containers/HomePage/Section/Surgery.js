import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Surgery.scss'
import Slider from 'react-slick';
//import css file 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Surgery extends Component {

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

                <div className='section-Surgery' >
                    <div className='Surgery-container'>
                        <div className='Surgery-header'>
                            <span className='title1'>Phẫu thuật</span>
                            <button className='btn-xemthem'>Xem thêm</button>
                        </div>
                        <div className='Surgery-body'>
                            <Slider {...setting}>
                                <div className='img-custom'>
                                    <div className='bg-img1'></div>
                                    <div className='text-center fs-5 fw-bold'>
                                        PGs.Ts.Bs. Lê Mạnh Cường - Phẫu thuật cắt trĩ</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img2'></div>
                                    <div className='text-center fs-5 fw-bold'>
                                        PGs.Ts.Bs. Lê Mạnh Cường - Phẫu thuật cắt trĩ</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img3'></div>
                                    <div className='text-center fs-5 fw-bold'>
                                        PGs.Ts.Bs. Lê Mạnh Cường - Phẫu thuật cắt trĩ</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img4'></div>
                                    <div className='text-center fs-5 fw-bold'>
                                        PGs.Ts.Bs. Lê Mạnh Cường - Phẫu thuật cắt trĩ</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img5'></div>
                                    <div className='text-center fs-5 fw-bold'>
                                        PGs.Ts.Bs. Lê Mạnh Cường - Phẫu thuật cắt trĩ</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img6'></div>
                                    <div className='text-center fs-5 fw-bold'>
                                        PGs.Ts.Bs. Lê Mạnh Cường - Phẫu thuật cắt trĩ</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Surgery);
