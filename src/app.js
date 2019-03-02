import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/common/Home'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Navbar from './components/common/Navbar'
import CrawlShow from './components/crawls/CrawlShow'
import CrawlNew from './components/crawls/CrawlNew'
import UserShow from './components/Auth/UserShow'
import BarsIndex from './components/bars/BarsIndex'
import BarsNew from './components/bars/BarsNew'
import './style.scss'
import 'bulma'

class App extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <BrowserRouter>
          <main>
            <Navbar />
            <Switch>
              <Route path="/bars/new" component={BarsNew} />
              <Route path="/bars" component={BarsIndex} />
              <Route path="/bars/:id" component={BarsIndex} />
              <Route path="/crawls/:id" component={CrawlShow} />
              <Route path="/crawls" component={CrawlNew} />
              <Route path="/users/:id" component={UserShow} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/" component={Home} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
