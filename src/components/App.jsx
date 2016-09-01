//require('normalize.css/normalize.css');
require('STYLE/App.css');

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderContainer from 'COMPONENT/HeaderContainer';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <HeaderContainer/>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;