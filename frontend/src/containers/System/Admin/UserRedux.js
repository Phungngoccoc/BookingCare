import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { LANGUAGES } from '../../../utils/constant';
class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: []
        }
    }

    state = {

    }

    async componentDidMount() {
        try {
            let res = await getAllCodeService('gender');
            if (res && res.data && res.data.errCode === 0) {
                this.setState({
                    genderArr: res.data.data
                });
            }
        } catch (e) {
            console.log(e);
        }
    }


    render() {
        let genders = this.state.genderArr;
        console.log("check genders in render: ", genders);
        let language = this.props.language;
        return (
            <div className='redux-container'>
                <div className='title '>
                    <FormattedMessage id="manage-user.title" />
                </div>
                <div className='body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 my-3'><FormattedMessage id="manage-user.add" /></div>
                            <div className='col-6 my-3'>
                                <label><FormattedMessage id="manage-user.email" /> </label>
                                <input className='form-control' type='Email'></input>
                            </div>
                            <div className='col-6 my-3'>
                                <label><FormattedMessage id="manage-user.password" /> </label>
                                <input className='form-control' type='password'></input>
                            </div>
                            <div className='col-6 my-3'>
                                <label><FormattedMessage id="manage-user.fullname" /> </label>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div className='col-6 my-3'>
                                <label><FormattedMessage id="manage-user.address" /> </label>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div className='col-3 my-3'>
                                <label><FormattedMessage id="manage-user.phonenumber" /> </label>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div className='col-3 my-3'>
                                <label><FormattedMessage id="manage-user.gender" /> </label>
                                <select className='form-control'>
                                    {genders && genders.length > 0 && genders.map((item, index) => {
                                        return (
                                            <option key={index}>
                                                {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                            </option>
                                        )
                                    })
                                    }
                                </select>
                            </div>
                            <div className='col-3 my-3'>
                                <label><FormattedMessage id="manage-user.role" /> </label>
                                <select className='form-control'>
                                    <option selected>Choose</option>
                                </select>
                            </div>
                            <div className='col-3 my-3'>
                                <label><FormattedMessage id="manage-user.image" /> </label>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div className='col-12 my-3'>
                                <button className='btn btn-primary'><FormattedMessage id="manage-user.save" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
