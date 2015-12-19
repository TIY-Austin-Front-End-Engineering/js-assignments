# Build a chat application!

## Description
We've all used chat applications since the early days of ICQ, AOL Instant Messenger, MSN Messenger, but have you actually put your mind around what you would need to do to build a chat application?

Well, now will be your chance to build a chat app, with a user roster and updates to the chat room.

## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand the common HTTP verbs that act upon resources: GET, PUT, POST, DELETE
* Understand what the benefits are of AJAX, when to implement and how to use.

### Performance Objectives

After completing this assignment, you be able to effectively use

* Understand how to grab user data from html form elements.
* Use jQuery $.ajax and/or any of the shorthand methods.
* Understand polling a server.


## Details

### Deliverables

* A repo containing at least:
  * `bower.json`
  * `main.js`
  * `index.html`

### Requirements

* When a user submits a chat message, all users in a room should be able to see said message within 2 seconds.
* Each person is represented as a single user on the page and no one else can chat on their behalf
* Each person visiting the application should be identifiable by a user name or handle.
* You will use `$.ajax()` for all of your HTTP methods `GET, PUT, POST, DELETE`
* A user may only delete their own messages.
* A user cannot edit any chat messages.
* A user should be able to edit their own username or handle.
* The chat messages should have a timestamp and be ordered by time.
* You will have access to a server for your `GET, PUT, POST, DELETE` methods, and this server works as follows:

```js
/collections/<collectionName>     // GET
/collections/<collectionName>     // POST
/collections/<collectionName>/:id // GET
/collections/<collectionName>/:id // PUT
/collections/<collectionName>/:id // DELETE

```

## Explorer Mode

Like described in the requirements section, you will be creating an online chat application that can host multiple users that have unique usernames/handles.  

All users can submit new chat messages which should update the chat area in about 2 seconds.  users cannot edit any chat messages, but should be able to edit their username/handle.  Older chat messages can be deleted, but only by the user that created the message.

## Adventure Mode

Upon completion of Explorer mode, also create mention functionality where you can type `@` and get a list of users in the room and allow you to autocomplete their username with a dropdown list in the chat input section.

This functionality should highlight the chat message for the user of the app that was mentioned, but only for that particular user.

For example, if someone was chatting with me, and went @myName how are you?, I would be the only user of the application that could see the highlighted text "how are you?" while others should just see the text "how are you?".

## Epic Mode

In addition to Explorer and Adventure Mode, create a private messaging feature where you can chat with another user privately.  When someone messages you privately, you'll also see a message count on the user roster of the person messaging you.  When you click said user, it should bring you to a new chat dialog that shows only the private messages between you and the person messaging you privately.

The entire application will also have a new feature where anyone can create a custom room and users can choose which room to chat in based on a room roster.  Each chat room/channel should have their own user roster as well, that also maintains the private messaging feature.

## Additional Resources

* [jQuery $.ajax() API](http://api.jquery.com/category/ajax/)
* [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers.setInterval)

## Instructor Notes

[Tiny Server](https://github.com/masondesu/tiny-server) is used for this assignment as it is an easy way to allow the students to learn AJAX without the complexities of most security scenarios associated with performing CRUD.

[https://github.com/masondesu/tiny-server](https://github.com/masondesu/tiny-server) has a deploy to heroku button, but if you already are hooked into [Heroku](https://heroku.com) and have the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed you can do everything from the command line, as follows:

```bash
# clone the repo
git clone git@github.com:masondesu/tiny-server.git

# cd into folder
cd tiny-server

# add heroku remote and create app
heroku create <app-name>

# add mongolab database - env.MONGOLAB_URI is already set up
heroku addons:create mongolab

# push to heroku remote
git push heroku master
```

*NOTE: You'll need a credit card on file to use the addons, but its free.

[Tiny Server](https://github.com/masondesu/tiny-server) CRUD routes:

```js
http://<app-name>.herokuapp.com/collections/<collectionName>     // GET
http://<app-name>.herokuapp.com/collections/<collectionName>     // POST
http://<app-name>.herokuapp.com/collections/<collectionName>/:id // GET
http://<app-name>.herokuapp.com/collections/<collectionName>/:id // PUT
http://<app-name>.herokuapp.com/collections/<collectionName>/:id // DELETE
```
