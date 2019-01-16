import React from 'react'
import Nav from './components/nav/nav.js';
import Route from './route'
import { 
    BrowserRouter
} from 'react-router-dom';
import './main.css'

import { Menu, Dropdown, Icon } from 'antd';
const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">智慧旅游</a>
      </Menu.Item>
    </Menu>
  );

class App extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            loginName:'智慧旅游'
        }
    }
    render() {
        let { loginName } = this.state
        return (
            <BrowserRouter>

                <div className={'mainWarper'}>
                    <div className={'navLeft'}>
                        <Nav/>
                    </div>
                    <div className={'mainContent'}>
                        <div className={'navTop'}>
                            <div className={'name'}>
                                {loginName}
                            </div>
                            <div className={'function'}>
                                <Dropdown overlay={ menu }>
                                    <a className="ant-dropdown-link" href="#">
                                        <Icon type="align-center" style={{ fontSize: '20px' }}/>
                                    </a>
                                </Dropdown>
                            </div>
                        </div>

                        {/* 路由切换内容 */}
                            <Route></Route>

                    </div>
                    
                </div>
            </BrowserRouter>
        )
    }
}
export default App;