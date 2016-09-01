import React from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';

@connect(
    ({ snackbar }) => ({
        showSnackbar: snackbar.show,
        message: snackbar.message
    }),
    require('ACTION/snackbar.action').default
)

export default class MySnackbar extends React.Component {
    static propTypes = {
        
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { showSnackbar, message, hideSnackBar } = this.props;console.log('MySnackbar render');
        return (
            <Snackbar
                open={showSnackbar}
                message={message}
                autoHideDuration={3000}
                onRequestClose={hideSnackBar}
            />
        );
    }
}