import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { pinkA200 } from 'material-ui/styles/colors';
/*import { connect } from 'react-redux';

@connect(
    ({ pagination }) => ({ currPage: pagination.currPage }),
    require('ACTION/topic.action').default
)*/

const currPageIcon = (<ArrowBack color={pinkA200} />);

export default class Pagination extends Component {
    getStyles() {
        return {
            page: {
                position: 'fixed',
                right: '10px',
                width: '80px',
                top: '150px'
            },
            paper: {
                display: 'inline-block'
            }
        }
    }

    getPageMenus(currPage, totalPage) {
        let pageMenus = [], menuKey = 1;

        let beginIndex = currPage - 2;
            beginIndex = beginIndex < 1 ? 1 : beginIndex;

        let endIndex = beginIndex + 7;
            endIndex = endIndex > totalPage ? totalPage : endIndex;

        if(beginIndex > 1) {
            pageMenus.push(<MenuItem primaryText="..." key={menuKey++}/>);
            pageMenus.push(<Divider key={menuKey++}/>);
        }

        for(let i = beginIndex; i <= endIndex; i++) {
            if(i === currPage) {
                pageMenus.push(<MenuItem primaryText={i} rightIcon={currPageIcon} onTouchTap={this.changePage.bind(this, i)} key={menuKey++} style={{ color: pinkA200 }} />);
            } else {
                pageMenus.push(<MenuItem primaryText={i} onTouchTap={this.changePage.bind(this, i)} key={menuKey++} />);
            }
            pageMenus.push(<Divider key={menuKey++}/>);
        }

        if(totalPage - endIndex > 1) {
            pageMenus.push(<MenuItem primaryText="..." key={menuKey++}/>);
            pageMenus.push(<Divider key={menuKey++}/>);
        }

        return pageMenus;
    }

    changePage(pageNo) {
        this.props.fetchTopicList({ page: pageNo });
    }

    render() {
        const { currPage } = this.props;console.log('Pagination render');
        const styles = this.getStyles();
        const totalPage = 410;
        const menus = this.getPageMenus(currPage, totalPage);

        return (
            <div style={styles.page}>
                <Paper style={styles.paper}>
                    <Menu desktop={true}>
                        <MenuItem primaryText="首页" onTouchTap={this.changePage.bind(this, 1)}/>
                        <Divider/>
                        {menus}
                        <MenuItem primaryText="末页" onTouchTap={this.changePage.bind(this, totalPage)} />
                    </Menu>
                </Paper>
            </div>
        );
    }
}