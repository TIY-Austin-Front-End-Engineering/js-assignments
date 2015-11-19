# Build a like button with Angular

## Description
Using an angular controller and directives, build a like button. The button should keep track of how many times it has been clicked and update its count each time it is clicked again.


## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand how angular $scope works within controllers and views.
* Know how to use directives and binding to react to user interactions.


### Performance Objectives

After completing this assignment, you be able to effectively use

* {{ bind }} syntax
* ng-click

## Details

### Deliverables

* A repo containing at least:
  * `index.html`
  * `scripts/controllers.js`
  * `bower.json`

### Requirements

* No JSHint warnings or errors
* The text on the like button should correctly pluralize its self. For example: 0 likes, 1 like, 2 likes ...


## Normal Mode
Replicate the following behavior using angular.
![Example](likes.gif)

## Notes

Hints: Create a $scope.numLikes property and a $scope.addLike function. Use the {{ $scope.numLikes }}  on your button where you would like to number to appear. Use the $scope.addLike function to increment $scope.numLikes each time the button is clicked.

## Additional Resources

* You can use [angular-template](https://github.com/TIY-Austin-Front-End-Engineering/angular-template) to get started.
