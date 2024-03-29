---
layout: "layouts/blog.njk"
title: "FPL Player Value, Expected Returns and Targets"
date: 2018-02-28 17:23:03
description: "FPL players range in cost starting from 4 up to 13 so how do you compare them fairly across such a broad spectrum? What sort of returns should you expect from each price bracket? I've tried to apply some (very rough) maths to it to find out who's justifying their price tag"
tags: ["blog", "archive", "misc"]
eleventyNavigation:
  key: "FPL Player Value, Expected Returns and Targets"
wpid: "748"
---

FPL players range in cost starting from 4 up to 13 so how do you compare them fairly across such a broad spectrum? What sort of returns should you expect from each price bracket? I've tried to apply some (very rough) maths to it to find out who's justifying their price tag.

<h3>Season Target</h3>
Firstly, we need to set a points target for the season to get our weekly target. I'm going to base mine on equalling my best ever season, 2016/2017, where I scored 2281 points, with a rank of 16,876. So, for this, I'm using a season target of 2280 points, which as you'll see further down makes the maths easier.
<h3>Scope and Disclaimers</h3>
The next thing is to set the scope of this exercise and get in my disclaimers. I'm assuming 38 "normal" game weeks with no hits and no chips. I'm also ignoring rises in team value. Finally, I'm giving all figures rounded to 2 decimal places.
<h3>Team Value</h3>
So, breaking things down, we all start with a team value of 100. This means each of our 15 squad players averages out at a cost of 6.67 (100/15).

Only 11 of our 15 score each week so we need to focus on the team rather than the squad. I've assumed that our first 11 have a cumulative cost of 82. That's assuming a typical value of 18 on bench, something like 4.0, 4.5, 4.5, 5.0.

Using that total playing cost of 82, each player now has an average value of 7.45 (82/11).

<h3>Weekly Target</h3>
Going back to my season target of 2280 points. Over 38 game weeks this (conveniently) breaks down to 60 points per week. So, I have a weekly target of 60 points.
<h3>Player Target</h3>
The next thing to work out is the average return required from each player each week. Given that our captain scores double this is the game week requirement divided by 12, 60/12 = 5. So, I want each player to score 5.
<h3>Expected Returns</h3>
If I'm expecting an average of 5 points from an average player cost of 7.45 that means I'm expecting each player to return 0.67 of his cost in points. Roughly two thirds. So, a player worth 12 should return 8 points, a player worth 9 should return 6, you get it.
<h3>Value Index</h3>
We can then take this expected return number and divide by 0.67 to give a value index based on 1, where 1 is the expected value, above 1 is better, below 1 is poorer.

We can estimate the value over the season so far by looking at the Points per Match and comparing that with the cost. If PPM divided by cost is less than 0.67 the player's returning lower than expected, if higher it's better. This index makes it easy to see how much better or worse as a percentage. 1.14 = 14% better, 0.92 = 8% worse.

<h3>Real Examples</h3>
Here are some examples using stats from mid game week 28, 2017/2018 season.
<h4>Defenders</h4>
<table>
<thead>
<tr>
<th>Player</th>
<th>Cost</th>
<th><abbr title="Point per Match">PPM</abbr></th>
<th>Value Index</th>
</tr>
</thead>
<tbody>
<tr>
<td>Alonso</td>
<td>7.2</td>
<td>5.3</td>
<td>1.10</td>
</tr>
<tr>
<td>Davies</td>
<td>5.7</td>
<td>5.2</td>
<td>1.36</td>
</tr>
<tr>
<td>Valencia</td>
<td>6.9</td>
<td>5.1</td>
<td>1.10</td>
</tr>
<tr>
<td>Bellerin</td>
<td>6.0</td>
<td>3.7</td>
<td>0.92</td>
</tr>
<tr>
<td>Bruno</td>
<td>4.5</td>
<td>3.3</td>
<td>1.09</td>
</tr>
</tbody>
</table>
<h4>Midfielders</h4>
<table>
<thead>
<tr>
<th>Player</th>
<th>Cost</th>
<th><abbr title="Point per Match">PPM</abbr></th>
<th>Value Index</th>
</tr>
</thead>
<tbody>
<tr>
<td>Salah</td>
<td>10.5</td>
<td>8.4</td>
<td>1.19</td>
</tr>
<tr>
<td>De Bruyne</td>
<td>10.4</td>
<td>6.4</td>
<td>0.92</td>
</tr>
<tr>
<td>Hazard</td>
<td>10.7</td>
<td>6.0</td>
<td>0.84</td>
</tr>
<tr>
<td>Ramsey</td>
<td>7.0</td>
<td>5.8</td>
<td>1.24</td>
</tr>
<tr>
<td>Doucoure</td>
<td>5.5</td>
<td>4.2</td>
<td>1.14</td>
</tr>
</tbody>
</table>
<h4>Forwards</h4>
<table>
<thead>
<tr>
<th>Player</th>
<th>Cost</th>
<th><abbr title="Point per Match">PPM</abbr></th>
<th>Value Index</th>
</tr>
</thead>
<tbody>
<tr>
<td>Kane</td>
<td>12.9</td>
<td>6.4</td>
<td>0.74</td>
</tr>
<tr>
<td>Firmino</td>
<td>9.3</td>
<td>5.5</td>
<td>0.88</td>
</tr>
<tr>
<td>Rooney</td>
<td>7.2</td>
<td>4.4</td>
<td>0.91</td>
</tr>
<tr>
<td>Murray</td>
<td>5.7</td>
<td>3.5</td>
<td>0.92</td>
</tr>
<tr>
<td>Wilson</td>
<td>6.0</td>
<td>4.3</td>
<td>1.07</td>
</tr>
</tbody>
</table>
<h3>Observations</h3>
From these few selected players in the examples, we can see that the best performing for their cost is Ben Davies of Spurs with 1.36; the worst is surprisingly Harry Kane with 0.74.
<h3>Conclusion</h3>
There are obviously other factors like minutes played but maybe we can use this value index to see which players perform consistently when selected. Maybe using point per match based on recent form rather than the season average would yield more accurate results?
