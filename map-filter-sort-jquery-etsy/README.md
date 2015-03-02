# map-filter-sort-jquery-etsy

## Description

You're going to create an application that:

- has two screens (will be drawn out on the whiteboard)
- will use Backbone.Router (for navigation)
- has two screens:
    - screen 1 (the "home" screen) will display a list of products from Etsy (using the API for the data, and your own templates for the presentation)
    - screen 2 (the "details" screen) will display details of a product from Etsy in greater detail

## Objectives

### Learning Objectives

You should have a grasp of:

- constructor functions and prototype methods
- jQuery (AJAX and `$.on()`)
- templating with lodash (`_.template`)
- external template files
- routing with `Backbone.Router`
- map/reduce/filter/etc methods on `Array.prototype`

### Performance Objectives

After completing this assignment, you should be able to effectively create a simple SPA site by combining some techniques shown in class.

## Details

### Deliverables

* A publicly visible website on `gh-pages`

### Requirements

* No JSHint warnings or errors
* No JS errors in the browser
* All functions and code should work according to the following description.

## Easy Mode

Build an app that searches a list of products from Etsy, that has all the features/details as listed above. An addition to that, allow the user to enter keywords into a search bar. Your app should use these keywords when searching for products on Etsy and display relevant results.

Make sure to use:

- a templating function (like `_.template()`)
- external template files
- jQuery AJAX methods
- constructor functions and prototypes
- a routing library (like `Backbone.Router`)

## Hard Mode

An addition to Easy Mode, display left/right arrows on the details screen (like one would a photo gallery):

    - if the user taps the left/right arrow, animate the previous item in the list onto the screen
    - if the user hits the left or right arrow on the keyboard, do the same

Also, the details screen should list other products made by the same Etsy artist.

## Nightmare Mode

An addition to Easy and Hard Modes, provide a list of checkboxes on the home screen:

- posted in the last week
- on sale
- has 3 pictures

When these checkboxes are selected, the home screen should filter the results from Etsy, showing only those that match the options selected.

<!-- ## Notes -->

<!-- Notes go here... -->

<!-- ## Additional Resources -->

<!-- * Read []() -->
