# Build a tabbed interface with Angular

## Description
Using an angular controller and directives, build a tabbed interface. Clicking on a new tab should change the contents in the viewable area.


## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand how show and hide content.
* Know how to put basic angular expressions within directives.


### Performance Objectives

After completing this assignment, you be able to effectively use

* ng-show
* ng-click

## Details

### Deliverables

* A repo containing at least:
  * `index.html`
  * `scripts/controllers.js`
  * `bower.json`

### Requirements

* No JSHint warnings or errors


## Normal Mode
Replicate the following behavior using angular.
![Example](/tabs.gif)

## Hard Mode
Modify your code so that the currently selected tab is highlighted - denoting which piece of content you are viewing.


## Notes

Hints: Use ng-hide or ng-show to to hide and show your content elements based on whether or not a scope property is equal to the appropriate page. For example: `ng-show="currentTab === 'red'"`, `ng-show="currentTab === 'green'"`, etc.

## Additional Resources

* You can use [angular-template](https://github.com/TIY-Austin-Front-End-Engineering/angular-template) to get started.
