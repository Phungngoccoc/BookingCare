import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/Section/HomeFooter'
import Information from '../../HomePage/Section/Information'
import './DetailDoctor.scss'
import { getDetalDoctor } from '../../../services/userService';
import ScheduleDoctor from './ScheduleDoctor';
import DoctorClinic from './DoctorClinic';
import { Helmet } from 'react-helmet'
class DetailDoctor extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()
        this.state = {
            detailDoctor: {},
            isShowPrice: false,
            isShowIns: false,
        }

    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {

            let id = this.props.match.params.id;
            let res = await getDetalDoctor(id);
            // console.log("chechk res: ", res.data);
            if (res && res.data.error_code === 0) {
                this.setState({
                    detailDoctor: res.data.data
                })
            }

        }
    }
    componentDidUpdate(prepProps, preState, snapshot) {

    }

    showPrice = (status) => {
        this.setState({
            isShowPrice: status,
        })
    }
    showIns = (status) => {
        this.setState({
            isShowIns: status,
        })
    }
    render() {
        // console.log(this.props.match.params.id)
        // console.log(this.state);
        let { detailDoctor } = this.state
        // console.log("check detail: ", detailDoctor)
        return (
            <>
                <Helmet>
                    <title>{detailDoctor && detailDoctor.rank ? detailDoctor.rank : ""} {detailDoctor && detailDoctor.name ? detailDoctor.name : ""}</title>
                </Helmet>
                <HomeHeader isShowBanner={false} />
                <div className='doctor-detail-container'>
                    <div className='info-doctor'>
                        <div className='content-left' style={{ backgroundImage: `url(${detailDoctor && detailDoctor.image ? detailDoctor.image : ""})` }}>

                        </div>
                        <div className='content-right'>
                            <div className='up'>
                                <h2 className='namedr'>{detailDoctor && detailDoctor.rank ? detailDoctor.rank : ""} {detailDoctor && detailDoctor.name ? detailDoctor.name : ""}</h2>
                                <span>
                                    Hơn 30 năm kinh nghiệm khám và điều trị về Cơ xương khớp - Chấn thương chỉnh hình<br></br>
                                    Bác sĩ từng công tác tại Khoa Y học thể thao, Bệnh viện Nhân dân 115<br></br>
                                    Bác sĩ từng công tác tại Khoa Chi dưới, Bệnh viện Chấn thương chỉnh hình TP. HCM<br></br>
                                    Bác sĩ nhận khám từ 16 tuổi trở lên<br></br>
                                </span>
                                <i className="fas fa-map-marker-alt"></i> <span>Thành Phố Hồ Chí Minh</span><br></br>
                                <div className='like-btn'>
                                    <button className='like'><i className="fas fa-thumbs-up"></i> Thích 0</button>
                                    <button className='share'>Chia sẻ</button>
                                </div>
                            </div>
                            <div className='down'>
                                {/* {detail.MarkDown && detail.MarkDown.description &&
                                    <span>{detail.MarkDown.description}</span>
                                } */}

                            </div>
                        </div>
                    </div>
                    <div className='schedule-doctor'>
                        <ScheduleDoctor detailDoctor={detailDoctor} />
                        <DoctorClinic detailDoctor={detailDoctor} />
                    </div>
                    <div className='detail-info-doctor'>
                        {detailDoctor && detailDoctor.description &&
                            <div dangerouslySetInnerHTML={{ __html: detailDoctor.description }}>
                            </div>
                        }

                    </div>
                    <div className='commnent-doctor'>
                        <h2>Phản hồi của bệnh nhân sau khi đi khám</h2>
                        <div className='comment'>
                            <label>Trần Gia Hân</label><span><i className="fas fa-check-circle"></i> đã khám ngày 20/07/2024</span>
                            <p>
                                Đi khám thấy thoải mái, đúng quy trình, được phòng khám liên hệ trước hẹn thời gian đi khám. Tuy nhiên, vẫn phải kê khai lại thông tin mặc dù đã đặt lịch trước.
                            </p>
                        </div>

                        <div className='comment'>
                            <label>Nguyễn Thị Ái Khuê</label><span><i className="fas fa-check-circle"></i> đã khám ngày 20/07/2024</span>
                            <p>
                                Tình trạng của tôi đã ổn. Cảm nhận bác sĩ tư vấn nhiệt tình, nhân viên hỗ trợ nhiệt tình. Được liên hệ trước xác nhận lịch và hướng dẫn quy trình.  Được khám đúng giờ và không phải chờ đợi
                            </p>
                        </div>

                        <div className='comment'>
                            <label>Đỗ Thị Minh Ngọc</label><span><i className="fas fa-check-circle"></i> đã khám ngày 20/07/2024</span>
                            <p>
                                Ok
                            </p>
                        </div>

                        <div className='comment'>
                            <label>Nguyễn Song Vân Thùy</label><span><i className="fas fa-check-circle"></i> đã khám ngày 20/07/2024</span>
                            <p>
                                không có  ý kiến gì
                            </p>
                        </div>

                        <div className='comment'>
                            <label>Diệp Phi Hùng </label><span><i className="fas fa-check-circle"></i> đã khám ngày 20/07/2024</span>
                            <p>
                                Vậy là tốt rồi, kg cần cải thiện. Cám ơn rất nhiều!
                            </p>
                        </div>

                        <div className='comment'>
                            <label>Lý Sủi Nằng</label><span><i className="fas fa-check-circle"></i> đã khám ngày 20/07/2024</span>
                            <p>
                                Được cấp thêm thiết bị hiện đại thì quá tốt luôn
                            </p>
                        </div>
                    </div>
                    <div className='more-ques'>
                        <label> Cần tìm hiểu thêm? </label><span> Xem câu hỏi thường gặp.</span>
                    </div>
                </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
