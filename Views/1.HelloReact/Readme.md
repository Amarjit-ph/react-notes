# HELLO REACT

React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.

# 1.Exploring JSX
``` javascript
var template = (
    <div>
    <h1> NAME : AMARJIT PHEIROIJAM</h1>
    <h1> AGE :23 </h1>
    <h1> LOCATION : CHANDIGARH, INDIA </h1>
    </div>
)
```
This funny tag syntax is neither a string nor HTML.

It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

JSX produces React “elements”. We will explore rendering them to the DOM in the next section. Below, you can find the basics of JSX necessary to get you started.

# 2.JSX Expressions

After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.
This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:

{ } - Use Bracket to write Javascript to render template
()  - JSX should be inside a bracket
``` javascript
var user = {
    name:"Amarjit Pheiroijam",
    age:23,
    Address:'Chandigarh'
}

var template2 = (
    <div>
    <h1> NAME : {user.name} </h1>
    <h1> AGE : {user.age} </h1>
    <h1> LOCATION : {user.Address} </h1>
    </div>
)
```

# 3.Conditional Rendering in JSX

``` javascript
var user = {
    name:"Amarjit Pheiroijam",
    age:29,
    Address:'Chandigarh'
}

// true ? "PASS" : "FAIL"       [  PASS ]
// false ? "PASS" : "FAIL"      [ FAIL   ]

function getLoc(location){
    if(location){
        return <h1>LOCATION : {location}</h1>
    }else{
         return undefined;
        }
}

var template3 = (
    <div>
    <h1> NAME : {user.name ? user.name : 'Anonymous'} </h1>
    <h1> AGE: {user.age && user.age >= 18 && user.age }</h1>
    {getLoc(user.Address)}
    </div>
);
```
# 4. Event And Attributes

READ CHECK FOR SUPPORTED EVENTS AND ATTRIBUTES
https://reactjs.org/docs/events.html

React Docs Events <br>
### EXAMPLE :
``` javascript
<button onclick="activateLasers()">
  Activate Lasers
</button>
```
It is slightly different in React:

``` javascrit
<button onClick={activateLasers}>
  Activate Lasers
</button>
```


# 5. Manual Data Binding [ Event Handling]
### EXAMPLE :
``` javascript
let count = 0;
let addone = () => {
    count++;
    renderCount();
}

let minone = () => {
    count--;
    renderCount();
}

let reset = () => {
    count = 0;
    renderCount();
}

let renderCount = () =>{
const template = (
    <div>
    <h1> COUNT : {count} </h1>
    <button onClick={addone}>+1</button>
    <button onClick={minone}>-1</button>
    <button onClick={reset}>Reset</button>
    </div>
);
ReactDOM.render(template,document.getElementById('root'));
}
renderCount();
```

# 6. Forms And Input
``` javascript 
<form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
```
* Prevent default to submit to full page refresh 
``` javascript
const onFormSubmit = e => {
  e.preventDefault(); //Stop refresh

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderApp(); //RE-RENDER
  }
};
```

# 7. Arrays in JSX

```javascript
Const = [10,20,30,40,50];
{	
	num.map(numbers => {
        return <p>NO:{numbers * 2}</p>;
      	})
}
```

# EXAMPLE [FILE.1]