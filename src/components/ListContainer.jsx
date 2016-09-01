import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TopicList from 'COMPONENT/TopicList';
import Pagination from 'COMPONENT/Pagination';
//import topicAction from 'ACTION/topic.action';

/*const mapDispatchToProps = (dispatch) => {
    return {
        fetchTopicList: (param) => {
            dispatch(topicAction.fetchTopicList(param));
        }
    };
};

const mapStateToProps = (state) => ({
    token: state.login.user.accesstoken,
    topics: state.topic.topics,
    currPage: state.pagination.currPage
});*/

@connect(
    ({ login, topic, pagination }) => ({
        //token: login.user.accesstoken,
        topics: topic.topics,
        currPage: pagination.currPage
    }),
    require('ACTION/topic.action').default
)

export default class ListContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTopicList();
    }
    
    render() {
        const { topics, currPage, fetchTopicList } = this.props;console.log('ListContainer render');
        return (
            <div>
                <TopicList topics={topics}/>
                <Pagination currPage={currPage} fetchTopicList={fetchTopicList}/>
            </div>
        );
    }
}

/*export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListContainer);*/