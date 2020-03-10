
# 1. React Router

``` javascript
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';

import 'normalize.css';
import './Styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is my ExpenseDashboardPage
    </div>
);
const AddExpensePage = () => (
    <div>
        This is create Expense Page
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path='/' component={ExpenseDashboardPage} exact={true} />
            <Route path='/create' component={AddExpensePage} />
        </div>
    </BrowserRouter>

);

//COMPONENTS
ReactDOM.render(routes, document.getElementById("root"));
```

# 2. Setting 404 with Switch 
Switch is Used to render only the match route

``` javascript
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'normalize.css';
import './Styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is my ExpenseDashboardPage
    </div>
);
const AddExpensePage = () => (
    <div>
        This is create Expense Page
    </div>
);

const EditExpensePage = () => (
    <div>
        This is Edit Expense Page
    </div>
);
const HelpPage = () => (
    <div>
        This is Help Page
    </div>
);

const NotFoundPage = () => (
    <div>
        404
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={ExpenseDashboardPage} exact={true} />
            <Route path='/create' component={AddExpensePage} />
            <Route path='/edit' component={EditExpensePage} />
            <Route path='/help' component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>

);

//COMPONENTS
ReactDOM.render(routes, document.getElementById("root"));
```

# 3. LINKING BETWEEN ROUTES

``` javascript
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import 'normalize.css';
import './Styles/styles.scss';


const ExpenseDashboardPage = () => (
    <div>
        This is my ExpenseDashboardPage
    </div>
);
const AddExpensePage = () => (
    <div>
        This is create Expense Page
    </div>
);

const EditExpensePage = () => (
    <div>
        This is Edit Expense Page
    </div>
);
const HelpPage = () => (
    <div>
        This is Help Page
    </div>
);

const NotFoundPage = () => (
    <div>
        404 - <Link to='/'>GO HOME</Link>
    </div>
);
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' exact={true} activeClassName='is-active'>Dashboard</NavLink>
        <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink>
        <NavLink to='/edit' activeClassName='is-active'>Edit Expense</NavLink>
        <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={ExpenseDashboardPage} exact={true} />
                <Route path='/create' component={AddExpensePage} />
                <Route path='/edit' component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter >

);
//COMPONENTS
ReactDOM.render(routes, document.getElementById("root"));
```
