# Heroku
1. Download heroku Cli
``Heroku --version`` <br>

2. Login heroku <br>
``Herkou login``<br>
3. Create Application<br>
``Heroku create Name-app`` <br>
* Create a new Application in Heroku
* Add new git remote for deploying to heroku
4. Push to heroku<br>
``Git push heroku master``<br>
5. Setup Environment Varaibles
## ENVIRONMENT VARIABLE CONFIGURATION
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