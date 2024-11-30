import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/Section/HomeFooter'
import Information from '../../HomePage/Section/Information'
import './DetailHospital.scss'
import Select from 'react-select';
import { Helmet } from 'react-helmet'
const options = [
    { value: '1', label: 'Bác sĩ khoa Phục hồi chức năng Bệnh viện Hữu nghị Việt Đức' },
    { value: '2', label: 'Review về Bệnh viện Hữu nghị Việt Đức' },
    { value: '3', label: 'Cách đặt khám tại Khoa Chi trên và Y học thể thao, Bệnh viện Hữu nghị Việt Đức' },
];

class DetailHospital extends Component {
    constructor(props) {
        super(props);
        this.sectionRefs = {
            introduce: React.createRef(),
            professional: React.createRef(),
            equipment: React.createRef(),
            location: React.createRef(),
            process: React.createRef(),
        };
        this.state = {

        }

    }
    handleScrollToSection = (section) => {
        if (this.sectionRefs[section]?.current) {
            this.sectionRefs[section].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {

            let id = this.props.match.params.id;
            console.log(id)

        }
    }
    componentDidUpdate(prepProps, preState, snapshot) {

    }
    render() {

        return (
            <>
                <Helmet>
                    <title></title>
                </Helmet>
                <HomeHeader />
                <div className='detail-hospital-container'>
                    <div className='hospital-banner'>
                        <div className='group-banner'>
                            <div className='info-hospital'>
                                <div className='hospital-img'>
                                    <img alt="" src=''></img>
                                </div>
                                <div className='detail-hospital'>
                                    <h1>Bệnh viện hữu nghị Việt Đức</h1>
                                    <h2>Số 16-18 Phủ Doãn - Hoàn Kiếm - Hà Nội</h2>
                                </div>
                            </div>
                            <div className='menu-hospital'>
                                <div onClick={() => this.handleScrollToSection('introduce')}>GIỚI THIỆU</div>
                                <div onClick={() => this.handleScrollToSection('professional')}>THẾ MẠNH CHUYÊN MÔN</div>
                                <div onClick={() => this.handleScrollToSection('equipment')}>TRANG THIẾT BỊ</div>
                                <div onClick={() => this.handleScrollToSection('location')}>VỊ TRÍ</div>
                                <div onClick={() => this.handleScrollToSection('process')}>QUY TRÌNH KHÁM</div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-hospital">
                        <div className="text-center mb-4 check">
                            <span className="titles">Trợ lý sức khỏe với AI - Hỏi đáp nhanh thông tin Bệnh viện Hữu nghị Việt Đức</span>
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
                                                <input type="text" className="" placeholder="Hỏi đáp nhanh Bệnh viện top đầu" disabled />
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
                    <div className='hospital-greet'>
                        <div className='greet-1'>
                            BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt Nam
                            kết nối người dùng với trên 200 bệnh viện - phòng khám uy tín, hơn 1,500
                            bác sĩ chuyên khoa giỏi và hàng nghìn dịch vụ, sản phẩm y tế chất lượng cao
                        </div>
                        <div className='greet-2'>
                            Từ nay, người bệnh có thể đặt lịch tại Khu khám bệnh theo yêu cầu, Bệnh viện Hữu nghị Việt Đức thông qua hệ thống đặt khám BookingCare.
                            <ul>
                                <li>Được lựa chọn các giáo sư, tiến sĩ, bác sĩ chuyên khoa giàu kinh nghiệm</li>
                                <li>Hỗ trợ đặt khám trực tuyến trước khi đi khám (miễn phí đặt lịch) </li>
                                <li>Giảm thời gian chờ đợi khi làm thủ tục khám và ưu tiên khám trước</li>
                                <li>Nhận được hướng dẫn chi tiết sau khi đặt lịch</li>
                            </ul>
                        </div>
                    </div>
                    <div className='introduce' ref={this.sectionRefs.introduce}>
                        <span>Giới thiệu</span><br></br>
                        <label><b>Địa chỉ:</b>  Bệnh viện có nhiều cổng, bệnh nhân đến khám sẽ đến cổng: </label>
                        <ul>
                            <li>Số 16 - 18 Phủ Doãn, Hoàn Kiếm, Hà Nội</li>
                        </ul>
                        <label><b>Thời gian làm việc: </b> Thứ 2 đến thứ 7</label>
                        <ul>
                            <li>Sáng: 7h00 - 12h00</li>
                            <li>Chiều: 13h30 - 16h30</li>
                        </ul>
                        <p>Bệnh viện Việt Đức là một trong 5 bệnh viện tuyến Trung ương, hạng đặc biệt của Việt Nam. Bệnh viện có lịch sử trên 100 năm, bề dày truyền thống danh tiếng, là cái nôi của ngành ngoại khoa Việt Nam gắn liền với những thành tựu Y học quan trọng của đất nước. </p>
                        <p>Việt Đức là địa chỉ uy tín hàng đầu về ngoại khoa, tiến hành khám bệnh, chữa bệnh và thực hiện các kỹ thuật chụp chiếu, xét nghiệm, thăm dò chức năng cơ bản và chuyên sâu hàng ngày cho người dân. </p>
                        <p>Bệnh viện có đội ngũ y bác sĩ hùng hậu, nhiều người kiêm là cán bộ giảng dạy tại Đại học Y khoa Hà Nội hoặc Khoa Y Dược - Đại học Quốc gia Hà Nội. Trong số họ nhiều người là chuyên gia đầu ngành và bác sĩ giàu kinh nghiệm ở các chuyên khoa khác nhau. </p>
                        <label><b>Lưu ý quan trọng</b></label>
                        <ul>
                            <li>Bệnh viện có nhiều khu khám bệnh, hiện tại BookingCare đang hỗ trợ đăng ký khám tại tòa nhà C4 - Khoa khám bệnh theo yêu cầu. Người bệnh đến khám đúng tòa nhà C4 để được hỗ trợ.</li>
                            <li>Bệnh viện chuyên về Ngoại khoa nên lịch của các bác sĩ thường linh động và ưu tiên khám cho các ca cấp cứu.</li>
                            <li>đầu chuyển khám thêm khoa khác.</li>
                        </ul>
                        <label><b>Chi phí khám</b></label><br></br>
                        <label>Người bệnh có thể lựa chọn một trong các gói khám sau:</label>
                        <br></br>
                        <label>1. Gói 1:</label>
                        <ul>
                            <li>Khám Giáo sư, Phó Giáo sư, Tiến sĩ, Bác sĩ Chuyên khoa II - Chi phí 500.000 đồng/lần khám</li>
                            <li>Khám với bác sĩ Trưởng khoa hoặc Phó khoa - Chi phí 500.000 đồng/lần khám</li>
                        </ul>
                        <label>2. Gói 2:</label>
                        <ul>
                            <li>Khám Thạc sĩ, Bác sĩ Chuyên khoa I - Chi phí: 300.000 đồng/lần khám</li>
                        </ul>
                    </div>
                    <div className='professional' ref={this.sectionRefs.professional}>
                        <span>THẾ MẠNH CHUYÊN MÔN</span><br></br>
                        <p>Bệnh viện Việt Đức là bệnh viện chuyên khoa Ngoại (phẫu thuật), có thế mạnh về khám, điều trị và Phẫu thuật nhiều chuyên khoa. Một số thế mạnh của Bệnh viện Việt Đức là:</p>
                        <ul>
                            <li><b>Khám, điều trị, phẫu thuật về Thần kinh (Thần kinh I, Thần kinh II):</b> Chấn thương; Bệnh lý sọ não; Tuỷ sống; Dây thần kinh ngoại vi; Ứng dụng nội soi trong phẫu thuật thần kinh; Phẫu thuật thần kinh chức năng; Phẫu thuật u nền sọ;...</li>
                            <li><b>Khám, điều trị, phẫu thuật về Cơ xương khớp:</b></li>
                            <li style={{ listStyle: "none" }}>
                                <ul >
                                    <li><b>Khám, điều trị, phẫu thuật về Chi trên và Y học thể thao:</b> Khám các bệnh lý do chấn thương thể thao; Bệnh lý đứt dây chằng gối do chơi thể thao; Chấn thương chỉnh hình xương khớp; Phẫu thuật bàn tay; Bệnh lý cơ xương khớp về tay;...</li>
                                    <li><b>Khám, điều trị, phẫu thuật về Chi dưới:</b> Điều trị thoái hóa khớp gối, khớp háng; Bệnh lý đứt dây chằng gối; Phẫu thuật khớp gối, khớp háng, khớp cổ chân; Bệnh lý về chân;...</li>
                                    <li><b>Khám, điều trị, phẫu thuật về Xương và điều trị ngoại trú:</b> Nắn chỉnh về xương, tai nạn bị gãy tay gãy chân, tháo bột, kiểm tra lại sau khi nắn chỉnh về xương.</li>
                                    <li><b>Khám, điều trị, phẫu thuật về chấn thương chung:</b> tháo đinh, kiếm tra lại sau mổ,...</li>
                                </ul>
                            </li>
                            <li><b>Khám, điều trị, phẫu thuật về Cột sống:</b> Bệnh lý cột sống; Đau vai gáy; Thoái hoá và thoát vị đĩa đệm; Chấn thương chỉnh hình cột sống; Trượt đốt sống; Vẹo cột sống; Bơm xi-măng vào thân đốt sống;...</li>
                            <li><b>Khám, điều trị, phẫu thuật về Tim mạch và lồng ngực:</b> Khám và điều trị bệnh lý tim bẩm sinh trẻ em; Khám và điều trị các bệnh lý nội, ngoại khoa về tim mạch; Điều trị các bệnh lý phức tạp về động - tĩnh mạch bằng các phương pháp tiên tiến; Các bệnh lý về xương sườn;...</li>
                            <li><b>Khám, điều trị, phẫu thuật về Tạo hình-Hàm mặt-Thẩm mỹ:</b> Bệnh lý và chấn thương vùng hàm mặt; Phục hồi tái tạo các cơ quan sau điều trị ung thư; Sửa chữa các dị tật sọ mặt; Nối vành tai đứt rời, mũi đứt rời ; Phẫu thuật thẩm mĩ mi mắt, mũi, tạo hình ngực, bụng….</li>
                            <li><b>Khám, điều trị, phẫu thuật về Tiêu hóa:</b> Cắt bỏ và tạo hình thực quản; Cắt khối tá tuỵ; Cắt toàn bộ dạ dày, cắt đại tràng các loại.</li>
                        </ul>
                        <label><b>Ngoài ra, bệnh viện khám, điều trị, phâu thuật các chuyên khoa khác như:</b></label>
                        <ul>
                            <li>Bệnh lý thần kinh</li>
                            <li>Nội - Hồi sức thần kinh</li>
                            <li>Bệnh tim mạch và lồng ngực</li>
                            <li>Phẫu thuật tim mạch - lồng ngực</li>
                            <li>Ngoại nhi và trẻ sơ sinh</li>
                            <li>Bệnh lý tiêu hóa</li>
                            <li>Phẫu thuật tiêu hóa</li>
                            <li>Bệnh cột sống/thoát vị đĩa đệm</li>
                            <li>Chi trên và y học thể thao</li>
                            <li>Bệnh lý chi dưới</li>
                            <li>Khám xương và điều trị ngoại trú</li>
                            <li>Phẫu thuật chấn thương chung</li>
                            <li>Phẫu thuật tạo hình - hàm mặt - thẩm mỹ</li>
                            <li>Phục hồi chức năng</li>
                            <li>Nhiễm khuẩn</li>
                            <li>Phẫu thuật nhiễm khuẩn</li>
                            <li>Bệnh đường tiết niệu</li>
                            <li>Bệnh nam học/nam khoa</li>
                            <li>Bệnh lý gan mật</li>
                            <li>Ung bướu</li>
                            <li>Thận lọc máu</li>
                            <li>Bệnh lý hậu môn trực tràng</li>
                            <li>Trung tâm ghép tạng</li>
                            <li>Phòng khám Tai mũi họng</li>
                        </ul>
                    </div>
                    <div className='equipment' ref={this.sectionRefs.equipment}>
                        <span>TRANG THIẾT BỊ</span>
                        <p>Bệnh viện Việt Đức được trang bị hầu hết các trang thiêt bị hiện đại hàng đầu hiện nay phục vụ trong chẩn đoán và thực hiện các xét nghiệm cơ bản, xét nghiệm kỹ thuật cao như các xét nghiệm theo dõi bệnh nhân ghép tạng, các xét nghiệm chỉ điểm khối u.</p>
                        <ul >
                            <li>Xquang số hóa</li>
                            <li>Máy siêu âm</li>
                            <li>Máy chụp cắt lớp vi tính đa dãy CT Scan</li>
                            <li>Máy chụp cộng hưởng từ MRI 3.0 Tesla</li>
                            <li>Hệ thống chụp mạch máy chuyên dụng</li>
                            <li>Hệ thống PET/CT phát hiện ung thư sớm và đánh giá các bệnh lý tim mạch, thần kinh</li>
                            <li>Hệ thống máy sinh hóa miễn dịch tự động, máy sinh hóa tự động, máy xét nghiệm huyết học, xét nghiệm đông máu tự động…</li>
                        </ul>
                        <label>Các thiết bị thăm dò chức năng hỗ trợ thăm khám và thực hiện các thủ thuật nội soi tiêu hóa - gan mật.</label>
                        <ul >
                            <li>Nội soi thực quản - dạ dày - tá tràng chẩn đoán</li>
                            <li>Nội soi đại trực tràng chẩn đoán</li>
                            <li>Nội soi đường mật - tụy ngược dòng ERCP</li>
                            <li>Siêu âm nội soi chẩn đoán bệnh lý thuộc cơ quan tiêu hóa, chọc hút tế bào</li>
                            <li>Nội soi can thiệp, nong hẹp đường tiêu hóa</li>
                            <li>Nội soi đặt stent khí quản, đặt sonde tá tràng</li>
                            <li>Nội soi can thiệp đại tràng</li>
                        </ul>
                    </div>
                    <div className='location' ref={this.sectionRefs.location}>
                        <span>VỊ TRÍ</span>
                        <p>Các trang web khác ghi địa chỉ Bệnh viện Việt Đức ở 40 Tràng Thi, đây là cổng chính nhưng thông thường chỉ dành cho những công việc giấy tờ, hành chính. Bệnh nhân đến khám sẽ đi các cổng phụ trên đường Phủ Doãn. </p>
                        <p>Trên đường Phủ Doãn có 3 cổng và đường Tràng Thi có 1 cổng chính. Người bệnh nên đi đúng cổng như chỉ dẫn để đi đến phòng khám dễ dàng, nhanh chóng nhất.</p>
                        <div className='img'>
                            <img alt="" src='https://cdn.bookingcare.vn/fo/w1200/2018/07/04/133335so-do-benh-vien-viet-duc.jpg' />
                        </div>
                    </div>
                    <div className='process' ref={this.sectionRefs.process}>
                        <span>QUY TRÌNH KHÁM</span><br></br>
                        <label>Quy trình khám dành cho người bệnh đặt khám thông qua BookingCare</label>
                        <div className='img'>
                            <img alt="" src='https://cdn.bookingcare.vn/fo/w1200/2024/01/29/164343-huong-dan-kham-c4.png' />
                        </div>
                        <label>Dưới đây là <b>Hướng dẫn làm thủ tục ưu tiên</b> cho người bệnh đặt khám qua BookingCare tại Bệnh viện Hữu nghị Việt Đức.</label><br></br>
                        <label><b>1.</b> Bạn đến cổng số <b>16-18 Phủ Doãn</b></label>
                        <label>Về nơi gửi xe:</label>
                        <ul>
                            <li>Xe máy gửi tại bãi đỗ xe trước cửa bệnh viện (có nhân viên bảo vệ hướng dẫn).</li>
                            <li>Xe ô tô gửi tại Cung Văn hóa Hữu nghị Việt Xô, cách bệnh viện khoảng 500m.</li>
                        </ul>
                        <div className='img'>
                            <img alt="" src='https://cdn.bookingcare.vn/fo/w1200/2018/08/01/114926cong--so--1-benh-vien-viet-duc.jpg' />
                        </div>
                        <label><b>2.</b>Bạn đến <b>Tòa nhà C4</b>: Tòa nhà thứ 2 bên tay trái từ cổng vào số 16-18 Phủ Doãn.</label>
                        <div className='img'>
                            <img alt="" src='https://cdn.bookingcare.vn/fo/w1200/2021/07/07/160715-c4-bv-viet-duc.jpg' />
                        </div>
                        <label><b>3.</b>Vào tầng 1, <b>ĐẾN QUẦY CUNG CẤP THÔNG TIN BÁO ĐẶT QUA BOOKINGCARE</b> để nhân viên hỗ trợ (xem thêm hình dưới).</label>
                        <div className='img'>
                            <img alt="" src='https://cdn.bookingcare.vn/fo/w1200/2021/07/07/160715-c4-bv-viet-duc.jpg' />
                        </div>
                        <ul>
                            <li>Quý khách lấy số ưu tiên và chờ gọi số tại quầy đăng ký số 7,9 (phiếu khám đã được in sẵn, người bệnh KHÔNG cần khai báo thêm).</li>
                        </ul>
                        <label><b>4.</b>Bạn sẽ nhận được phiếu khám <b>có dán tem ưu tiên</b></label>
                        <div className='img'>
                            <img alt="" src='https://cdn.bookingcare.vn/fo/w1200/2021/07/07/145644-kham-uu-tien-benh-vien-viet-duc.jpg' />
                        </div>
                        <label><b>5.</b>Bạn vào thẳng phòng khám, <b>nộp phiếu khám, sổ khám bệnh và báo đã đặt khám qua BookingCare</b> cho nhân viên điều dưỡng tại phòng để được <b> ưu tiên khám</b>.</label>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailHospital);
