import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Login from './Login';
import UserProfile from './UserProfile';
import * as loginAction from '../actions/login.action';

class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    getStyles() {
        const styles = {
            appBar: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0
            },
            logo: {
                width: '120px',
                display: 'block',
                float: 'left',
                marginTop: '6px',
                marginRight: '10px',
                marginLeft: '40px'
            }
        };
        return styles;
    }

    render() {
        const styles = this.getStyles();
        const { isLogedin, openLogin } = this.props;
        const leftPart = (
            <div>
                <img src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" style={styles.logo}/>
            </div>
        );
        const rightPart = isLogedin ? (<div><UserProfile/></div>) : (
            <FlatButton
                label="登录"
                keyboardFocused={true}
                onTouchTap={openLogin}/>
        );
        return(
            <div>
                <AppBar
                    style={styles.appBar}
                    title=""
                    iconElementLeft={leftPart}
                    iconElementRight={rightPart}/>
                 <Login/>
            </div>
        );
    }

}

HeaderBar.propTypes = {
    
}

function mapStateToProps(state) {
    return {
        isLogedin: state.login.isLogedin
    };
}

function mapDispatchToProps(dispatch) {
  return {
    openLogin: () => dispatch(loginAction.openLogin())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);