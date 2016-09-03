import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import SvgIconPerson from 'material-ui/svg-icons/social/person';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import SvgIconExit from 'material-ui/svg-icons/action/exit-to-app';
import sidebarAction from 'ACTION/sidebar.action';
import { logout } from 'ACTION/login.action';
import { go } from 'react-router-redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

@connect(
    ({ login, sidebar }) => ({
        sidebarShow: sidebar.show,
        user: login.user
    }),
    (dispatch) => ({
        showSidebar: () => {
            dispatch(sidebarAction.showSidebar());
        },
        hideSidebar: () => {
            dispatch(sidebarAction.hideSidebar());
        },
        doLogout: () => {
            dispatch(logout());
            dispatch(sidebarAction.hideSidebar());
            dispatch(go(-1));
            window.localStorage.removeItem('user');
        }
    })
)

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { sidebarShow, user, showSidebar, hideSidebar, doLogout } = this.props;
        console.log('Sidebar render');
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
                <IconButton tooltip="用户信息" onTouchTap={showSidebar}>
                    <SvgIconPerson />
                </IconButton>
                <Drawer open={sidebarShow} width={200} docked={false} onRequestChange={hideSidebar}>
                    <MenuItem style={style.menu}>
                        <Link to='/' style={style.avatar}>
                            {avatar}
                        </Link>
                    </MenuItem>
                    <MenuItem innerDivStyle={style.center} primaryText={user.loginname}></MenuItem>
                    <MenuItem leftIcon={<SvgIconExit/>} onTouchTap={doLogout} primaryText="退出登录"></MenuItem>
                </Drawer>
            </div>
        );
    }
}