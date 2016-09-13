import React, { Component, PropTypes } from 'react';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import { cyan500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import moment from 'moment';
require('moment/locale/zh-cn');

@connect()

export default class TopicItem extends Component {
    tabMap(tab) {
        switch(tab) {
            case 'share':
                return '分享';
            case 'job':
                return '招聘';
            case 'ask':
                return '问答';
            default:
                return '';
        }
    }

    getStyles() {
        return {
            item: {
                float: 'left',
                marginRight: '20px',
                marginBottom: '20px',
                width: '540px'
            },
            header: {
                paddingBottom: 0,
                height: '88px'
            },
            subtitle: {
                width: '450px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
            }
        }
    }

    showTopicDetail(id) {
        this.props.dispatch(push(`/detail/${id}`));
    }

    render() {
        const { topic } = this.props;

        const tab = topic.top ? '置顶' : this.tabMap(topic.tab);

        let lastreply = moment(topic.last_reply_at).startOf('second').fromNow();
        
        lastreply = `最近回复于 ${lastreply} (点击查看详情)`;

        const info = `${tab} | ${topic.visit_count}次浏览 | ${topic.reply_count}个回复`;
        
        const avatar = topic.author.avatar_url ? topic.author.avatar_url.replace(/^\/\//g,'http://') : '';

        const styles = this.getStyles();

        const titleStyle = topic.top ? { color: cyan500 } : null;

        return(
            <Card style={styles.item}>
                <CardHeader
                    style={styles.header}
                    title={topic.title}
                    titleStyle={titleStyle}
                    subtitle={info}
                    avatar={avatar}
                    subtitleStyle={styles.subtitle}
                />
                <CardActions>
                    <FlatButton label={lastreply} onTouchTap={this.showTopicDetail.bind(this, topic.id)} />
                </CardActions>
            </Card>);
    }
}