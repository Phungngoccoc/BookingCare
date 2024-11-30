import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/Section/HomeFooter'
import Information from '../../HomePage/Section/Information'
import './DetailService.scss'
import { getDetailService } from '../../../services/userService';
import { Helmet } from 'react-helmet'
class DetailService extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()
        this.state = {
            detailService: [],
            serviceName: ''
        }

    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            const queryParams = new URLSearchParams(this.props.location.search);
            let name = queryParams.get('name');

            let res = await getDetailService(id);
            if (res && res.data.error_code === 0) {
                this.setState({
                    detailService: res.data.data,
                    serviceName: name
                });
            }
        }
    }
    componentDidUpdate(prepProps, preState, snapshot) {

    }
    returnToHome = () => {
        this.props.history.push(`/home`);
    }
    render() {
        // console.log(this.props.match.params.id)
        console.log(this.state);
        let { detailService } = this.state
        let groupedServices = [];
        for (let i = 0; i < detailService.length; i += 2) {
            groupedServices.push(detailService.slice(i, i + 2));
        }
        return (
            <>
                <Helmet>
                    <title>{this.state.serviceName}</title>
                </Helmet>
                <HomeHeader isShowBanner={false} />
                <div className='detail-service-container'>
                    <div className='detail-service-address'>
                        <span><i className="fas fa-home" onClick={() => this.returnToHome()}></i> / <label style={{ color: "black" }}>{this.state.serviceName}</label></span>
                    </div>
                    <div className='detail-service'>
                        {detailService && detailService.length > 0 && detailService.map((item, index) => {
                            return (
                                <div className='child-service'>
                                    <img src={item.img} alt="" />
                                    <div className='service-name'>
                                        <span>{item.name}</span>
                                    </div>
                                </div>
                            );
                        })}

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

export default connect(mapStateToProps, mapDispatchToProps)(DetailService);
