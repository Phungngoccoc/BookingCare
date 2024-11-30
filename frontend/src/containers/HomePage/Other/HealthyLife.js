import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/Section/HomeFooter'
import Information from '../../HomePage/Section/Information'
import './HealthyLife.scss'
import LatestNews from '../Section/LatestNews';
import FamousNews from '../Section/FamousNews';
import Community from '../Section/Community';
import HealthyCategory from '../Section/HealthyCategory';
import ContentAuthor from '../Section/ContentAuthor';
import { Helmet } from 'react-helmet'
class HealthyLife extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    async componentDidMount() {
    }
    componentDidUpdate(prepProps, preState, snapshot) {

    }
    returnToHome = () => {
        this.props.history.push(`/home`);
    }
    render() {

        return (
            <>
                <Helmet>
                    <title>Sống khỏe</title>
                </Helmet>
                <HomeHeader locations={"healthy"} />
                <div className='HealthyLife-container'>
                    <div className='AH-banner'>
                        <img alt="" src="https://bookingcare.vn/_next/image?url=https%3A%2F%2Fcdn.bookingcare.vn%2Ffo%2F2023%2F11%2F02%2F142138-song-khoe-suot-doi-1.png&w=1920&q=75" />
                    </div>

                </div>
                {/* <HomeTest /> */}
                <LatestNews />
                <FamousNews />
                <Community />
                <HealthyCategory />
                <ContentAuthor />
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

export default connect(mapStateToProps, mapDispatchToProps)(HealthyLife);
