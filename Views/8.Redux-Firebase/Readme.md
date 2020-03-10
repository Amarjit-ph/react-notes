Redux - Firebase

* Redux-thunk
### 1. Add thunk Middleware
``` javascript
import { createStore, combineReducers, applyMiddleware } from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
```

### 2. Dispatch using Firebase
``` javascript
import database from '../firebase/firebase';
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData) => {
    return (dispatch) => {
        const {
            description = '',
            amount = 0,
            note = '',
            createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt };
        database.ref('expenses').push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }));

            });
    };
};
```

# 2. Firebase Authentication
``` javascript
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, googleAuthProvider, database as default }
```

## 1. LOGIN :<br>
``` ACTION```
``` javascript
import { firebase, googleAuthProvider } from '../firebase/firebase';
export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};
```
``` LOGIN-PAGE```
``` javascript
//LOGIN PAGE
import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div>
        <button
            onClick={startLogin}>
            Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
```

``INDEX``
``` javascript
import { firebase } from './firebase/firebase';
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('LOGIN ');
    } else {
        console.log("LOG OUT");
    }
});
```

``LOGOUT``
``` javascript
import { startLogout } from '../actions/auth';
export const Header = ({ startLogout }) => (
    <header>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
```

## HISTORY 

```Npm install history --save```
``` javascript
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={LoginPage} exact={true} />
            </Switch>
        </div>
    </Router >
);
```

``INDEX``
``` javascript
import AppRouter,{ history } from './routers/AppRouter';

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById("root"));
        hasRendered = true;
    }
}
```

``FIREBASE``
``` javascript
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('SESSION : LOGIN');
        console.log('USER ID:', user.uid);

        store.dispatch(startSetExpense())
            .then(() => {
                renderApp();
                //ReactDOM.render(jsx, document.getElementById("root"));

                //REDIRECT TO DASHBOARD IF LOGIN
                if (history.location.pathname === '/') {
                    history.push('/dashboard');
                }
            });
    } else {
        console.log('SESSION : LOGOUT');
        renderApp();
        //ReactDOM.render(jsx, document.getElementById("root"));
        history.push('/');
    }
});
```




# 3.Reducer Authentication

AUTHENTICATION REDUCER
``` javascript
//AUTH REDURCER
export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }

}
```

STORE REDUCER
``` javascript 
//STORE REDUCER 
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
```
INDEX
``` javascript 
//INDEX
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('SESSION : LOGIN');
        console.log('USER ID:', user.uid);

        //STORE THE UID IN REDUCER
        store.dispatch(login(user.uid));

        store.dispatch(startSetExpense())
            .then(() => {
                renderApp();
                //ReactDOM.render(jsx, document.getElementById("root"));

                //REDIRECT TO DASHBOARD IF LOGIN
                if (history.location.pathname === '/') {
                    history.push('/dashboard');
                }
            });
    } else {
        console.log('SESSION : LOGOUT');
        store.dispatch(logout());
        renderApp();
        //ReactDOM.render(jsx, document.getElementById("root"));
        history.push('/');
    }
});
```

# 4. PRIVATE ROUTE

ROUTER
``` javascript
//ROUTER
import PrivateRoute from './PrivateRoute';
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path='/' component={LoginPage} exact={true} />
                <PrivateRoute path='/dashboard' component={ExpenseDashboardPage} />
                <PrivateRoute path='/create' component={AddExpensePage} />
                <PrivateRoute path='/edit/:id' component={EditExpensePage} />
                <PrivateRoute path='/help' component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router >
);

export default AppRouter;
```

PRIVATE ROUTE
``` javascript
//PRIVATE ROUTE
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (<Route {...rest} component={(props) => (
    isAuthenticated ? (
        <div>
            <Header />
            <Component {...props} />
        </div>
    )
        :
        (<Redirect to="/" />)
)} />

    );


const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
```