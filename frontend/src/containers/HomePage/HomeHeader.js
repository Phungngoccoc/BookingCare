import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import { changeLanguageApp } from '../../store/actions/appActions';
import { withRouter } from 'react-router-dom';
class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.menuRef = createRef();
        this.state = {
            selectedDoctor: '',
            isOpenMenu: null,
        }
        this.menuRef = createRef(); // Create a ref for the menu
    }
    componentDidMount() {
        // document.addEventListener("mousedown", this.handleOutsideClick); // Listen for clicks
        this.setState({
            isOpenMenu: null,
        })
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleOutsideClick); // Clean up event listener
        this.setState({
            isOpenMenu: null,
        })
    }

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
        //fire redux event: actions
    }
    handleChange = selectedDoctor => {
        this.setState({ selectedDoctor }, () =>
            console.log(`Option selected:`, this.state.selectedDoctor)
        );
    };
    returnToHome = () => {
        this.props.history.push(`/home`);
    }
    goToAtHomePage = () => {
        this.props.history.push(`/at-home`);
    }
    goToAtHospitalPage = () => {
        this.props.history.push(`/at-hospital`);
    }

    goToCooperate = () => {
        this.props.history.push(`/cooperate`);
    }
    goToAppointment = () => {
        this.props.history.push(`/appointment`);
    }

    // handleDivClick = () => {
    //     // Kích hoạt sự kiện click trên input file khi nhấn vào div
    //     this.fileInputRef.current.click();
    // };

    // // handleFileChange = (event) => {
    // //     const fileName = event.target.files[0] ? event.target.files[0].name : 'Không có tệp nào được chọn';
    // //     console.log(fileName); // Xử lý tên tệp tại đây
    // // };
    handleOutsideClick = (event) => {
        if (this.menuRef.current && !this.menuRef.current.contains(event.target)) {
            this.setState({ isOpenMenu: false });
        }
    };
    toggleMenu = () => {
        this.setState(prevState => {
            const newOpenMenuState = !prevState.isOpenMenu;

            // Thay đổi lớp body dựa trên trạng thái của menu
            if (newOpenMenuState) {
                document.body.classList.add('no-scroll'); // Ngăn cuộn trang
            } else {
                document.body.classList.remove('no-scroll'); // Cho phép cuộn trang
            }

            return { isOpenMenu: newOpenMenuState };
        });
    }

    closeMenu = () => {
        this.setState({ isOpenMenu: false }, () => {
            document.body.classList.remove('no-scroll'); // Cho phép cuộn trang khi đóng menu
        });
    }

    goToLoginPage = () => {
        this.props.history.push(`/login`);
    }

    goToHeathyLifePage = () => {
        this.props.history.push(`/healthy-life`);
    }
    render() {
        // console.log("check user inf", this, this.props.userInfo);
        // console.log("check: ", this.props.locations)
        return (
            <React.Fragment>
                <div className={`home-menu ${this.state.isOpenMenu === true ? 'active' : this.state.isOpenMenu === false ? 'unactive' : ''}`} ref={this.menuRef}>
                    <div className='menu-item' onClick={() => this.returnToHome()}>Trang chủ</div>
                    <div className='menu-item' onClick={() => this.goToLoginPage()}>Đăng nhập</div>
                    <div className='menu-item' >Cẩm nang</div>
                    <div className='menu-item' onClick={this.goToCooperate}>Liên hệ hợp tác</div>
                    <div className='menu-item' >Sức khỏe doanh nghiệp</div>
                    <div className='menu-item' >Chuyển đổi số Phòng khám</div>
                    <div className='menu-item' >Tuyển dụng</div>
                    <div className='menu-label'>VỀ BOOKINGCARE</div>
                    <div className='menu-item' >Dành cho bệnh nhân</div>
                    <div className='menu-item' >Dành cho bác sĩ</div>
                    <div className='menu-item' >Vai trò của BookingCare</div>
                    <div className='menu-item' >Liên hệ</div>
                    <div className='menu-item' >Câu hỏi thường gặp</div>
                    <div className='menu-item' >Điều khoản sử dụng</div>
                    <div className='menu-item' >Quy trình hỗ trợ giải quyết khiếu nại</div>
                    <div className='menu-item' >Quy chế hoạt động</div>
                    <div className='menu-footer'>
                        <div className='fb'>
                            <i className="fab fa-facebook-f"></i>
                        </div>
                        <div className='ytb'>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                    {/* Add more items here */}
                </div>
                <div className={`overlay ${this.state.isOpenMenu ? 'active' : ''}`} onClick={this.closeMenu}></div>

                <div className='homeheader-container'>
                    <div className='homeheader-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars" onClick={this.toggleMenu}></i>
                            <div className='header-logo' onClick={() => this.returnToHome()}>
                            </div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content1'
                                style={{
                                    backgroundColor: this.props.locations === "all" ? "#ffc419" : "",
                                    color: this.props.locations === "all" ? "white" : "black",
                                    fontWeight: this.props.locations === "all" ? "bold" : "300",
                                }}
                                onClick={() => this.returnToHome()}>
                                <div className='sub-title' >Tất cả</div>
                            </div>
                            <div className='child-content1'
                                style={{
                                    backgroundColor: this.props.locations === "at-home" ? "#ffc419" : "",
                                    color: this.props.locations === "at-home" ? "white" : "black",
                                    fontWeight: this.props.locations === "at-home" ? "bold" : "300",
                                }}
                                onClick={() => this.goToAtHomePage()}>
                                <div className='sub-title'>Tại nhà</div>
                            </div>
                            <div className='child-content1'
                                style={{
                                    backgroundColor: this.props.locations === "at-hospital" ? "#ffc419" : "",
                                    color: this.props.locations === "at-hospital" ? "white" : "black",
                                    fontWeight: this.props.locations === "at-hospital" ? "bold" : "300",
                                }}
                                onClick={() => this.goToAtHospitalPage()}>
                                <div className='sub-title'>Tại viện</div>
                            </div>
                            <div className='child-content1'
                                style={{
                                    backgroundColor: this.props.locations === "healthy" ? "#ffc419" : "",
                                    color: this.props.locations === "healthy" ? "white" : "black",
                                    fontWeight: this.props.locations === "healthy" ? "bold" : "300",
                                }}
                                onClick={() => this.goToHeathyLifePage()}>
                                <div className='sub-title'>Sống khỏe</div>
                            </div>
                            <div className='child-content'>
                                <div className='search'>
                                    <i className='fas fa-search '></i>
                                    <input type='text' placeholder='Tìm chuyên khoa' disabled></input>
                                </div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className='child-content-right' onClick={() => this.goToCooperate()}>
                                <div><i className="fas fa-handshake"></i></div>
                                <div className='sub-titles' >Hợp tác</div>
                            </div>
                            <div className='child-content-right' onClick={() => this.goToAppointment()}>
                                <div><i className="fas fa-history"></i></div>
                                <div className='sub-titles' >Lịch hẹn</div>
                            </div>
                            <div className='child-content-right-s'>
                                <div><i className='fas fa-search '></i></div>
                                <div className='sub-titles'>Tìm kiếm</div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='center-content2'>
                    <div className='cover-child-content2'>
                        <div className='child-content2' style={{
                            backgroundColor: this.props.locations === "all" ? "#ffc419" : "transparent",
                            color: this.props.locations === "all" ? "white" : "black",
                            fontWeight: this.props.locations === "all" ? "bold" : "300",
                        }}
                            onClick={() => this.returnToHome()}>
                            <div className='sub-title'>Tất cả</div>
                        </div>
                        <div className='child-content2'
                            style={{
                                backgroundColor: this.props.locations === "at-home" ? "#ffc419" : "",
                                color: this.props.locations === "at-home" ? "white" : "black",
                                fontWeight: this.props.locations === "at-home" ? "bold" : "300",
                            }}
                            onClick={() => this.goToAtHomePage()}>
                            <div className='sub-title'>Tại nhà</div>
                        </div>
                    </div>
                    <div className='cover-child-content2'>
                        <div className='child-content2'
                            style={{
                                backgroundColor: this.props.locations === "at-hospital" ? "#ffc419" : "",
                                color: this.props.locations === "at-hospital" ? "white" : "black",
                                fontWeight: this.props.locations === "at-hospital" ? "bold" : "300",
                            }}
                            onClick={() => this.goToAtHospitalPage()}>
                            <div className='sub-title'>Tại viện</div>
                        </div>
                        <div className='child-content2'>
                            <div className='sub-title'>Sống khỏe</div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)) //fire 1 action của redux
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
