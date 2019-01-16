import { 
    BrowserRouter,
    Switch ,
    Route
} from 'react-router-dom';
import React from 'react'

import Home from './components/home/home.js'
import Goods from './components/goods/goods.js'
import Setting from './components/setting/setting.js'
import Vip from './components/vip/vip.js'
import Store from './components/store/store.js'
import Data from './components/data/data.js'


const router = () => {
    return (
            <Switch>
                <Route exact path='/' component={ Home }/>
                <Route path='/goods' component={ Goods }/>
                <Route path='/setting' component={ Setting }/>
                <Route path='/vip' component={ Vip }/>
                <Route path='/store' component={ Store }/>
                <Route path='/data' component={ Data }/>
            
            </Switch>

    )
}
export default router;