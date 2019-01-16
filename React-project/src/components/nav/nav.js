import React from 'react';
import { Button } from 'antd';
import './nav.styl';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className={'navWarpper'}>
                <div className={'nav'}>
                    导航
                </div>

            </div>
        )
    }
};

export default Nav;