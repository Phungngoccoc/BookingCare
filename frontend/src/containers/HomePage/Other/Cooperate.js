import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/Section/HomeFooter'
import Information from '../../HomePage/Section/Information'
import './Cooperate.scss'
import { Helmet } from 'react-helmet'
class Cooperate extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    async componentDidMount() {
    }
    componentDidUpdate(prepProps, preState, snapshot) {

    }
    render() {

        return (
            <>
                <Helmet>
                    <title>Hợp tác với BookingCare</title>
                </Helmet>
                <HomeHeader />
                <div className='coop-container'>
                    <div className='coop-banner'>
                        <div className='coop-overlay'>
                            <div className='coop-left'>
                                <span>HỢP TÁC CÙNG BOOKINGCARE</span>
                                <div className='coop-connect'>
                                    <p>
                                        Kết nối bệnh nhân, nâng tầm thương hiệu
                                    </p>
                                </div>
                                <button>LIÊN HỆ HỢP TÁC</button>
                            </div>
                            <div className='coop-right'>
                                <div className='coop-right-content'>
                                    <span>1.500.000+</span>
                                    <p>LƯỢT TRUY CẬP/THÁNG</p>
                                </div>
                                <div className='coop-right-content'>
                                    <span>2000+</span>
                                    <p>BÁC SĨ</p>
                                </div>
                                <div className='coop-right-content'>
                                    <span>300.000+</span>
                                    <p>NGƯỜI ĐÃ SỬ DỤNG</p>
                                </div>
                                <div className='coop-right-content'>
                                    <span>300+</span>
                                    <p>CƠ SỞ Y TẾ</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='coop-stats'>
                        <div className='coop-stats-content'>
                            <div className='stats-img'>
                                <img alt="" src="https://cdn.bookingcare.vn/fo/w1920/2024/08/27/101137-tang-bn-1.png" ></img>
                            </div>
                            <div className='stats-label'>
                                <div>Tăng số lượng bệnh nhân</div>
                            </div>
                        </div>
                        <div className='coop-stats-content'>
                            <div className='stats-img'>
                                <img alt="" src="https://cdn.bookingcare.vn/fo/w1920/2024/08/27/101113-.png" ></img>
                            </div>
                            <div className='stats-label'> <div>Xây dựng thương hiệu</div></div>
                        </div>
                        <div className='coop-stats-content'>
                            <div className='stats-img'>
                                <img alt="" src="https://cdn.bookingcare.vn/fo/w640/2024/08/27/101155-trai-nghiem-1.png" ></img>
                            </div>
                            <div className='stats-label'><div>Nâng cao trải nghiệm khách hàng</div></div>
                        </div>
                    </div>
                    <div className='coop-inf'>
                        <span>Hơn 300 đơn vị đã hợp tác với BookingCare</span>
                        <div className='coop-partner'>
                            <div className='coop-img' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w1920/2023/03/27/180039-logo-trong-rang-sg-1.png)` }}></div>
                            <div className='coop-img' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w1920/2019/09/26/093307logo-pk-da-lieu-bs-thai-ha.jpg)` }}></div>
                            <div className='coop-img' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w1920/2023/01/16/141014-mat-viet-nga-logo.png)` }}></div>
                            <div className='coop-img' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w1920/2022/12/09/115911-12-logo-hn.png)` }}></div>
                            <div className='coop-img' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w1920/2023/11/16/165210-logo-nha-khoa-lac-viet.jpg)` }}></div>
                            <div className='coop-img' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w1920/2022/05/12/101707-logo-sg.png)` }}></div>
                            <div className='coop-img' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w1920/2022/08/29/104922-logo-med-tai-ha-noi--01.png)` }}></div>
                            <div className='coop-img' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w1920/2022/07/14/155206-logo-y-duoc-1.jpg)` }}></div>
                            <div className='coop-img' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w1920/2018/06/18/083122lo-go-viet-duc.jpg)` }}></div>
                        </div>
                        <button>LIÊN HỆ HỢP TÁC</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cooperate);
