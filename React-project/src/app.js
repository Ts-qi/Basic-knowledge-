import React from 'react'
// import Nav from './components/nav/nav.js';
import Route from './routes'
import { 
    BrowserRouter
} from 'react-router-dom';
import './main.css'


import Counter from '../src/components/counter/Counter.js'


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
            // loginName:''
        }
    }
    render() {
        let { loginName = 'tangqi' } = this.state
        return (
            <BrowserRouter>

                <div className={'mainWarper'}>
                    <div className={'navLeft'}>
                        菜单导航
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
                        <div >

                            <Counter 
                                value={this.props.store.getState()}
                                onIncrement={() =>this.props. store.dispatch({ type: 'INCREMENT' })}
                                onDecrement={() =>this.props. store.dispatch({ type: 'DECREMENT' })}/>
                        </div>

                
                    </div>
                    
                </div>
            </BrowserRouter>
        )
    }
}
export default App;