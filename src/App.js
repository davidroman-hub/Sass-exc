import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'





import Home from './core/home';
import Excs from './core/excercices';




const App = () => {

  return(
    <BrowserRouter>
      <Switch>
        <Route path = '/' exact component = {Home}/>
        <Route path = '/sass' exact component ={Excs} />
      </Switch>
    </BrowserRouter>
  )
}
  

export default App;
