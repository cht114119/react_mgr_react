import React from 'react'
import {
    HashRouter as Router, Switch, Route, Redirect
} from 'react-router-dom'
import LayoutWarp from 'pages/layout'
import NotFound from 'pages/error/404'
import Login from '@/pages/login'
import authToken from 'utils/auth'

class App extends React.Component {
    render() {
        return (

            <Router>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/404'
                        render={() => {
                            if (!authToken.getToken()) {
                                return <Redirect to="/login" />;
                            }
                            return <NotFound />;
                        }
                        }></Route>
                    <Route path="/" component={LayoutWarp}></Route>
                </Switch>
            </Router>
        )
    }
}
export default App
