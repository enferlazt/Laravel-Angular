# Description

It's demonstration project build on Angular7 and Laravel

This web app use [Material Design](https://material.angular.io/)

The app has cars thematic for ease perception

### Facilities

The project has next facilites:
* Show list of card
* Create new card
* Edit one of list card
* Remove card
* Search by card features

### Components

Based on 5 components:
* Car add new
* Car edit
* Car search
* Car show all
* Car single

This components related each other: *Car add new*, *Car edit*, *Car show all*, *Car single* are interchangeable, when *Car search* uses with all components

### Pages

Started page is a list of cards(cars).

![Started Page](https://i.ibb.co/258tKHz/Screenshot-1.png)

On this page you can see search filter on left sidebar. Also you can click on card to open it or remove this card from database should to click on cross char on top right.

The search form works with any filled fields and can combine them.

![Search form result with fill in fields](https://i.ibb.co/8n3hPWW/Screenshot-2.png)

Next page is single page of car.

![Single page of car](https://i.ibb.co/98RvzcT/Screenshot-3.png)

On this page you can see bigger image, read full description, when the car was added and when edited. Also here you can go  back to list for this click on the button on bottom left. On top right you can see edit button.

Edit/Create pages look very similar, therefore analyzing only one.

![Create new car page](https://i.ibb.co/Fsr4Z4R/Screenshot-4.png)

This form has required fields which need to fill. If required fields not filled and you push add button you gift a notification with problem. The app has many notification in work process: notification about successful remove or edit card.

Field brand in search form, edit and create pages is unique. It contains sorted cars brands by alphabet.

![Brand Field](https://i.ibb.co/C99bjv9/Screenshot-5.png)

### Responsive Design

This app supports responsive design for phone and tablet. Min works width is 320 pixels

![App on phone width](https://i.ibb.co/nMHbKgV/Screenshot-6.png)