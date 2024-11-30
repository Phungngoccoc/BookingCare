import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FamousDoctor.scss'
import Slider from 'react-slick';
import { withRouter,} from 'react-router-dom';
//import css file 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getFeatureDoctor } from '../../../services/userService';

class FamousDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slidesToShow: 4,
            listDoctor: []
        };
    }

    async componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
        let res = await getFeatureDoctor();
        // console.log("check feature doctor: ", res)
        if (res.data.error_code === 0) {
            this.setState({
                listDoctor: res.data.data,
                idDoctor: res.data.data.id
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

        if (zoomLevel >= 200 && zoomLevel < 300) {
            this.setState({ slidesToShow: 3 });
        } else if (zoomLevel >= 300 && zoomLevel < 350) {
            this.setState({ slidesToShow: 2 });
        } else if (zoomLevel >= 350) {
            this.setState({ slidesToShow: 1 });
        } else {
            this.setState({ slidesToShow: 4 });
        }
    }

    handleViewDetailDoctor = (id) => {

        // console.log("view info: ", doctor);
        // this.props.history.push(`/users/${doctor.id}`);
        this.props.history.push(`/detail-doctor/${id}`);
    }
    render() {
        let setting = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: this.state.slidesToShow,
            slidesToScroll: 1,
        }
        let arrDoctor = this.state.listDoctor;
        // console.log('check arrdoctor: ', this.state.idDoctor)
        return (

                <div className='section-FamousDoctor' >
                    <div className='FamousDoctor-container'>
                        <div className='FamousDoctor-header'>
                            <span className='title1'>Bác sĩ nổi bật</span>
                            <button className='btn-xemthem'>Xem thêm</button>
                        </div>
                        <div className='FamousDoctor-body'>
                            <Slider {...setting}>
                                {arrDoctor && arrDoctor.length > 0 && arrDoctor.map((item, index) => {
                                    return (
                                        <div className='img-custom' onClick={() => this.handleViewDetailDoctor(item.id)} key={index} value={item.id}>
                                            <div className='img-custom2' >
                                                <div className='bg-img1'></div>
                                                <div className='position text-center '>
                                                    <div className='ten-hocvi'>{item.rank}, {item.name}</div>
                                                    <div className='chuyenkhoa'>{item.specialty}</div>
                                                </div >
                                            </div>
                                        </div>
                                    )
                                })}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FamousDoctor));
