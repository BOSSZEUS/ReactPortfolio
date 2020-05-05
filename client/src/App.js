import React, { Component } from 'react'
import Home from './components/Home'
import Resume from './components/Resume'
import Links from './components/Links'
import Error from './components/Error'

import { BrowserRouter as 
  Router, 
  Route,
  Switch 
} from 'react-router-dom'

class App extends Component {
  render(){
    return(
      
      <Router>
        <div>
          <Switch>
            <Route path='/'component={Home} exact />
            <Route path='/resume'component={Resume} />
            <Route path='/links'component={Links} />
            <Route component={Error}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App


//bitnami