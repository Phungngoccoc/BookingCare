import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HealthyCategory.scss'
import Slider from 'react-slick';
//import css file 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class HealthyCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slidesToShowCategory: 4,
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

        if (zoomLevel >= 200 && zoomLevel < 300) {
            this.setState({ slidesToShowCategory: 1 });
        } else if (zoomLevel >= 300 && zoomLevel < 350) {
            this.setState({ slidesToShowCategory: 2 });
        } else if (zoomLevel >= 350) {
            this.setState({ slidesToShowCategory: 4 });
        } else {
            this.setState({ slidesToShowCategory: 6 });
        }
    }


    render() {
        let setting = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: this.state.slidesToShowCategory,
            slidesToScroll: 1,
        }
        return (

                <div className='section-HealthyCategory' >
                    <div className='HealthyCategory-container'>
                        <div className='HealthyCategory-header'>
                            <span className='title1'>Danh mục sống khỏe</span>
                            <button className='btn-xemthem'>Xem thêm</button>
                        </div>
                        <div className='HealthyCategory-body'>
                            <Slider {...setting}>
                                <div className='img-custom'>
                                    <div className='bg-img1'></div>
                                    <div className='text-center fs-4 '>Tăng huyết áp</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img2'></div>
                                    <div className='text-center fs-4 '>Tiểu dường</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img3'></div>
                                    <div className='text-center fs-4 '>Viêm dạ dày</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img4'></div>
                                    <div className='text-center fs-4 '>Mỡ máu cao</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img5'></div>
                                    <div className='text-center fs-4 '>Đau mắt đỏ</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img5'></div>
                                    <div className='text-center fs-4 '>Sốt xuất huyết</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HealthyCategory);
