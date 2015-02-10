# backbone-events-views-1

## Description

Create an app with Backbone that has two Views that "talk" to each other.

## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand the difference between creating your own Backbone constructors and Backbone instances
* Understand and be comfortable using:
    - `Backbone.X.extend`
    - `Bacbone.Events`
* Understand what `this` refers to inside of the methods you extend into Backbone.View

### Performance Objectives

After completing this assignment, you be able to effectively use

* Use Backbone.View's `events`,`tagName`,`className`,`initalize`,`render` properties.
* Attach a Backbone.View's `el` to the DOM
* Create any object with `_.extend({}, Backbone.Events)` and hook it up to a Backbone application/View/etc through the use of the `Events` methods.

## Details

### Deliverables

* A publicly visible website (gh-pages, divshot, or heroku)

### Requirements

* No JSHint warnings or errors
* All requirements met to specification

## Normal Mode

Create three views: `BodyView`, `SidebarView`, and `MainView` constructors that extend from `Backbone.View`.

`SidebarView` and `MainView` should play "Marco Polo":

- when clicking on a `SidebarView`, it should trigger a "marco" event.
- the `BodyView` should listen for the "marco" event from the `SidebarView`, and trigger its own "marco" event when `SidebarView` triggers that event.
- The `MainView` should listen for the "marco" event on the `BodyView`, and when that event is triggered by the `BodyView`, should `render()` the words "POLO"

> Check your notes and today's examples for pointers.
            
## Hard Mode

In addition to Normal Mode, build out a nice User Interface with HTML/CSS that has a beach or pool style/theme. Get creative and have some fun with it.

<!-- 
            
## Nightmare Mode
Nightmare Mode description
            


## Notes

Notes go here...

## Additional Resources

* Read []()
 -->