import React from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MySnackbar from 'COMPONENT/MySnackbar';
import Login from 'COMPONENT/Login';
import Loading from 'COMPONENT/Loading';
import Sidebar from 'COMPONENT/Sidebar';

@connect(
    ({ login }) => ({ isLogedin: login.isLogedin }),
    require('ACTION/login.action').default
)

export default class HeaderContainer extends React.Component {
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

    componentDidMount() {
        this.props.checkLogin();
    }

    render() {
        const styles = this.getStyles();console.log('HeaderContainer render');
        //const { showLogin, errorText, isLogedin, showSnackbar, message, dispatch } = this.props;
        const { isLogedin, openLogin } = this.props;

        const leftPart = (
            <div>
                <img src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" style={styles.logo}/>
            </div>
        );
        const rightPart = isLogedin ? (<Sidebar/>) : (
            <FlatButton
                label="登录"
                keyboardFocused={true}
                onTouchTap={openLogin}
            />
        );
        //let boundLoginAction = bindActionCreators(loginAction, dispatch);//showLogin={showLogin} errorText={errorText} { ...boundLoginAction }
        return(
            <div>
                <AppBar
                    style={styles.appBar}
                    title=""
                    iconElementLeft={leftPart}
                    iconElementRight={rightPart}
                />
                <Login/>
                <Loading/>
                <MySnackbar/>
            </div>
        );
    }
}