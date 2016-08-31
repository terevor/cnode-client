import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { connect } from 'react-redux';

@connect(
    ({ login }) => ({ showLogin: login.showLogin, errorText: login.errorText }),
    require('ACTION/login.action').default
)

export default class Login extends React.Component {
    static propTypes = {
        
    };

    constructor(props) {
        super(props);
        this.accesstoken = '';
    }

    handleInputChange = (event) => {
        this.accesstoken = event.target.value.replace(/(^\s*)|(\s*$)/g, '');
        if (this.accesstoken === '') {
            this.props.loginInputError('不能为空');
        } else {
            if(this.props.errorText !== '') {
                this.props.loginInputError();
            }
        }
        
    };

    validateAccessToken = () => {
        if (this.accesstoken === '') return;
        this.props.validateAccessToken(this.accesstoken);
    };

    render() {
        const { showLogin, errorText, closeLogin } = this.props;console.log('Login render');
        return (
            <div style={{width: '300px'}}>
                <Dialog
                    title="登录验证"
                    modal={false}
                    open={showLogin}
                    onRequestClose={closeLogin}>
                    <div style={{width: '520px', marginLeft: 'auto'}}>
                        <TextField
                            hintText="请输入cnodejs.org的AccessToken"
                            onChange={this.handleInputChange}
                            floatingLabelText="AccessToken"
                            errorText={errorText}/>
                        <RaisedButton label="验证" secondary={true} disabled={errorText !== ''} onTouchTap={this.validateAccessToken} style={{marginLeft: '15px'}}/>
                    </div>
                </Dialog>
            </div>
        );
    }
}