---
layout: "layouts/blog.njk"
title: "What I Learned in 2016 (Part 3)"
date: 2017-01-08 13:00:27
description: "This is the third part of a three part blog post on the things I've learned over the last year"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "What I Learned in 2016 (Part 3)"
wpid: "349"
---

This is the third part of a three part blog post on the things I've learned over the last year. So far I've covered HTML, CSS and a rare (for me) bit of databasey stuff. And now the final part, the JavaScript...

<h3>Node.js</h3>
I haven't gone into this in depth but was curious about how JavaScript might look on the server. There are lots of in-built functions for working with files and requests but otherwise it really is just JavaScript - objects, functions, if statements, for loops, etc. I think it would take a bit of getting used to but having a JavaScript background it's probably much easier than learning something else like Ruby or PHP. I learned this from CodeSchool, <a href="https://www.codeschool.com/courses/real-time-web-with-node-js" target="_blank">Real-time Web with Node.js</a>.
<h3>Modular Functions in JavaScript</h3>
I really didn't know what to call this but I know what I mean by it so I'll try to explain. It's just a way of thinking about JavaScript functions so they're separated and easier to test. Each function performs a single job so rather than a function being a wrapper for lots of different jobs, e.g. a conditional test then some string manipulation then constructing an object to return. Each job is broken down into its own function so we end up with lots of tiny functions which call each other rather than long routines. The second part to this is not relying on any variables which sit outside of the function scope. So, not referring back to a variable in the global scope or in a parent function. If our function needs to refer to something it needs to be passed in explicitly as an argument. This just makes it completely self-contained so it can be picked up and dropped in a different context and still do its job without worrying about being affected by the scope.

I started using this methodology after reading a blog post but, sadly, I can not longer remember the source. If anyone knows what this is called or who might have written a good article on it please let em know in the comments.

<h3>ES2015</h3>
As I've managed to start dropping support for older browsers it has opened the doors on some new features in JavaScript, namely, ES6 or, as I think we're supposed to call it, ES2015. I did another CodeSchool course, <a href="https://www.codeschool.com/courses/es2015-the-shape-of-javascript-to-come" target="_blank">ES2015: The Shape of JavaScript to Come</a>. In short it takes a bit of getting used to but ultimately means you can do more writing less, which has to be a good thing. Using tools like <a href="https://babeljs.io/" target="_blank">Babel</a> we can even use it in older browsers now - it cleverly converts it back to ES5 where needed.
<h3>TypeScript</h3>
<a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> is like JavaScript but upgraded to be a strongly typed object oriented language. It then compiles down to JavaScript, a bit like Sass to CSS. Like CSS is valid Sass, JavaScript is valid TypeScript so you can convert your existing files without it being a major drama. You declare the type of any variable and if there's any error or uncertainty it won't compile. This means that you can never have any type errors in production, which is very nice. The number of times I've had to fix bugs around some function expecting an integer but getting a string. The other side to it is being able to use modules and classes - it's proper scoping and namespacing.

As we're working with Angular I actually did the Pluralsight course, Angular with TypeScript. With hindsight, I'd probably just do a TypeScript course so as not to blur the lines.

<h3>Dragula</h3>
This is a library for using drag and drop functionality. I've always used <a href="https://jqueryui.com/droppable/" target="_blank">jQuery UI</a> <a href="https://jqueryui.com/draggable/" target="_blank">draggable</a>, <a href="https://jqueryui.com/droppable/" target="_blank">droppable</a> or <a href="https://jqueryui.com/sortable/" target="_blank">sortable</a> previously but was keen to see what could be done without the jQuery dependency. <a href="https://bevacqua.github.io/dragula/" target="_blank">Dragula</a> is actually very similar to use, selectors, options object, etc. but uses vanilla JavaScript. Getting into more complex uses the documentation and Stack Overflow answers started to dry up a bit. I guess that's one of the advantages of using the big libraries.
<h3>Toastr</h3>
<a href="https://codeseven.github.io/toastr/" target="_blank">Toastr</a> is another nice little utility library. This does pop-up or toaster notifications. It requires jQuery so may not be for everyone but has loads of options and stacks multiple notifications elegantly, which is not easy. This is probably one of the easiest things I've ever used.

And that about wraps it up. Who knows what 2017 holds. At the moment I'm very curious about some new JavaScript frameworks - <a href="https://vuejs.org/" target="_blank">Vue.js</a> and <a href="https://svelte.technology/" target="_blank">Svelte</a>.
