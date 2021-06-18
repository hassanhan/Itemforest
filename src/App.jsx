import React , {Component} from 'react'
import {Route , Switch} from 'react-router-dom'
import Items from './Items'

import Car from './Car'
import Nav from './Home'
import Menu from './Menu'


function App() {


  return (
   <>
    <Menu/>
    <Switch>
    <Route exact path="/" component={Nav}/>
    <Route exact path="/Car" component={Car}/>
    <Route exact path="/Items" component={Items}/>
   
    </Switch>
   </>
  );
}

export default App;
