import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import RopelessFishingGearDemonstrator from './views/ropeless-fishing-gear-demonstrator'
import DAQ from './views/daq'
import MyWork from './views/my-work'
import TheUnit from './views/the-unit'
import PlantWatering from './views/plant-watering'
import Home from './views/home'
import AboutMe from './views/about-me'
import Isaac from './views/isaac'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={RopelessFishingGearDemonstrator}
          exact
          path="/ropeless-fishing-gear-demonstrator"
        />
        <Route component={DAQ} exact path="/daq" />
        <Route component={MyWork} exact path="/my-work" />
        <Route component={TheUnit} exact path="/the-unit" />
        <Route component={PlantWatering} exact path="/plant-watering" />
        <Route component={Home} exact path="/" />
        <Route component={AboutMe} exact path="/about-me" />
        <Route component={Isaac} exact path="/isaac" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
