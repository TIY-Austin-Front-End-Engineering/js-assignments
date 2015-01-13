# etsy-client-vanilla-1

## Description

This assignment serves to reinforce JS syntax, functions, some mathematical operators and sequences, arrays, strings, writing to the DOM, and making AJAX requests.

## Objectives

### Learning Objectives

After completing this assignment, you should:

* Understand general JS syntax
* Grasp why functions are important
* Understand arrays and loops
* Be able to recite the meaning and importance of SOLID principles
* Be able to breakdown a complex seuqence into a series of steps, use jQuery AJAX, handle callbacks and asynchronous code, and write to the DOM with JS and templates


### Performance Objectives

After completing this assignment, you should be able to effectively create a simple website that utilizes HTML, CSS, and JS.

## Details

### Deliverables

* A publicly visible website on `gh-pages`

### Requirements

* No JSHint warnings or errors
* No JS errors in the browser
* All functions and code should work according to the following description.

## Normal Mode

- write an `EtsyClient()` constructor and prototype
- write methods on the prototype to make requests for
    1. all active listings
    2. an individual listing
    3. a user's data
- write methods on the prototype to edit the DOM
    1. draw active listings
    2. draw individual listing and user info
- create three templates:
    - listings.html - should print HTML for a group of listings
    - listing.html - should print HTML for a single listing
    - user.html - should print HTML about a user
- the `EtsyClient()`, should load all the listings and display the listings template
- when a listing is clicked, the page should show that single listing's information AND get the user associated with the listing and show that information with the user template

Some setup code:

```js
function EtsyClient(options) {
    if (!options.api_key) {
        throw new Error("Yo dawg, I heard you like APIs. Y U NO APIKEY!?!?");
    }
    this.etsy_url = "https://openapi.etsy.com/";
    this.version = options.api_version || "v2/";
    this.api_key = options.api_key;
    this.complete_api_url = this.etsy_url + this.version;
}

EtsyClient.prototype.pullAllActiveListings = function() {
    var model = 'listings';
    var filter = 'active';
    return $.getJSON(this.complete_api_url + model + filter + ".js?api_key=" + this.api_key + "&callback=?").then(function(data) {
        console.log(data);
    });
}

EtsyClient.prototype.getListingInfo = function(id) {
    var model = 'listings';
    return $.getJSON(this.complete_api_url + model + '/' + id + ".js?api_key=" + this.api_key + "&callback=?").then(function(data) {
        console.log(data);
    });
}
```

## Notes

Notes go here...

## Additional Resources

* Read []()
