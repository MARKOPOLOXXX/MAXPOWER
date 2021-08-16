import React from 'react'
import './App.css'
import { AiOutlineMenuFold } from 'react-icons/ai';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
}
    from 'react-router-dom'
import HomePage from './HomePage/index'
import AboutPage from './About/About'
import ContactPage from './ContactPage/Contact'
import HistoryPage from './History/History'

export default function MyRoute() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path='/contact' component={ContactPage} />
                <Route exact path='/history' component={HistoryPage}/>
            </Switch>
        </Router>
    )
}