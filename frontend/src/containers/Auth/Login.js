import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
// import { handleLoginApi } from '../../services/userService';
import './Login.scss';
// import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: '',
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value,
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value,
        })
    }

    // handleLogin = async () => {
    //     this.setState({
    //         errMessage: '',
    //     })

    //     // console.log('username: ' , this.state.username,'password: ', this.state.password );
    //     // console.log('all state',this.state);
    //     try{
    //         await handleLoginApi(this.state.username,this.state.password);
    //     }catch(error){
    //         // console.log('ngoc',error.respose);
    //         // if(error.response){
    //         //     if(error.response.data){
    //         //         this.setState({
    //         //         errMessage: error.response.data.message,
    //         //     })
    //         //     }
    //         // }
    //         console.log('Error:', error);

    //     if (error.response) {
    //         // Có response từ server (ví dụ: lỗi 4xx hoặc 5xx)
    //         console.log('Response from server:', error.response);
    //         this.setState({
    //             errMessage: error.response.data.message
    //         });
    //     } else if (error.request) {
    //         // Request đã được gửi nhưng không nhận được phản hồi từ server
    //         console.log('Request made but no response:', error.request);
    //         this.setState({
    //             errMessage: "No response from server"
    //         });
    //     } else {
    //         // Lỗi xảy ra trong quá trình tạo request (cú pháp sai, vấn đề khác)
    //         console.log('Error setting up the request:', error.message);
    //         this.setState({
    //             errMessage: error.message
    //         });
    //     }
    //     }
    // }

    handleLogin = async () => {
        this.setState({
            errMessage: '',
        });

        try {
            // const response = await handleLoginApi(this.state.username, this.state.password);

            // if (response && response.errCode !== 0) {
            //     this.setState({
            //         errMessage: response.data.message
            //     });
            // }

            // if (response && response.data.errCode === 0) {
            //     this.props.userLoginSuccess(response.data.user)
            //     console.log('Login successful');
            // }

            this.props.userLoginSuccess()

        } catch (error) {
            console.log('Error:', error);

            if (error.response) {
                this.setState({
                    errMessage: error.response.data.message
                });
            }
            // else if (error.request) {
            //     this.setState({
            //         errMessage: "No response from server"
            //     });
            // } else {
            //     this.setState({
            //         errMessage: error.response.data.message
            //     });
            // }
        }
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    handleKeyDown = (event) => {
        console.log(event)
        if (event.key === 'Enter' || event.keyCode === 13) {
            this.handleLogin();
        }
    }
    returnToHome = () => {
        this.props.history.push(`/home`);
    }
    render() {
        //JSX
        return (
            <div className='cover-login'>
                <div className='logo' onClick={() => this.returnToHome()} style={{ cursor: 'pointer' }}></div>
                <div className='login-content'>
                    <div className='content1'>
                        Nền tảng đặt lịch khám trực tuyến hàng đầu Việt Nam
                    </div>
                </div>
                <div className='login-bg'>
                    <div className='right-content-login' >
                    </div>
                    <div className='login-container'>
                        <div className='login-content'>
                            <div className='col-12 text-login'>Đăng nhập</div>
                            <div className='col-12 form-group login-input'>
                                <label>Tên đăng nhập:</label>
                                <input type='text' value={this.state.username}
                                    onChange={(event) => this.handleOnChangeUsername(event)}
                                    className='form-control' placeholder='Nhập tên đăng nhập'></input>
                            </div>
                            <div className='col-12 form-group login-input'>
                                <label>Mật khẩu:</label>
                                <div className='custom-input-password'>
                                    <input type={this.state.isShowPassword ? 'text' : 'password'} value={this.state.password}
                                        onChange={(event) => this.handleOnChangePassword(event)}
                                        onKeyDown={(event) => this.handleKeyDown(event)}
                                        className='form-control' placeholder='Nhập mật khẩu'></input>
                                    <span
                                        onClick={() => this.handleShowHidePassword()}
                                    ><i className={this.state.isShowPassword ? 'far fa-eye eye' : 'fas fa-eye-slash eye'}></i></span>
                                </div>
                            </div>
                            <div className='col-12' style={{ color: 'red' }}>{this.state.errMessage}</div>
                            <div className='col-12 '><button className='login-btn'
                                onClick={() => this.handleLogin()}
                            >Login</button></div>
                            <div className='col-12'>
                                <span className='forgotpw'>Quên mật khẩu?</span>
                            </div>
                            <div className='col-12 text-center mt-3'>
                                <span className='text-other-login'>Hoặc đăng nhập với:</span>
                            </div>
                            <div className='col-12 social-login'>
                                <i className="fab fa-google-plus-g logo-gg"></i>
                                <i className="fab fa-facebook-f logo-fb" ></i>

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
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInf) => dispatch(actions.userLoginSuccess(userInf))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
