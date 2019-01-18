import React from 'react'
import { Row, Col } from 'antd';
import './home.styl';
class Home extends React.Component { 
    constructor(props) {
        super(props) 
        this.state = {
            imageList: [
                { url:require('../../assets/images/01.png'),name:'订单管理'},
                { url:require('../../assets/images/02.png'),name:'新增线路'},
                { url:require('../../assets/images/03.png'),name:'店铺装修'},
                { url:require('../../assets/images/04.png'),name:'客户管理'},
                { url:require('../../assets/images/05.png'),name:'店铺统计'},
                { url:require('../../assets/images/06.png'),name:'消息通知'},
            ]
        }
        
    }
    handleClick (name) {
        let { history } = this.props;
        let nameList = nameList.push(name)
        if(name == '订单管理') {
            history.push('./goods')
        }else if(name == '店铺装修') {
            history.push('./store')
        }
    }
    

    render () {
        let { imageList } = this.state;
        return (

            <div className={'home'}>

                <div className={'content'}>
                    <div>
                        <Row>
                            <Col span={12}>
                                <div className={'title'}>
                                    <span>数据概况</span> &nbsp;
                                    <span>更新时间：2019-01-17 15:13:02</span>
                                    <div className={'title-warpper'}>
                                        <Row>
                                            <Col span={8}>
                                                <b>2</b>
                                                <p className="padding-top">今日成交订单数</p>
                                            </Col>
                                            <Col span={8}>
                                                <b>0</b>
                                                <p className="padding-top">今日交易金额</p>
                                            </Col>
                                            <Col span={8}>
                                                <b>0</b>
                                                <p className="padding-top">今日新增会员</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className={'wxImage'}>
                                    <div className={'minCode display'}>
                                        <img width="120" height="120" src="https://image-c-dev.weimobwmc.com/dev-wxbase/804aa63ae23c47c9a3cd4b35ec157aa9.jpg" alt="暂无图片"/>
                                        <p className="padding-top"> 小程序</p>
                                    </div>
                                    <div className={'H5Code display'}>
                                        <img width="120" height="120" src="https://image-c-dev.weimobwmc.com/dev-wxbase-core/c2ceb005501e4567a64a99eee2a7aa61" alt="暂无图片"/>
                                        <p className="padding-top"> 公众号</p>
                                    </div>
                                </div>
                            </Col>
                            <Col span={4}>
                                产品配置服务
                            </Col>
                            {/* 常用功能 */}
                            
                            <Col span={20}>
                                <div className={'commonFunction'}>
                                    <b>常用功能</b> 
                                    <div className={'commonClick'}>
                                    {
                                        imageList && imageList.length > 0 ?
                                        imageList.map((img,index) => {
                                            return  <div  key={index} className="displays" onClick={this.handleClick.bind(this,img.name)}>
                                                        <span className="fun-img">
                                                            <img src={img.url} alt=" 暂无图片"/>
                                                        </span>
                                                        <p>{img.name}</p>
                                                    </div>
                                             
                                        }) : null
                                         
                                    }
                                       
                                    </div>

                                </div>
                            </Col>                            
                            
      
                        </Row> 
                    </div> 
                </div>
            </div>
        )
    }


}
export default Home;