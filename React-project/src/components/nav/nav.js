import React from 'react';
import { Menu, Icon, Switch } from 'antd';
import './nav.styl';
const SubMenu = Menu.SubMenu;
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navInfo: [
                {name:'概况',id:1},
                {name:'产品',id:2},
                {name:'设置',id:3},
                {name:'会员',id:4},
                {name:'营销',id:5},
                {name:'店铺',id:6},
                {name:'数据',id:7},
            ]
        }
        this.handleRoute = this.handleRoute.bind(this);
    }

   

    render () {
        let { navInfo } = this.state;
        console.log(this.props,'参数')
        return (
            <div className={'navWarpper'}>
                <div className={'navValter'}>
                </div>
              
                {
                    navInfo && navInfo.length >0 ?
                    navInfo.map((item,index) => {
                        return <div className={'navItem'} key={index} onClick={ this.handleRoute(item)} >
                                    { item.name}
                                </div>
                    }): null

                }

            </div>
        )
    }
};

export default Nav;