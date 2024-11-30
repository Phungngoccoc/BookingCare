import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FullService.scss'
import { getService } from '../../../services/userService';
import { withRouter } from 'react-router-dom';
class FullService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullservice: []
        }

    }
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
        //fire redux event: actions
    }

    async componentDidMount() {
        let res = await getService();
        // console.log("check res: ", res.data.error_code)
        if (res && res.data.error_code === 0) {
            this.setState({
                fullservice: res.data.data
            })
        }
    }

    viewDetailService = (id, name) => {
        this.props.history.push(`/detail-service/${id}?name=${name}`);
    }
    render() {
        // console.log("check service: ", this.state.fullservice);
        let arrService = this.state.fullservice;
        let groupedServices = [];
        for (let i = 0; i < arrService.length; i += 2) {
            groupedServices.push(arrService.slice(i, i + 2));
        }
        // console.log(groupedServices);
        return (
                <div className='section-FullService'>
                    <div className='FullService-container'>
                        <div className='FullService-header'>
                            Dịch vụ toàn diện
                        </div>
                        <div className='FullService-body'>
                            {groupedServices && groupedServices.length > 0 && groupedServices.map((group, index) => {
                                return (
                                    <div className='service' key={index}>
                                        {group.map(item => (
                                            <div className='service-child' key={item.id} onClick={() => this.viewDetailService(item.id, item.name)}>
                                                <div
                                                    className='child-img'
                                                    style={{
                                                        backgroundImage: `url(${item.img})`
                                                    }}
                                                ></div>
                                                <div className='child-content'>
                                                    {item.name}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                );
                            })}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FullService));
