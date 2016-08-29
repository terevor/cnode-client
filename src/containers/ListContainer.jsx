import React from 'react';
import ListPage from 'components/ListPage';

class ListContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ListPage/>
            </div>
        );
    }
}

export default ListContainer;