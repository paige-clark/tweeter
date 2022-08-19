# Tweeter Project

Tweeter is a simple, single-page Twitter clone. This project was made to practice my HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.

The website can take in a user input in a text field, add it to a back-end database, and use AJAX to present the tweet in the collection of tweets on screen.

The top right element can be clicked to focus the textbox and error messages are displayed on screen when the user either doesn't enter a message or the message entered is too long. There's a counter on screen that reflects the length of the message.

There are two views implemented: mobile and standard desktop/tablet.

Hope you have fun on tweeter!

## Final Product

!["desktop layout"](https://github.com/paige-clark/tweeter/blob/master/docs/localhost_8080_(iPad%20Air).png)
<img src="https://github.com/paige-clark/tweeter/blob/master/docs/localhost_8080_(iPhone%20XR).png" width="300">

## Dependencies

- Express
- Node 5.10.x or above
- Body Parser
- Chance
- mD5

## Getting Started

1. Install dependencies using the `npm install` command
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>
3. Go to <http://localhost:8080/> in your browser to view the website