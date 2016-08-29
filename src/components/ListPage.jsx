import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as topicAction from 'actions/topic.action';
import TopicList from './TopicList';
import Loading from './Loading';
import Pagination from './Pagination';

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTopicList: () => {
            dispatch(topicAction.fetchTopicList());
        }
    };
};

const mapStateToProps = (state) => ({
    topics: state.topic.topics,
    showProgress: state.progress.show
});

export class ListPage extends Component {
    componentDidMount() {
        this.props.fetchTopicList();
    }
    getStyles() {
    	const styles = {
    		loadingModal: {
    			width: '100%',
    			height: '100%',
    			position: 'fixed',
    			zIndex: '2',
    			backgroundColor: 'black',
    			top: '0',
    			left: '0',
    			right: '0',
    			bottom: '0',
    			opacity: '0.5'
    		},
    		loadingWrapper: {
    			width: '100px',
    			height: '100px',
    			marginLeft: 'auto',
    			marginRight: 'auto',
    			marginTop: '20%'
    		}
    	};
    	return styles;
    }
    render() {
        const styles = this.getStyles();
        return (
        	<div>
            	<div style={{ ...styles.loadingModal, display: this.props.showProgress ? 'block' : 'none' }}>
        			<div style={styles.loadingWrapper}>
        				<Loading/>
        			</div>
    			</div>
            	<TopicList/>
            	<Pagination/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPage);