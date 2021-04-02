import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.js';
import Points from './Points.js';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Wrapper/Store.js';

//The navigation for this simple single-page application is accomplished:
//by: <<BrowserRouter>>, <<Switch>> and <<Route>> imported in line 3.
//The provider component, makes the global component created in Store.js file
//reachable by all the applications inculded
//it takes one argument which is the store component created in Store.js file

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/points" component={Points} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
