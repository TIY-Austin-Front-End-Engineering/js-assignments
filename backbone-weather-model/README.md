# backbone-weather-model

## Description

Create an app with Backbone that has three Views that "talk" to each other.

## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand the difference between creating your own Backbone constructors and Backbone instances
* Understand and be comfortable using:
    - `Backbone.*.extend(...)`
    - The `Backbone.Events` mixin/prototype
    - `Backbone.View`, `Backbone.Model`, `Backbone.Router`
* Understand what `this` refers to inside of the methods you extend into Backbone.View

### Performance Objectives

After completing this assignment, you be able to effectively use

* Use Backbone.View's `events`,`tagName`,`className`,`initalize`,`render` properties.
* Attach a Backbone.View's `el` to the DOM
* Create any object with `_.extend({}, Backbone.Events)` and hook it up to a Backbone application/View/etc through the use of the `Events` methods.
* `navigator.geolocation.getCurrentPosition()`
* Backbone.Model's
    - getters/setters
    - validation
    - built-in events
* Forecast.io API
* Backbone.Router

## Details

### Deliverables

* A publicly visible website (gh-pages, divshot, or heroku)

### Requirements

* No JSHint warnings or errors
* All specifications met below

## Normal Mode

Create an app that uses your device/computer's geolocation, and makes a request to Foursquare with that (lat,lng) and any search parameters.

- You should wireframe and design a basic layout before starting this app.
- Your app should use HTML/SCSS extensively for styling.
- You should use a Backbone.Router to handle routes for a home screen.
- You should have one Backbone.View sub-classes: a HomeView constructor.
- You should have a single Model that pulls data from Forecast.io for your location, and displays it on-screen.

> Check your notes and examples for pointers.

## Nightmare Mode

In addition to Normal Mode, give your app an extra search bar that allows you to search for weather in other cities around the world.

Add the ability to show multiple HomeViews and be able to swipe between them.

<!-- 

## Notes

Notes go here...

## Additional Resources

* Read []()
 -->