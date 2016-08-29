import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';
import * as loginAction from '../actions/login.action';
import * as snackbarAction from '../actions/snackbar.action';

class Login extends React.Component {
    static propTypes = {
        
    };

    constructor(props) {
        super(props);
        this.accesstoken = '';
    }

    closeLogin = () => this.props.dispatch(loginAction.closeLogin());

    handleInputChange = (event) => {
        this.accesstoken = event.target.value.replace(/(^\s*)|(\s*$)/g, '');
        if (this.accesstoken === '') {
            this.props.dispatch(loginAction.loginInputError('不能为空'));
        } else {
            if(this.props.errorText !== '') {
                this.props.dispatch(loginAction.loginInputError());
            }
        }
        
    };

    validateAccessToken = () => {
        if (this.accesstoken === '') return;
        this.props.dispatch(loginAction.validateAccessToken(this.accesstoken));
    };

    handleSnackbarClose = () => this.props.dispatch(snackbarAction.hideSnackBar());

    render() {
        const { openLogin, errorText, showSnackbar, message } = this.props;
        return (
            <div style={{width: '300px'}}>
                <Dialog
                    title="登录验证"
                    modal={false}
                    open={openLogin}
                    onRequestClose={this.closeLogin}>
                    <div style={{width: '520px', marginLeft: 'auto'}}>
                        <TextField
                            hintText="请输入cnodejs.org的AccessToken"
                            onChange={this.handleInputChange}
                            floatingLabelText="AccessToken"
                            errorText={errorText}/>
                        <RaisedButton label="验证" secondary={true} disabled={errorText !== ''} onTouchTap={this.validateAccessToken} style={{marginLeft: '15px'}}/>
                    </div>
                </Dialog>
                <Snackbar
                    open={showSnackbar}
                    message={message}
                    autoHideDuration={4000}
                    onRequestClose={this.handleSnackbarClose}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    openLogin: state.login.openLogin,
    errorText: state.login.errorText,
    showSnackbar: state.snackbar.show,
    message: state.snackbar.message
});

export default connect(mapStateToProps)(Login);