import React, { Component} from 'react';
import { connect } from "react-redux";
import './DoctorClinic.scss'
import { NumericFormat } from 'react-number-format';
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
    }
    componentDidUpdate(prepProps, preState, snapshot) {
        if (prepProps.detailDoctor !== this.props.detailDoctor) {
            this.setState({
                detailDoctor: this.props.detailDoctor
            })
        }
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
        let { isShowPrice, isShowIns } = this.state;
        return (
            <>
                <div className='doctor-clinic'>
                    <div className='address'>
                        <span className='address1'>ĐỊA CHỈ KHÁM</span><br></br>
                        <span className='address2'>Phòng khám Đa khoa Meditec</span><br></br>
                        <span className='address3'>{detailDoctor && detailDoctor.address ? detailDoctor.address : ""}</span>
                    </div>
                    <div className='cost'>
                        {isShowPrice === false &&
                            <div>
                                <label>GIÁ KHÁM: </label> <span>{detailDoctor && detailDoctor.examination_price &&
                                    <NumericFormat
                                        value={detailDoctor.examination_price}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        suffix={'đ'}
                                    />}
                                </span>
                                <span className='watch-more'
                                    onClick={() => this.showPrice(true)}>
                                    Xem chi tiết
                                </span>
                            </div>
                        }
                        {isShowPrice === true &&
                            <div>
                                <label>GIÁ KHÁM: </label>
                                <div className='show-price'>
                                    <div className='child-price'>
                                        <div>
                                            <div>Giá khám: </div>
                                            <div className='ex-text'>Giá khám chưa bao gồm chi phí chụp chiếu xét nghiệm </div>
                                        </div>
                                        <div className='ex-price'>{detailDoctor && detailDoctor.examination_price &&
                                            <NumericFormat
                                                value={detailDoctor.examination_price}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                suffix={'đ'}
                                            />}</div>

                                    </div>
                                </div>

                                <label>GIÁ DỊCH VỤ LIÊN QUAN: </label>
                                <div className='show-price'>
                                    <div className='child-price'>
                                        <div>
                                            <div>Test HP (Máu) </div>
                                            <div className='ex-text'>Theo chỉ định của bác sĩ </div>
                                        </div>
                                        <div className='ex-price'>100.000đ</div>
                                    </div>
                                    <div className='child-price'>
                                        <div>
                                            <div className='ex-text1'>Nội soi dạ dày, tá tràng Phát hiện ung thư sớm với Chuyên gia</div>
                                            <div className='ex-text'></div>
                                        </div>
                                        <div className='ex-price'>1.400.000đ</div>
                                    </div>
                                    <div className='child-price'>
                                        <div>
                                            <div className='ex-text1'>Nội soi dạ dày, tá tràng Phát hiện ung thư sớm không đau với Chuyên gia</div>
                                            <div className='ex-text'></div>
                                        </div>
                                        <div className='ex-price'>1.800.000đ</div>
                                    </div>
                                    <div className='child-price'>
                                        <div>
                                            <div className='ex-text1'>Nội soi dạ dày, đại tràng phát hiện ung thư sớm với Chuyên gia</div>
                                            <div className='ex-text'></div>
                                        </div>
                                        <div className='ex-price'>3.100.000đ</div>
                                    </div>
                                    <div className='child-price'>
                                        <div>
                                            <div className='ex-text1'>Nội soi dạ dày, đại tràng Phát hiện ung thư sớm không đau với Chuyên gia</div>
                                            <div className='ex-text'></div>
                                        </div>
                                        <div className='ex-price'>4.200.000đ</div>
                                    </div>
                                </div>
                                <div className='hide-price' onClick={() => this.showPrice(false)}>
                                    Ẩn bảng giá
                                </div>
                            </div>
                        }
                    </div>
                    <div className='insurance'>
                        {isShowIns === false &&
                            <div>
                                <label>LOẠI BẢO HIỂM ÁP DỤNG.  </label>
                                <span className='watch-more'
                                    onClick={() => this.showIns(true)}>
                                    Xem chi tiết
                                </span>
                            </div>
                        }
                        {isShowIns === true &&
                            <div>
                                <label>LOẠI BẢO HIỂM ÁP DỤNG: </label>
                                <div className='show-price'>
                                    <div className='child-price'>
                                        <div>
                                            <div>Bảo hiểm Y tế Nhà nước</div>
                                            <div className='ex-text'>Không áp dụng</div>
                                        </div>
                                        <div className='ex-price'></div>

                                    </div>
                                    <div className='child-price'>
                                        <div>
                                            <div>Bảo hiểm bảo lãnh trực tiếp</div>
                                            <div className='ex-text'>Hiện phòng khám chưa có bảo hiểm bảo lãnh trực tiếp,
                                                phòng khám xuất hoá đơn tài chính (hoá đơn đỏ)
                                                và hỗ trợ bệnh nhân hoàn thiện hồ sơ
                                            </div>
                                        </div>
                                        <div className='ex-price'></div></div>
                                </div>
                                <div className='hide-price' onClick={() => this.showIns(false)}>
                                    Thu gọn
                                </div>
                            </div>
                        }
                    </div>
                </div>
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
