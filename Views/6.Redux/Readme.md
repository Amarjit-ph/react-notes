# Redux

# 1.Redux - State Management 
A predictable state container for JavaScript apps.

## 1.Create Store
``` javascript
import { createStore } from 'redux';
const store = createStore((state = { count: 0 }) => {
    return state;
});

console.log(store.getState());
```

## 2.Change State
``` javascript 
import { createStore } from 'redux';
const store = createStore((state = { count: 0 }, action) => {
    if (action.type === 'INCREMENT') {
        return {
            count: state.count + 10
        };
    } else {
        console.log('RUN');
        return state;
    }
});

console.log(store.getState());
store.dispatch({
    type: 'INCREMENT'
});
console.log(store.getState());
```

## 3.Change State using Action
* Actions - Object that gets sent to the store way Communication with the store
``` javascript
import { createStore } from 'redux';
const store = createStore((state = { count: 0 }, action) => {
    console.log('OOOO');
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
});

console.log(store.getState());

store.dispatch({
    type: 'INCREMENT'
});
store.dispatch({
    type: 'DECREMENT'
});
store.dispatch({
    type: 'RESET'
})

console.log(store.getState());
```
## 4.Subscribing And Dynamic Actions
``` javascript
import { createStore } from 'redux';
const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }

        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log("CHANGE STATE:");
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});
store.dispatch({
    type: 'INCREMENT',
});

store.dispatch({
    type: 'DECREMENT'
});
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 5
});
store.dispatch({
    type: 'RESET'
})
store.dispatch({
    type: 'SET',
    count: 1000
})
unsubscribe();
```
# Example [Files.6]

### DESTRUCTURING
const add = ({ a, b }) => {
    return a + b;
}
console.log(add({ a: 21, b: 31 }));


# 2.Reducers
1. Reducers are pure function
2. Never change state or action

Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.   


## 1. COMBINE REDUCER

``` javascript
import { createStore, combineReducers } from 'redux';

//EXPENSES REDUCER
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
//FILTER REDUCER
const filterReducerDefaultState = {
    text: "",
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

//STORE CREATION COMBINE REDUCER

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

console.log(store.getState());
```

## 2. HIGHER ORDER COMPONENT [HOC]

Higher Order Component (HOC) - A component (HOC) that renders another component

* Reuse code
* Render hijacking
* Prop manipulation
* Abstract state

``` javascript
import React from 'react';
import ReactDOM from 'react-dom';

// SIMPLE COMPONENT [TO BE WRAPPED INSIDE HOC]
const Info = (props) => (
    <div>
        <h1>Information</h1>
        <p>This info is : {props.info} </p>
    </div>
);

// HOC COMPONENT 
const withAdminWarn = (WarppedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <h1>ADMIN PANEL : PRIVATE DATA</h1>}
            <WarppedComponent {...props} />  //PASSING ALL THE PROPS TO CHILD COMPONENT
        </div>
    );
}

// PASSING COMPONENT TO HOC AS PARAMETER
const AdminInfo = withAdminWarn(Info);

ReactDOM.render(<AdminInfo info='795001' isAdmin={false} />, document.getElementById('root'));
```

# 3. React-Redux 

``` javascript
import { Provider } from 'react-redux';
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
```

``` javascript 
import React from 'react';
import { connect } from 'react-redux';

//SIMPLE COMPONENT THAT PASS TO HOC
const ExpenseList = (props) => (
    <div>
        <h1> EXPENSE LIST :</h1>
        <h2> {props.expenses.length}</h2>

    </div>
);

// CALLING HOC FROM REDUX
const ConnectedExpenseList = connect()(ExpenseList); 

// Connecting to Redux Connect to get the connection then sending the component to HOC

const ConnectedExpenseList = connect((state) => {
    return {
        expenses: state.expenses
    };
})(ExpenseList);

export default ConnectedExpenseList;
```

## COMMON CONVENSION :
``` javascript 
const ExpenseList = (props) => (
    <div>
        <h1> EXPENSE LIST :</h1>
        <h2> {props.expenses.length}</h2>

    </div>
);
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
}

export default connect(mapStateToProps)(ExpenseList);
```





