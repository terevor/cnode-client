import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { connect } from 'react-redux';

@connect(
    ({ progress }) => ({
        showProgress: progress.show
    })
)

export default class Loading extends React.Component {
    static propTypes = {
        
    };

    constructor(props) {
        super(props);
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
        const { showProgress } = this.props;console.log('Loading render');
        const styles = this.getStyles();
        return (
            <div style={{ ...styles.loadingModal, display: showProgress ? 'block' : 'none' }}>
                <div style={styles.loadingWrapper}>
                    <CircularProgress size={2} />
                </div>
            </div>
        );
    }
}