
# 1. Life Cycle Method 

### LIFE CYCLE METHODS:

* Fire at Start
``` javascript
  componentDidMount() {
    console.log('MOUNTED');
  }
```

* Fire when something change
``` javascript
componentDidUpdate() {
    console.log('UPDATED');
  }
```
* Fire when Component is Close
``` javascript 
componentWillUnmount() {
    console.log('UNMOUNTED');
  }
```

# 2. Saving and Loading Data
### Using localStorage [Files.5]

# 3. Passing Children to Component

1. Passing Template component as Childern to layout component 
``` javascript 
const Layout = (props) => {
    return (
        <div>
            <h1>1</h1>
            {props.content}
            <h1>3</h1>
        </div>
    )
}
```
``` javascript
const template = (
    <div>
        <h1>2</h1>
    </div>
);

ReactDOM.render(<Layout content={template} />, document.getElementById('root'));
```
2. Another method of passing

``` javascript
const Layout = (props) => {
    return (
        <div>  
            <h1>1</h1>
            {props.children}
            <h1>3</h1>
        </div>
    )
}
ReactDOM.render(<Layout>
    <div>
        <h1>2</h1>
    </div>
</Layout>, document.getElementById('root'));
```
