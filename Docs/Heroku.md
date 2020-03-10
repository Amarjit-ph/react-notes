## Download Heroku CLI

``Heroku --version`` <br>
``Herkou login``

``Heroku create Name-app`` <br>
* Create a new Application in Heroku
* Add new git remote for deploying to heroku

``Git push heroku master``

ENVIRONMENT VARIABLE CONFIGURATION <br>
``Heroku config`` <br>
``Heroku config:set KEY=value KEY2=value ``<br> 

## Scripts from Heroku
```
Scripts:{
    "start": "node server.js",
    "heroku-prebuild": "yarn upgrade",
    "heroku-postbuild: "react-scripts build
}
```