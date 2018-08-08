# Project Notes
---

Zach Nusbaum

## Comments about angular:

* All of the code that I wrote lives in the ```./src/app``` directory.

* ```./src/*.service.rs``` files define the methods used to access the different API endpoints.

* Global CSS styles are in ```./src/styles.css```

* Each sub-directory of ```./src/app``` is a component. Inside of each component folder is a typescript file, and html file, and a css file.

* To run/compile the project, make sure you have NPM and Angular CLI (v6) installed.

* Run the project locally by opening the folder with the command line and typing: ```ng serve --open```

* Compile the project by running ```ng build --prod```. The compiled project will be found inside of the ```./dist``` directory.

## What I would have done differently

* I would have organized the components for ride share comparison feature into their own module (like i did with the places feature).
E.g. i would have placed ```app/lyft-prices```, ```app/price-lists```, ```app/uber-prices```, ```app/lyft-prices```, and ```app/ride-share-form``` into ```app/ride-share/...```

## Things to still do:

* Cache API responses

![Ride Share Component Diagram](/ride-share-diagram.png)