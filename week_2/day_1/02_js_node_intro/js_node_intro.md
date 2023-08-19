# Intro to JavaScript and Node.js

**Lesson duration: 30 minutes**

### Learning Objectives

- Understand what JavaScript is and where it came from
- Know what a JavaScript runtime is
- Understand why Node is useful

## Intro

In this module we will learn JavaScript as a programming language. JavaScript was originally designed as a front-end tool to make web pages more interesting, but that isn't all that it can do. JavaScript can be used to build entire web apps, native apps, mobile apps, games as well as a plethora of other things. Almost anything that can be done using other programming languages can be done using JavaScript.


## Node.js

As we discussed earlier, JavaScript was originally designed to run client-side, in the browser, to make web pages more dynamic and interactive. The back-end was typically written in another language, like Java, and JavaScript was sent to the client with the HTML.

All major internet browsers have a JavaScript runtime, an environment in which they can execute JavaScript code. Google Chrome has its V8 engine and Safari has WebKit, for example.

Node.js is a JavaScript runtime which was built on Chrome's V8 JavaScript engine. Node provides a JavaScript environment outside of the browser, where we can run server-side code. With the help of Node, JavaScript has gained traction as a full-stack programming language. This means that we can write entire applications using only JavaScript, HTML and CSS.

## Writing Our First JS App

We're going to create our first JavaScript app and run it in the command-line using Node.

Before we get started we'll have to check that we have Node installed on our machines. Typing `node -v` into the command-line should yield a version number, not a 'command not found' error.

```sh
node -v

# -> vx.x.x
```

The first thing that we'll have to do is create a file to work in. We're going to write a simple 'hello world' program, so we'll name our file hello_world.js.

```sh
touch hello_world.js
```

> .js is the file extension used for JavaScript files.

There is no hard and fast rule when it comes to naming JS files. The most common naming conventions are snake_case, kebab-case or camelCase. None of these are considered to be better practice than the others, but it is bad practice to mix and match. Pick the one that you like best and be consistant throughout your project.

```js
// hello_world.js

console.log('Hello, World!');
```

> The correct naming convention for variables and functions in JavaScript is camelCase.

Now that we've written some JS, we can use Node to run it.

```sh
node hello_world.js
```

...And just like that, we're JavaScript developers! Well, almost... We're at the beginning of our journey towards becoming JavaScript developers.

## Recap

What effect did JavaScript have on web development?

<details>
<summary>Answer</summary>
JavaScript allowed developers to make web pages that were more dynamic and interactive.
</details>

<br>

What is Node.js?

<details>
<summary>Answer</summary>
Node.js is a JavaScript runtime which allows us to run JavaScript code outside of an internet browser.
</details>

## Conclusion

Now that we know a little bit about what JavaScript is and where it came from we're ready to start learning the language. We'll spend the next few weeks learning JavaScript as a programming language, writing JavaScript that runs in the browser, allowing us to create more interesting, dynamic and interactive web pages, and writing server-side JavaScript to handle routing and database queries.
