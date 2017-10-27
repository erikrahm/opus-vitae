import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import Root from 'Containers/Root/Root.jsx'

import FourOhFour from 'Components/FourOhFour/FourOhFour.jsx'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='app'>
          <Switch>
            <Route exact path='/' component={Root}/>

            <Route path="*" component={FourOhFour}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
