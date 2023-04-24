<br/>
<p align="center">
 

  <h3 align="center">CampFinder</h3>

<p align="center">
    CampFinder is a full-stack web application where users can create a campground listing and review a campgrounds. In order to review or create a campground listing, users must have an account.

    This project was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication.
    <br/>
    <br/>
    <a href="https://github.com/ezmoneysniperx/campfinder/issues">Report Bug</a>
    .
    <a href="https://github.com/ezmoneysniperx/campfinder/issues">Request Feature</a>
  </p>
</p>


## Project Preview

![PREVIEW APP](https://raw.githubusercontent.com/ezmoneysniperx/campfinder/main/campfinder.gif)

## Built With

* Node.js
* Express
* MongoDB 
* Mongoose
* Bootstrap

## Features

* Users can create, edit, and remove campgrounds
* Users can review campgrounds once, and edit or remove their review
* Search campground by name or location

## Run it locally
1. Install [mongodb](https://www.mongodb.com/)
2. Create a cloudinary account to get an API key and secret code

Create a .env file in the root of the project and add the following:  

```
DATABASEURL='<url>'
API_KEY='<cloudinary api key>'
API_SECRET='<cloudinary secret key>'
```

Run ```mongod``` in another terminal and ```node app.js``` in the terminal with the project.  

Then go to [localhost:3000](http://localhost:3000/).





