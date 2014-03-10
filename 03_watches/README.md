
# Watches

This kata should focus on simple date/time manipulation to get a feel of the language's capability on handling and parsing dates and times.

## Assignment

Implement a `Watch`. You can ask the watch for the current time. You can also combine watches into a new one (do not mutate existing objects!) which adds the hours, minutes and seconds of both watches. 
See if you can use a logical operator in the language you're going to use, (like "+").

Asking for the current time is hard to test because time keeps on rolling. Implement a way to "freeze" the time or to inject a time provider into your watch, so unit testing is easier. The implementation details do not matter, multiple solutions are possible.

## Acceptance criteria

* You can ask the watch for the current time by calling `WhatTimeIsIt`.
* You can combine watches; which result in everything on a classic watch added: hours, minutes, seconds. 

Watch out with combining: 20h15m30s + 1h46m32s = 22h3m2s. Make sure 20h10m + `nil` = 20h10m.

## Possible addons

* Also play with formatting the time by implementing a string representation. 
