# 1.LET AND CONSTANT
``` javascript 
// Using let
let nameVar = 'Andrew';
let nameVar = 'Mike';  //Overwrite with new name

console.log('nameVar', nameVar);

// Using const
const nameConst = 'Frank';
nameConst ='Julie';  //Cannot Assign new name
console.log('nameConst', nameConst);
```

## Block Level scoping
``` javascript 
const fullName = 'Jen Mead';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
```
### Function Scoping - Can use only inside function 

# 2.ARROW FUNCTION
1. NORMAL FUNCTION
``` javascript 
function square(x) {
   return x * x;
};
console.log(square(3));
```
2. ARROW FUNCTION
``` javascript
const squareArrow = (x) => {
return x * x;
};
```
3. ARROW FUNCTION DYNAMIC RETURN
``` javascript 
const squareArrow = (x) => x * x;
console.log(squareArrow(4));

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Andrew Mead'));
```

4. ARROW FUNCTION ARGRUMENTS
``` javascript
const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));
```
* THIS Keyword - No longer bound <br>
This keyword can go only one function deep
But nested function are not not accessible to this parent
Using arrow function we can use parent this value to deeper nesting.
``` javascript 
const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};
console.log(user.printPlacesLived());
```

# 3.ES6 Classes

UpperCase First letter for class

Using this syntax to access javascript inside template string
Inject inside String

return ``` `My name is ${this.name}.`; ```

``` javascript
class Person{
  constructor(name){
	this.name = name;
	}
}
const me = new Person('Andrew'); // Person {name:Andrew'}
console.log(me);

const other = new Person('Meath'); // Person {name:Meath'}
console.log(other);
```
``` javascript
class Person {
  constructor(name = 'Anonymous', age = 0) { 	//Default Name
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

const me = new Person('Andrew Mead', 26);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());
```

# 4.Class SubClass

Extends the Parents class
Overide Constructer

``` javascript 
class Person {
  constructor(name = "Anonymous", age = 0) {
    //Default Name
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); 		//Calling the parent constructor values
    this.major = major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.major) {
      description += "\nMajor is " + this.major;  // Using Inherited Property from Person
    }
    return description;
  }
}

const me = new Student("Andrew Mead", 26, "Computer Science");
console.log(me.getDescription());
```

# 5. Broken This Binding

``` javascript
const obj = {
  name: "AMARJIT",
  getName() {
    return this.name;
  }
};

//console.log(obj.getName());  // WORKING

const getName = obj.getName;
console.log(getName()); //BROKEN THIS BINDING

//SOLVE WITH BIND
const getName = obj.getName.bind(obj); //BIND FORM OBJ
console.log(getName());

//BIND FORM PARAMETER

const getName = obj.getName.bind({ name: "Andrew" });
console.log(getName());
```

# 6. ES6 Exports and imports

1. Default Export
2. Named Exports

``` javascript 
NAMED EXPORTS
[FILE 1] EXPORT FILE

Const square = (x) => x*x;
export  = { square };
or
export Const square = (x) => x*x;


[FILE 2] IMPORT FILE
Import { square } from ./File1.js
square(20);
```


DEFAULT EXPORTS
``` javascript 
[FILE 1]
Const add = (a,b) => a+b;
Const square = (x) => x*x;
export default add; 

[FILE 2]
Import add from ./File1.js
square(20);
```
# 7. ES6 Class properties

Allow bind easily
``` javascript 
class OldSyntax {
    constructor() {
        this.name = 'mike';
    }
}
const OldSyntaxs = new OldSyntax();
console.log(OldSyntaxs);

class NewSyntax {
    name = 'mike'
}
console.log(new NewSyntax());
```


FAIL BINDING
``` javascript 
class OldSyntax {
    constructor() {
        this.name = 'mike';
    }
    getGreeting(){
        return `hi Iam ${this.name}`;
    }
}
const OldSyntaxs = new OldSyntax();
const getGreeting = OldSyntaxs.getGreeting();
console.log(getGreeting());
```

SOLUTION 1 [ NOT EFFICIENT ]
``` javascript 
class OldSyntax {
    constructor() {
        this.name = 'mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting(){
        return `hi Iam ${this.name}`;
    }
}
```
## BEST OPTION ES6 ARROW FUNCTION
``` javascript 
const OldSyntaxs = new OldSyntax();
const getGreeting = OldSyntaxs.getGreeting();
console.log(getGreeting());

class NewSyntax {
    name = 'Jen'
    getGreeting = () => `HI Im ${this.name}`;
}
const o = new NewSyntax();
const oo = o.getGreeting;
console.log(oo());
```


# 8. DESTRUCTURING
## 1. OBJECT DESTRUCTURING
``` javascript 
const person = {
	name:'Andrew',
	age:27,
	location:{
		city:'imphal',
		temp:20
	}
}; 
// const name = person.name;
// const age = person.age;
```
``` javascript 
SAME AS PERVIOUS 
const { name, age } = person;  //USING LOCAL NAME
const { name: firstname, age } = person; //USING CUSTOM NAME
const { name = 'Default Name',age } = person; // DEFAULT NAME


console.log(`${firstname} is ${age}`);
const { city, temp: temperature } = person.location;
console.log(`It is ${temperature} in ${city}`);
```


## 2. ARRAY DESCTRUCTURING
``` javascript 
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'Default State'] = address;
console.log(`You are in ${state} , ${city}`);


//DESCTRUCTURING PARAMETER OBJECT
const add = ({ a, b }) => {
    return a + b;
}
console.log(add({ a: 21, b: 31 }));
```

# 9. SPREAD OPERATOR
## 1.ARRAY
``` javascript
Arr = ["Amarjit"]
['Andrew',...Arr] => ['Andrew,"Amarjit']
```
[ ...ArrNAme ] Represent the previous Array with all the values


## 2.OBJECT
``` javascript
const arr = { name: "AMARJIT", age: 20 }
console.log({ sex: 'MALE', ...arr });
```



# 10. JAVSCRIPT PROMISE

``` javascript 
// SINGLE CALL RESOLVE AND REJECT
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('DATA : RESOLVE');
        reject('DATA : REJECTED');
    }, 500);
});

console.log('BEFORE ');

// PROMISE HANDLER
promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

console.log('AFTER ');


//CAN REJECT CATCH CAN ALSO BE PASS AS SECOND ARGRUMENT
promise.then((data) => {
    console.log(data);
}, (error) => {
    console.log(error);
});

```