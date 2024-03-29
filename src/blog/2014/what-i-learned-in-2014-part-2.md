---
layout: "layouts/blog.njk"
title: "What I Learned in 2014: Part 2 - Javascript and Google Maps"
date: 2014-12-30 16:08:26
description: "This is the second part of a three-part article looking back at what new web things I’ve learned in 2014"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "What I Learned in 2014: Part 2 - Javascript and Google Maps"
wpid: "26"
---

This is the second part of a three-part article looking back at what new web things I’ve learned in 2014. This part focuses on JavaScript.

<h3>JavaScript and jQuery</h3>
This is a big area, probably the area where I have made the most progress in the last year. The main shift for me has been from doing everything in jQuery, which I learned first, to using native JavaScript. Hopefully by learning to do more with native Javascript I can cut down on the jQuery bloat, especially in mobile friendly pages.

In “vanilla JavaScript” I’ve learnt to use a few new built-in functions, which perform very well in modern browsers. One of the things that really slows down a page’s performance in JavaScript is looping through a long list of items and performing various operations within each. I’ve learned four new functions which perform operations very quickly - map, filter, forEach and reduce. I would urge anyone using standard for loops to look into these. One for loop operation I tried on a list of 10,000 items killed Chrome. Switching to using map it worked in under a second. I believe that jQuery’s each and filter functions already leverage these bult-in functions. The other useful thing I’ve discovered when working with loops is to move anything you can outside of the loop, e.g. a function. Don’t declare it every time - just do it once and call it each time.

I’ve finally got the hang of the ternary operator. This just means that I can now write my conditional statements in a much more compact way, things like return (confirmed) ? true : false;. If the variable ‘confirmed’ is truthy, return true, otherwise return false.

A great discovery in the last couple of months has been the hashchange event. The browser can detect changes to the part of the URL that appears after the #. This means that when we use links to change something like filter the data in a table, instead of the link’s href bring empty or set to the meaningless “#”, we can put something meaningful in there. For example our href could be “#female” and the URL will change to reflect this. The hashchange event will listen for this change and we can then grab the part after the hash symbol using window.location.hash and do our filtering. This has the added bonus of appearing in the browser’s history so the user can hit their back button to undo a filter. Much better and feels like this is how it’s supposed to work.

I think I’ve now understood how to properly use functions and objects in JavaScript to set the appropriate scope for variables. Wrapping functionality in functions means that each function is its own self-contained unit, which means no unexpected or conflicting references cropping up and it makes the code easier to maintain and test.

Earlier this year I wrote a jQuery script to handle pagination in a HTML table. I won’t go into the horribly complicated detail here but the learning point for me was to get the logic clear in my mind before getting into the code. I actually went back to pen and paper, sketching out the various scenarios and then finding the patterns to create my code.

JavaScript Frameworks and jQuery Plugins
Thanks to a very patient colleague I’ve now got a much better grip on Angular.js. I can now work with not just binding data in the HTML but can also write directives to create new page components and services to handle commonly required functions.

As part of the Angular work I’ve also learned how to do Unit Testing using the Jasmine framework. Unit testing always felt like a lot of extra work to me but now I see that having a long list of small tests that run is invaluable. It gives you the freedom to write new code knowing that any knock-on effects you create in the process will be picked up. It makes for far more robust and less buggy code.

Recently, I’ve implemented 2 jQuery plugins into a project, tablesorter for automatically sorting the rows of a table by clicking on a column heading, and elevateZoom for adding the capability of zooming in on a thumbnail image, like we often see on clothing details pages. Both are very well written with a lot of options available. Using these has made me realise that I can now go into the code of the plugins and actually follow (more or less) what is going on. I hope to be able to write and share some of my own in the next couple of years.

<h3>Google Maps API v.3</h3>
I’ve now spent a few months working with this API and have got a good understanding of how it works and how it can be used and extended to do more. I created my own utility library of functions for all the things I need to do regularly - draw markers and polygons with info windows which appear on click, calculating areas, converting area units, adding data layers and heatmaps, encoding/decoding polygon paths, adding new map controls, etc. There was also some more advanced functionality in there too which goes beyond what’s included in the API - calculating the optimal bounds (map viewport) to show a number of polygons, determining the direction or winding (clockwise or anti/counter-clockwise) of a polygon, calculating the centroid (centre from the average coordinates of points) of a polygon.

I’ve also used some third party features to extend the mapping functionality. One of these has allowed me to cluster markers so rather than have a lot of marekrs close together on screen we show a number of markers, much neater. Another has enabled me to place text labels on the map, which isn’t possible out-of-the-box.

The key tricks that I have picked up along the way are to 1) push any markers or polygons into an array so you can access them easily in JavaScript and 2) add your own custom properties to the native objects for markers and polygons, e.g. id or name, so that you can identify them easily in code.
