---
layout: "layouts/blog.njk"
title: "What I Learned in 2015"
date: 2016-01-02 12:09:59
description: "I thought I'd do another quick run-through of what I've picked up this year"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "What I Learned in 2015"
wpid: "37"
---

I thought I'd do another quick run-through of what I've picked up this year. It feels good to show myself that I'm still learning at a healthy pace.

<h3>SVG</h3>
I've started using SVG more, creating some simple charts and building dynamic graphics for use with Google Maps. I made markers or pins, which have colours and characters set dynamically according to data. I think I've finally got my head around the whole viewBox, which took me a while. <a href="https://css-tricks.com/search-results/?q=svg" target="_blank">CSS Tricks</a> provided me with some <a href="https://css-tricks.com/search-results/?q=svg" target="_blank">very useful SVG tutorials</a> and introduced me to the work of <a href="https://sarasoueidan.com/" target="_blank">Sara Soueidan</a>.
<h3>Angular.js</h3>
I've been tinkering with <a href="https://angularjs.org/" target="_blank">Angular</a> for a while but have really got into using it day-to-day this year. I found it hard at first because it's so different to using native JavaScript or jQuery to manipulate the DOM. In Angular you basically set conditions in the HTML, e.g. show this when the data is that, and then to make things happen you just change the data. The data changes and the UI updates. It means you're not making data changes and UI changes - just change the data and Angular looks after the UI. Once you've got that it's actually a lot easier to manage than writing an app with jQuery.
<h3>React.js</h3>
I've done my first project using <a href="https://facebook.github.io/react/" target="_blank">React</a>. This is a very clever framework for updating the UI as quickly as possible. It checks what actually needs to change on screen and only updates the HTML nodes that require a change, making the UI very fast and, well, reactive. It's based on building components which each have their own properties and state. The component or modular approach certainly feels like the way forward for building UIs.
<h3>Jekyll</h3>
I built the previous incarnation of this website using <a href="https://jekyllrb.com/" target="_blank">Jekyll</a>. It's a static site generator. It works in much the same way as any content management system with templates and a build process but spits out static HTML so it's faster for the user. It took a lot of setting up on Windows and involved some scary new stuff for me, like Ruby, Python and using the command line. It is an amazing bit of software for building fast sites and very flexible. Definitely worth trying. I eventually moved away from it and back to WordPress as it was just easier to update - I can update from any device anywhere without having to have the complicated local set up. As my content is mainly just text, I didn't feel the performance gains balanced out the usability for me as an author.
<h3>Markdown</h3>
Using Jekyll also introduced me to using markdown. It's a quick way of writing HTML without having to use tags. It keeps the content clean and easy to read, whilst containing formatting. It kind of lets you write HTML without having to break your creative flow to think about formatting. It also enables non HTML savvy authors to publish formatted content easily.
<h3>New JavaScript Syntax - EcmaScript 6</h3>
I haven't used it yet but started reading about ES6. There are a few good introductory articles, which show off some of the new features without getting too bogged down in the details. Here's a <a href="https://www.felixrieseberg.com/ecmascript6-introduction/" target="_blank">good basic ES6 intro</a>. It feels like a lot to learn but it becomes evident very quickly that we'll be able to write less code and it'll be easier to understand. Win win.
<h3>Google Analytics Event Tracking</h3>
I've used Google Analytics for years but have just discovered how to use event tracking. I can now track clicks on a particular UI element to see how it's used, check pre-defined user preferences by reading data out of the browser's localStorage, measure download numbers for PDF documents. It's opening the doors to a lot of previously missing data with regards to user behaviour and can help me make better decisions on designing the user experience.
<h3>Responsive Web Design</h3>
I've made big strides forward this year with responsive design. I'm starting, late I know, to think about it in everything I do. It's a lot more work but leads to much more usable UIs and often forces me to keep the design simpler than I would otherwise, which is probably a good thing.
<h3>Bootstrap</h3>
I've actively avoided <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> for the last few years. I always had 2 major concerns with it: 1) that my sites would end up looking the same as everyone else's and 2) that I was loading up a hefty framework and then only using a fraction of it, which would be very wasteful.

A colleague reintroduced me to it and I was delighted to find that it's now possible to <a href="https://getbootstrap.com/customize/" target="_blank">create customised builds</a> so you can choose the parts you want to include (no waste) and even set colour schemes, default padding, etc. in the build, replacing the defaults, so there's less needed to overwrite in a custom theme.

I've started using it as its grid layout makes responsive design so much easier than handling each page element and I know that the ready made components and UI elements are accessible where my own might not be.

<h3>Codepen</h3>
And finally, <a href="https://codepen.io" target="_blank">Codepen</a>. I've covered this in another post, <a href="/blog/developing-in-codepen/" target="_blank">Developing in Codepen</a>. In short, I use it every day, it's awesome.
