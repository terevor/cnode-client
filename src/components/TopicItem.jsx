import React, { Component, PropTypes } from 'react';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import { cyan500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import moment from 'moment';
import momentLocale from 'moment/locale/zh-cn';

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
                width: '550px'
            },
            title: {
                color: cyan500
            },
            subtitle: {
                width: '440px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
            }
        }
    }
    render() {
        const { topic } = this.props;

        const tab = topic.top ? '置顶' : this.tabMap(topic.tab);

        let lastreply = moment(topic.last_reply_at).startOf('second').fromNow();
            lastreply = `最近回复于 ${lastreply} (点击查看详情)`;

        let title = `(${topic.reply_count}/${topic.visit_count}) ${tab}` ;
        
        let avatar = topic.author.avatar_url ? topic.author.avatar_url.replace(/^\/\//g,'http://') : '';

        const styles = this.getStyles();

        return(
            <Card style={styles.item}>
                <CardHeader
                  title={title}
                  titleStyle={topic.top ? styles.title : null}
                  subtitle={topic.title}
                  avatar={avatar}
                  subtitleStyle={styles.subtitle}
                />
                <CardActions>
                    <FlatButton label={lastreply} />
                </CardActions>
            </Card>);
    }
}