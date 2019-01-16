import { 
    BrowserRouter,
    Switch ,
    Route
} from 'react-router-dom';
import React from 'react'
import Loadable from 'react-loadable';

const Home = Loadable({
    loader: () => import('./components/home/home.js'),
    loading: () => null
})
const Goods = Loadable({
    loader: () => import('./components/goods/goods.js'),
    loading: () => null
})
const Setting = Loadable({
    loader: () => import('./components/setting/setting.js'),
    loading: () => null
})
const Vip = Loadable({
    loader: () => import('./components/vip/vip.js'),
    loading: () => null
})
const Store = Loadable({
    loader: () => import('./components/store/store.js'),
    loading: () => null
})
const Data = Loadable({
    loader: () => import('./components/data/data.js'),
    loading: () => null
})
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