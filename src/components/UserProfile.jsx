import React from 'react';
import { connect } from 'react-redux';
import * as profileAction from 'actions/profile.action';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import SvgIconPerson from 'material-ui/svg-icons/social/person';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import SvgIconExit from 'material-ui/svg-icons/action/exit-to-app';
import { logout } from 'actions/login.action';
import { go } from 'react-router-redux';
import { Link } from 'react-router';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    toggleProfile = () => {
        if(this.props.showProfile) {
            this.hideProfile();
        } else {
            this.props.dispatch(profileAction.showProfile());
        }
    };

    hideProfile = () => this.props.dispatch(profileAction.hideProfile());

    doLogout = () => {
        this.props.dispatch(logout());
        this.hideProfile();
        this.props.dispatch(go(-1));
    };

    render() {
        const { showProfile, user } = this.props;
        const style = {
            avatar: {
                display: 'inline-flex',
                verticalAlign: 'middle'
            },
            menu: {
                marginTop: '10px',
                textAlign: 'center'
            },
            center: {
                textAlign: 'center'
            }
        };
        const avatar = !user.avatar_url ? (<Avatar icon={<SvgIconFace />} />) : (<Avatar src={user.avatar_url} />);
        return (
            <div>
                <IconButton tooltip="用户信息" onTouchTap={this.toggleProfile}>
                    <SvgIconPerson />
                </IconButton>
                <Drawer open={showProfile} width={200} docked={false} onRequestChange={() => this.hideProfile()}>
                    <MenuItem style={style.menu}>
                        <Link to='/' style={style.avatar}>
                            {avatar}
                        </Link>
                    </MenuItem>
                    <MenuItem innerDivStyle={style.center} primaryText={user.loginname}></MenuItem>
                    <MenuItem leftIcon={<SvgIconExit/>} onTouchTap={this.doLogout} primaryText="退出登录"></MenuItem>
                </Drawer>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    showProfile: state.profile.show,
    user: state.login.user
});

export default connect(mapStateToProps)(UserProfile);
