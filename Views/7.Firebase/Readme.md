# FIREBASE

## 1.CONFIGURE FIREBASE
``` javascript
import * as firebase from 'firebase';

const firebaseConfig = {
  /*
    COPY ALL THE CREDENTIALS 
    FROM CONSOLE
  */
};
```
``` javascript
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
```

# 2.ACTION ON DATA 
## 1.Create Data
``` javascript
database.ref().set({
    name: 'Amarjit Pheiroijam',
    age: 26,
    isSingle: true,
    location: {
        city: "Chandigarh",
        country: 'India'
    },
    attributes: {
        hight: 5.9,
        weight: 80
    }
});
```
## 2.REPLACE ALL DATA
``` javascript
//REPLACE ALL DATA
database.ref().set("this is my data");
```
``` javascript
//REPLACE ALL DATA
database.ref().set({
     age: 100
});
```
## 3.REPLACE SPECIFIC DATA
``` javascript
//REPLACE SPECIFIC DATA
database.ref('age').set(100);
```

## 4. UPDATE DATA
``` javascript
//UPDATE SPECIFIC DATA
database.ref('name').set('Pheiroijam Amarjit');
```
``` javascript
//UPDATE DATA TO SPECIFIC PART
database.ref('location/city').set('New York');
```
* UPDATE WITH PROMISE
``` javascript
//UPDATE WITH PROMISE
database.ref('location/city').set('Imphal')
    .then(() => {
        console.log('DATA: SAVED');
    })
    .catch((e) => {
        console.log("DATABSE ERROR : EXPENSIFY \n\n", e);
    });
```
``` javascript
//UPDATE MULTI WITH SPECIFIC PART
database.ref().update({
    job: 'Manager',
    'location/city': 'Boston'
});
```


## 5. REMOVE DATA
``` javascript
//REMOVE ALL DATA
database.ref().remove()
    .then(() => {
        console.log(' DATA : WIPED COMPLETED');
    });
```
``` javascript 
//REMOVE SPECIFIC DATA
database.ref('isSingle').set(null)
    .then(() => {
        console.log(' DATA : REMOVE COMPLETED');
    });
```
``` javascript
//REMOVE SPECIFIC DATA PART
database.ref('location/city').set(null)
```

## 6. FETCH DATA
``` javascript
//FETCH ALL DATA
database.ref()
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((e) => {
        console.log("Error :", e);
    });
```
``` javascript 
//FETCH SPECFIC DATA
database.ref(location/city)
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((e) => {
        console.log("Error :", e);
    });
```


## 7. SUBSCRIPTION

``` javacript
//SUBSCRIBE
database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
});
```
``` javascript
//UNSUBSCRIBE
database.ref().off()
```
```javascript 
//UNSUBSCRIBE
const onValueChange = (snapshot) => {
    console.log(snapshot.val());
}
database.ref().on('value', onValueChange);

setTimeout(() => {
    database.ref('age').set(20)
}, 3000);
setTimeout(() => {
    database.ref('age').set(30)
}, 5000);

setTimeout(() => {
    database.ref().off(onValueChange)
}, 6000);

setTimeout(() => {
    database.ref('age').set(50)
}, 7000);
```

### EXAMPLE :
``` javascript
//SUBSCRIBE EXAMPLE
database.ref().on('value', (snapshot) => {
    console.log(`${snapshot.val().name} is a ${snapshot.val().job}`)
});
```

# 3. ARRAY IN FIREBASE

* ADD TO ARRAY TYPE USING PUSH
* UNIQUE ID S CREATED AS INDEX

``` javascript
var note = {
    description: "",
    note: "",
    amount: '1500',
    createdAt: '97533555'
}

OR

Database.ref().push({
    description: "",
    note: "",
    amount: '1500',
    createdAt: '97533555'
});

Database.ref().push(note);
```
``` javascript
//UPDATE ARRAY
database.ref('Notes/-LyyvvbgL0Zl_8QvgnpM').update({
    amount:9999
});
```

``` javascript
//FIREBASE TO JS ARRAY
database.ref('expense').once('value')
    .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log('\n\n\n\n', expenses);
    });
```
# 4. SUBSCRIPTION FUNCTIONS

### 1.CHILD REMOVE
```
database.ref('expense').on('child_removed', (snapshot) => {
    console.log('REMOVED :', snapshot.val());
});
```
### 2.CHILD CHANGED
```
database.ref('expense').on('child_changed', (snapshot) => {
    console.log('CHANGED :', snapshot.val());
});
```

### 3.CHILD ADDED
```
database.ref('expense').on('child_added', (snapshot) => {
    console.log('CHANGED :', snapshot.val());
});
```

