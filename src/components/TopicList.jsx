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
                width: '1200px',
                margin:'100px auto 0'
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