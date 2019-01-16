import React from 'react'
import Nav from './components/nav/nav.js';
import './main.css'

class App extends React.Component {
    render() {
        return (
            <div className={'mainWarper'}>
                <div className={'navLeft'}>
                    <Nav/>
                </div>
                <div className={'mainContent'}>
                    主内容
                </div>
                
            </div>
        )
    }
}
export default App;