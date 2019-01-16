import React from 'react';
import { Menu, Icon, Switch } from 'antd';
import './nav.styl';
import { 
    withRouter,
    
} from 'react-router-dom';
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navInfo: [
                {name:'概况',id:1,url:'/'},
                {name:'产品',id:2,url:'/goods'},
                {name:'设置',id:3,url:'/setting'},
                {name:'会员',id:4,url:'/vip'},
                {name:'店铺',id:5,url:'/store'},
                {name:'数据',id:6,url:'/data'},
            ]
        }
        this.handleRoute = this.handleRoute.bind(this);
    }
    handleRoute(url) {
        let { history } = this.props;
        history.push(url)
    }
   

    render () {
        let { navInfo } = this.state;
        return (
            <div className={'navWarpper'}>
                <div className={'navValter'}>
                </div>
              
                {
                    navInfo && navInfo.length >0 ?
                    navInfo.map((item,index) => {
                      {  return <div className={'navItem'} key={index} onClick={ this.handleRoute.bind(this,item.url)} >
                                    { item.name}
                                </div>}
                    }): null

                }

            </div>
        )
    }
};

export default withRouter(Nav) ;