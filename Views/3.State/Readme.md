# COMPONENT STATE

# 1. STATE
STATE RE-RENDER UI WHEN DATA IS CHANGE
* This.setState
* This.state = { Count: 0 }

``` javascript 
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.resetAll = this.resetAll.bind(this);
        this.state = {
            count: 0
        };
    }

    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    minusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }
    resetAll() {
        this.setState((prevState) => {
            return {
                count: 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>COUNT :{this.state.count} </h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.resetAll}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
```



# 2. Method Binding
### 1. WORKING BINDING
``` javascript
// WORKING THIS BINDING
const obj = {
  name: "AMARJIT",
  getName() {
    return this.name;
  }
};
console.log(obj.getName());
//OUTPUT : AMARJIT 
```
### 2. BROKEN BINDING
```javascript
//BROKEN THIS BINDING
const obj = {
  name: "AMARJIT",
  getName() {
    return this.name;
  }
};
const getName = obj.getName;
console.log(getName()); //BROKEN THIS BINDING
```
### 3. SOLVE BINDING
``` javascript
//SOLVE WITH BIND
const getName = obj.getName.bind(obj); //BIND FORM OBJECT [obj]^
console.log(getName());

//BIND FORM PARAMETER
const getName = obj.getName.bind({ name: "Andrew" });
console.log(getName());
```

## REACT EXAMPLE :
``` javascript 
class Options extends React.Component {
  removeAll() {
    alert(this.props.options); // BROKEN THIS BIND
  }
  render() {
    return (
      <div>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
        <button onClick={this.removeAll.bind}>RESET</button>
      </div>
    );
  }
}
```

### FIXED THIS BIND:
``<button onClick={this.removeAll.bind(this)}>RESET</button>``

### FINAL FIX FOR THIS BINDING :
CALL CONSTRUCTOR SUPER PROPS THEN BIND IN THE FUNCTION
``` javascript
class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    alert(this.props.options);
  }
  render() {
    return (
      <div>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
        <button onClick={this.handleRemoveAll}>RESET</button>
      </div>
    );
  }
}
```

## PROPS - TOP DOWN DATA STREAM 
Which passes form parent class to the child component class 
Through props

## FUNCTION PROPS - BOTTON UP STREAM
Method call from child via props communicate with parents
