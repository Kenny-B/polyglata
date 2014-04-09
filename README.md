[![Build Status](https://travis-ci.org/wgroeneveld/polyglata.svg?branch=master)](https://travis-ci.org/wgroeneveld/polyglata)

# Polyglata - the Polyglot kata labs

## What's this?

An attempt to create more engaging little labs with a twist, and an attempt to implement them in as many languages as we can think of. Why? To learn. As simple as that. **Use TDD**. Why? Because we're convinced it's the only way to create sustainable software. 

This requires us to investigate how unit test frameworks work in non-conventional languages. Yay, more learning!

## Languages & Subl integration

Let's talk a bit about integration between integration of languages, the build system and Sublime Text 2.

### Node/Javascript

Package control:

* Sublime-JSLint
* SublimeREPL (Node in PATH)

![Screenshot](http://i60.tinypic.com/1418cn.png)

CTRL+B triggers JSLint. `"use strict;"` works but the jasmine watcher will tigger "Exception loading [file]". 
 