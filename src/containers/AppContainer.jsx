//require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderBar from '../components/HeaderBar';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <HeaderBar />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default AppContainer;