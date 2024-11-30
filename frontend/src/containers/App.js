import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';
// import CustomScrollbars from '../components/CustomScrollbars';
import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';
import { path } from '../utils'
import Home from '../routes/Home';
import Login from './Auth/Login';
import System from '../routes/System';
import { CustomToastCloseButton } from '../components/CustomToast';
import HomePage from './HomePage/HomePage'
import DetailDoctor from './HomePage/Doctor/DetailDoctor';
// import Doctor from '../routes/Doctor';
import Cooperate from './HomePage/Other/Cooperate';
import Appointment from './HomePage/Other/Appointment';
import ListSpecialty from './HomePage/Specialty/ListSpecialty';
import AtHome from './HomePage/Other/AtHome';
import AtHospital from './HomePage/Other/AtHospital';
import HealthyLife from './HomePage/Other/HealthyLife';
import DetailService from './HomePage/Service/DetailService';
import DetailHospital from './HomePage/Hospital/DetailHospital';
// import ScrollToTop from './ScrollToTop';
import ScrollToTop from "react-scroll-to-top";
import { Helmet } from 'react-helmet'

class App extends Component {

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }
    componentDidUpdate(prepProps) {
        // console.log("check location: ", this.props.location.pathname);
        if (this.props.location && prepProps.location) {
            if (this.props.location.pathname !== prepProps.location.pathname) {
                window.scrollTo(0, 0);
            }
        }
    }
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>BookingCare - Nền tảng y tế sức khỏe toàn diện</title>
                </Helmet>
                <Router history={history}>
                    <ScrollToTop />
                    <div className="main-container">
                        <div className="content-container">
                            {/* <CustomScrollbars style={{ height: '100vh', width: '100%' }}> */}
                            <Switch>
                                <Route path={path.HOME} exact component={(Home)} />
                                <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
                                <Route path={path.HOMEPAGE} component={HomePage} />
                                <Route path={path.DETAIL_DOCTOR} component={DetailDoctor} />
                                <Route path={path.COOPERATE} component={Cooperate} />
                                <Route path={path.APPOINTMENT} component={Appointment} />
                                <Route path={path.LIST_SPECIALTY} component={ListSpecialty} />
                                <Route path={path.AT_HOME} component={AtHome} />
                                <Route path={path.AT_HOSPITAL} component={AtHospital} />
                                <Route path={path.HEALTHY_LIFE} component={HealthyLife} />
                                <Route path={path.DETAIL_SERVICE} component={DetailService} />
                                <Route path={path.DETAIL_HOSPITAL} component={DetailHospital} />
                            </Switch>
                            {/* </CustomScrollbars> */}
                        </div>

                        <ToastContainer
                            className="toast-container" toastClassName="toast-item" bodyClassName="toast-item-body"
                            autoClose={false} hideProgressBar={true} pauseOnHover={false}
                            pauseOnFocusLoss={true} closeOnClick={false} draggable={false}
                            closeButton={<CustomToastCloseButton />}
                        />
                    </div>
                </Router>
            </Fragment >
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);