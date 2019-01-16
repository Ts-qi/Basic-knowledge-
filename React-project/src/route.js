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
                <Route exact path='/goods' component={ Goods }/>
                <Route exact path='/setting' component={ Setting }/>
                <Route exact path='/vip' component={ Vip }/>
                <Route exact path='/store' component={ Store }/>
                <Route exact path='/data' component={ Data }/>
            
            </Switch>

    )
}
export default router;