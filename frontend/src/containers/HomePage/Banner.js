import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import './Banner.scss'
import { changeLanguageApp } from '../../store/actions/appActions';
import Select from 'react-select';
import {  withRouter } from 'react-router-dom';
const options = [
    { value: '1', label: 'Thuờng xuyên bị bóng đè cần khắc phục thế nào?' },
    { value: '2', label: 'Cách điều trị mụn ẩn, mụn cám tuổi dậy thì hiệu quả' },
    { value: '3', label: 'Rối loạn tiền đình uống thuốc không hiệu quả phải làm sao' },
];

class Banner extends Component {
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
                <div className="banner">
                    <div className="text-center mb-4 check">
                        <span className="titles">Nơi khởi nguồn sức khỏe</span>
                    </div>
                    <div className='search-banner '>
                        <div className='border-input'>
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className='input'>
                                        <Select
                                            value={this.state.selectedDoctor}
                                            onChange={this.handleChange}
                                            options={options}
                                            className='select1 col-12'
                                            placeholder="Đặt câu hỏi với trợ lý AI"
                                            noOptionsMessage={() => null}
                                            styles={{
                                                option: (provided, state) => ({
                                                    ...provided,
                                                    backgroundColor: state.isSelected ? 'white' : state.isFocused ? '#f0f0f0' : null,
                                                    color: state.isSelected ? 'black' : 'black',
                                                    padding: 20,
                                                    transition: 'all 0.2s ease',
                                                    borderRadius: 'none'
                                                }),
                                            }}
                                        />
                                        <div><i className="fas fa-paper-plane"></i></div>
                                    </div>
                                    <input
                                        type='file'
                                        ref={this.fileInputRef}
                                        style={{ display: 'none' }}
                                    // onChange={this.handleFileChange}
                                    />
                                    <div className='upfile' onClick={this.handleDivClick}>
                                        <div><i className="fas fa-file"></i></div>
                                        <div>
                                            <input type="text" className="" placeholder="Đọc đơn thuốc/ xét nghiệm" disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bonus-content">
                        <div className='content'>
                            <div className='i1'><i className="fas fa-tv"></i></div>
                            <div className='content-span'><span>Bị thủy đậu nên làm gì để tránh lây bệnh</span></div>
                        </div>

                        <div className='content'>
                            <div className='i2'><i className="fas fa-stethoscope"></i></div>
                            <div className='content-span'><span>Mệt mỏi, khó thở nguyên nhân do đâu?</span></div>
                        </div>

                        <div className='content'>
                            <div className='i3'><i className="fas fa-file"></i></div>
                            <div className='content-span'><span>Hắt hơi, sổ mũi là dâu hiện của bệnh gì?</span></div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Banner));
