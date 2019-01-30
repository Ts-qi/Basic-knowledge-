import { 
    BrowserRouter,
    Switch ,
    Route
} from 'react-router-dom';
import React from 'react'
import Loadable from 'react-loadable';
import defaultRoutes from './config.js'

const router = () => {
    return (
            <Switch>
                {
                    defaultRoutes && defaultRoutes.length >0 ? 
                    defaultRoutes.map( menu => {
                        return menu;
                    }) : null

                }
            
            </Switch>

    )
}
export default router;