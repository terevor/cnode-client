import React, { Component, PropTypes } from 'react';
//import { connect } from 'react-redux';
import TopicItem from './TopicItem';

/*@connect(
  ({ topic }) => ({ topics: topic.topics })
)*/

export default class TopicList extends Component {
    getStyles() {
        const styles = {
            wrapper: {
                fontFamily: '"Microsoft YaHei","Roboto",sans-serif!important',
                width: '90%',
                maxWidth: '1400px',
                minWidth: '1130px',
                margin: '90px auto',
                minHeight: '400px'
            }
            
        };
        return styles;
    }

    render() {
        const { topics } = this.props;console.log('TopicList render');

        const items = topics && topics.length > 0 ? (
                topics.map((topic, key) => {
                    return <TopicItem topic={topic} key={key} />;
                })
            ) : null;

        return (
            <div style={this.getStyles().wrapper}>
                {items}
            </div>
        );
    }
}