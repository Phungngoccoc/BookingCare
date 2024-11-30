import { withRouter } from 'react-router-dom';
import { Component } from 'react';

class ScrollToTop extends Component {
    componentDidUpdate(prepProps) {
        // console.log("check location: ", this.props.location.pathname);
        if (this.props.location && prepProps.location) {
            if (this.props.location.pathname !== prepProps.location.pathname) {
                window.scrollTo(0, 0);
            }
        }
    }

    render() {
        return null;
    }
}

export default withRouter(ScrollToTop);
