import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchTopicList } from 'actions/topic.action';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { pinkA200 } from 'material-ui/styles/colors';

const mapStateToProps = (state) => ({
    currPage: state.pagination.currPage
});

export class Pagination extends Component {
    getStyles() {
        return {
            page: {
                position: 'fixed',
                right: '10px',
                width: '80px'
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
                pageMenus.push(<MenuItem primaryText={i} rightIcon={<ArrowBack style={{color: pinkA200}} />} onTouchTap={this.changePage.bind(this, i)} key={menuKey++} style={{ color: pinkA200 }} />);
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
        this.props.dispatch(fetchTopicList({ page: pageNo }));
    }

    render() {
        const { currPage } = this.props;
        const styles = this.getStyles();
        const totalPage = 410;
        const menus = this.getPageMenus(currPage, totalPage);

        return (
            <div style={styles.page}>
                <Menu desktop={true}>
                    <MenuItem primaryText="首页" onTouchTap={this.changePage.bind(this, 1)}/>
                    <Divider />
                    {menus}
                    <MenuItem primaryText="末页" onTouchTap={this.changePage.bind(this, totalPage)} />
                 </Menu>
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(Pagination);