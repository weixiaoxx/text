import React from 'react';
import Herder from './header';
import Footer from './footer';
import Content from './content';
import Type from './type';
import Country from './country';
import { BrowserRouter as Router,Link,Route,Switch } from "react-router-dom";

class App extends React.Component {
    constructor() {
        super();
    }
    
    
    render() {
        return <div>
        	<Herder></Herder>
        		<Link to="/">index</Link>
        		<Link to="/type">  Type</Link>
        		<Link to="/Country">  Country</Link>
        		<Switch>
				  <Route path="/type" component={Type} />
				  <Route path="/Country" component={Country} />
				  <Route component={Content} />
				</Switch>
        	<Footer></Footer>
        </div>;
    }
}
export default App;