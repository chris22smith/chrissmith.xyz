---
layout: "layouts/blog.njk"
title: "Hiding UI Elements"
date: 2019-03-29 18:00:17
description: "At the start of March 2019 I ran a poll on Twitter to see how devs hide UI elements"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Hiding UI Elements"
wpid: "861"
---

<p>At the start of March 2019 I ran a poll on Twitter to see how devs hide UI elements. Here's the tweet and results.</p>

<p>Admittedly, not a very scientific sample size but it was enough to confirm my suspicion that very few people use the "hidden" attribute. I should probably call it a property rather than an attribute as it's a Boolean and acts in a similar way to "disabled" or "required" which we often use on form elements. And, by contrast, the most common method seems to be to use the CSS "display:none". Probably no great surprise to anyone.</p>

<p>I think it's interesting to think about what we're really doing when we hide an element. Is the visibility of the element just for screen users or for all users? Do we still want the element available for non visual media? Or is the content going to be used by another part of the page in some way? Does it need to be in the DOM at all or are we just keeping it there because it's easier?</p>

<p>If we use JavaScript, either native or a framework, we can insert and remove elements as needed based on logic. If it's playing no part in our document why not just leave it out altogether? This keeps the DOM light and performant and easier to work with. If you're working with something like automated testing you can check for an element's existence rather than trying to figure out if it's visible or not.</p>

<p>If we use CSS to hide an element and respect the separation of concerns principle then are we saying that hiding this element is a presentational choice rather than a semantic one? Maybe we are hiding it, maybe temporarily, rather than denying its existence?</p>

<p>In the case where we want an element to be hidden in one medium and shown in another, CSS feels like the right choice. Whilst "display:none" and "visibility:hidden" are valid, other techniques like "height:0", "opacity:0" or "left:9999px" feel very unclear in their intentions and too focused on the visual user.</p>

<p>The HTML "hidden" property is a more semantic choice. It is stating that this element is not to be considered when reading the document, whether that be on screen or via assistive technologies. It is about more than visibility and is probably badly named. Maybe "ignore" would have been more fitting? It is more about the state of the element and closer in meaning to the input[type=hidden] that we used to see in the days before Ajax.</p>

<p>If you take away the JavaScript and CSS - maybe some network issues, maybe the HTML gets copied elsewhere - the element stays hidden. The point is that it's meant to be hidden, it's not styling.</p>

<p>The "hidden" property is also easy to work with and change in JavaScript. In fact, it's easier than using a CSS class as you don't have to write any CSS and you know it will work regardless.</p>

<pre class="wp-block-code"><code>&lt;p class="disclaimer" hidden>This is a disclaimer&lt;/p>

&lt;script>
  const disclaimer = document.querySelector('.disclaimer');
  function showDisclaimer() {
    // with a CSS class
    disclaimer.classList.add('show');
    // with the hidden property
    disclaimer.hidden = false;
  }
&lt;/script></code></pre>
<!-- /wp:code -->

<p>Think about why your content is hidden and how it may be reused and choose the most appropriate method of hiding it (or removing it).</p>
