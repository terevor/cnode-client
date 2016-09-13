import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import SvgIconFavor from 'material-ui/svg-icons/action/favorite';
import SvgIconFavorBorder from 'material-ui/svg-icons/action/favorite-border';
import SvgIconReply from 'material-ui/svg-icons/content/reply';
import { red500 } from 'material-ui/styles/colors';
import topicAction from 'ACTION/topic.action';
import loginAction from 'ACTION/login.action';
import moment from 'moment';
require('moment/locale/zh-cn');
require('STYLE/markdown.css');

@connect(
    ({ login, topic }) => ({
        user: login.user,
        isLogedin: login.isLogedin,
        topicDetail: topic.topicDetail,
        topicDetailCollect: topic.topicDetailCollect
    })
)

export default class TopicDetail extends Component {
    constructor(props) {
        super(props);
    }

    /*componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }*/

    componentDidMount() {
        this.props.dispatch(topicAction.fetchTopicDetail({ id: this.props.params.id, accesstoken: this.props.user.accesstoken }));
    }

    componentWillUnmount() {
        this.props.dispatch(topicAction.closeTopic());
    }

    getStyles() {
        return {
            main: {
                fontFamily: '"Microsoft YaHei","Roboto",sans-serif!important',
                width: '90%',
                maxWidth: '1400px',
                minWidth: '960px',
                margin: '90px auto',
                minHeight: '400px'
            },
            item: {
                marginBottom: '10px',
                position: 'relative'
            },
            action: {
                position: 'absolute',
                right: '0px',
                top: '0px'
            }
        };
    }

    doCollectTopic(params) {
        const { isLogedin, dispatch, collectTopic } = this.props;
        if(!isLogedin) {
            dispatch(loginAction.openLogin());
            return;
        }
        dispatch(topicAction.collectTopic(params));
    }

    render() {
        const { topicDetail, topicDetailCollect, user, isLogedin } = this.props;console.log('TopicDetail render');

        if (!topicDetail) {
            return null;
        }

        const style = this.getStyles();

        const subtitle = `楼主 ${topicDetail.author.loginname} | ${topicDetail.visit_count}次浏览 | ${topicDetail.reply_count}个回复`;

        const collect_param = {
            id: topicDetail.id,
            accesstoken: user.accesstoken,
            type: (topicDetailCollect ? 'de_collect' : 'collect')
        };

        const btnFavor = topicDetailCollect ? <SvgIconFavor color={red500} /> : <SvgIconFavorBorder/>;

        const btnFavorTip = topicDetailCollect ? '取消收藏' : '收藏';

        const replies = topicDetail.reply_count > 0 ? (
                topicDetail.replies.map((reply, key) => {
                    let ss = moment(reply.create_at).startOf('second').fromNow();
                    ss = `${(key + 1)}楼 | ${ss}`;

                    return (
                        <Card key={key} style={style.item}>
                            <CardHeader
                                title={reply.author.loginname}
                                subtitle={ss}
                                avatar={reply.author.avatar_url}
                            />
                            <CardText>
                                <div dangerouslySetInnerHTML={{ __html: reply.content }} style={{ width: '100%' }}></div>
                            </CardText>
                            <CardActions style={style.action}>
                                <IconButton tooltip="回复" >
                                    <SvgIconReply/>
                                </IconButton>
                            </CardActions>
                        </Card>);
                })
            ) : null;

        return (
            <div style={style.main}>
                
                <Card style={style.item}>
                    <CardHeader
                        title={topicDetail.title}
                        subtitle={subtitle}
                        avatar={topicDetail.author.avatar_url}
                    />
                    <CardText>
                        <div dangerouslySetInnerHTML={{ __html: topicDetail.content }} style={{ width: '100%' }}></div>
                    </CardText>
                    <CardActions style={style.action}>
                        <IconButton tooltip={btnFavorTip} onTouchTap={() => this.doCollectTopic(collect_param)}>
                            {btnFavor}
                        </IconButton>
                    </CardActions>
                </Card>

                {replies}
            </div>
        );
    }
}
