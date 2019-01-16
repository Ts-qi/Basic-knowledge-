import { 
    BrowserRouter,
    Switch ,
    Route
} from 'react-router-dom';
import React from 'react'

import Home from './components/home/home.js'


const router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ Home }/>
            
            </Switch>
                    
        </BrowserRouter>

    )
}
export default router;