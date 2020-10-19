import React from 'react'
import { Switch, Route } from 'react-router'
import Homepage from './pages/Homepage'

const app = () => {
    return (
        <div>
            <Switch>
                <Route path="/home" component={Homepage} />
            </Switch> 
        </div>

    )
}

export default app


//font-family: 'Raleway', sans-serif;
// font-family: 'Nunito', sans-serif;
// font-family: 'Poppins', sans-serif;