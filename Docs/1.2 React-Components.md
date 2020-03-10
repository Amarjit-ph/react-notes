# 1. React Components

React Components:
* Reusable 
* Individual piece of User Interface
* Custom Html Element [React Component]

Example :  ``<Header />``

* Uppercase First Letter is Important is React Components
* Differentiate Between Html and Components
* Must define Render function 

### COMPONENT EXAMPLE :
``` javascript
import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
  render() {
    return <p> This is from Header</p>;
  }
}
const jsx = (
  <div>
    <h1>TITLE</h1>
    <Header />
  </div>
);

ReactDOM.render(jsx, document.getElementById("root"));
```

### CREATING COMPONENTS :

``` javascript 
import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}
class Action extends React.Component {
  render() {
    return (
      <div>
        <button> What should i Do? </button>
      </div>
    );
  }
}
const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
  </div>
);

ReactDOM.render(jsx, document.getElementById("root"));
```

# 2.Nesting Components
# Nesting Example : [Files.2]
``` javascript 
class Options extends React.Component {
  render() {
    return (
      <div>
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>OPTION</div>;
  }
}
```

# 3. Components Props

React Props are like function arguments in JavaScript and attributes in HTML.

To send props into a component, use the same syntax as HTML attributes:

* Props are arguments passed into React components.

* Props are passed to components via HTML attributes.

### Example: 
Add a "brand" attribute to the Car element:<br>
``const myelement = <Car brand="Ford" />;``

The component receives the argument as a props object:

Use the brand attribute in the component:
``` javascript
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h1>;
  }
}
```
# PROPS EXAMPLE[Files.3]


# 4. Event Methods
# Event Methods Example : [Files.4]

# 5. Stateless functional components
Function Which cannot Use the React State but still a react Components
Props are accessible when props are pass as parameter to the function


EXAMPLE:
``` javascript
const User = (props) => {
  return (
    <div>
      <h1>STATELESS FUNCTIONAL COMPONENTS </h1>
      <h2>Function Which cannot User the React State but still a react Components</h2>
      { props.name }
    </div>
  )
}
```

# 6. Default Props Values

Allow to past data through props and create default Props
``` javascript 
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
}
```
