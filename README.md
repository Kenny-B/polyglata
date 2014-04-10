[![Build Status](https://travis-ci.org/wgroeneveld/polyglata.svg?branch=master)](https://travis-ci.org/wgroeneveld/polyglata)

# Polyglata - the Polyglot kata labs

## What's this?

An attempt to create more engaging little labs with a twist, and an attempt to implement them in as many languages as we can think of. Why? To learn. As simple as that. **Use TDD**. Why? Because we're convinced it's the only way to create sustainable software. 

This requires us to investigate how unit test frameworks work in non-conventional languages. Yay, more learning!

## Languages & Build ecosystems

### C++

Uses scons and builds with `g++`. See [02_wizards C++ README](https://github.com/wgroeneveld/polyglata/blob/master/02_wizards/C%2B%2B/README.md) for detailed instructions on how scons works. 

Running tests - written with `gtest`:

```
scons
```

### Java

Uses Maven 3 and builds with JDK7. 

Running tests - written with JUnit 4:

```
mvn test
```

Take a look at the simple [01_calculatestring pom.xml](https://github.com/wgroeneveld/polyglata/blob/master/01_calculatestring/java/pom.xml) to see how the tests are gathered.

### Python

Uses nosetest and builds with python 3.3. 

Running tests - written with unittest:

```
nosetests
```

Requires `nose` to be installed with pip: `pip install nose`. If you don't like this, use the `python -m unittest discover` command. 

### Ruby

Uses Rake and builds with ruby 2.0.0. 

Running tests - written with minitest:

```
rake
```

The default rake command should be test because of the `task :default => :test` line in the rakefiles. See [01_calculatestring Ruby Rakefile](https://github.com/wgroeneveld/polyglata/blob/master/01_calculatestring/ruby/Rakefile).

### CSharp

Uses .NET 4.5 and builds with Mono 3.3.0 (MSVSC12 project files).

Running tests - written with NUnit 2.6.3:

```
xbuild
```

This works because there's a build target speficied in the csproj file:

```
  <Target Name="AfterBuild">
   <Exec Command="nunit-console4 StringCalculator.csproj" />
  </Target>
```

Running tests separately can be done via `nunit-console4 solution.csproj`.

Don't forget to target .NET 4 using the 4 suffix, otherwise you end up with LINQ stacktraces etc.
`xbuild` in the mono command prompt builds everything with Mono. 

There's an autotest runner checked into the lib folder which works with mono and tracks all files starting from a root directory (you specify as a single argument).

- Navigate to the root csharp directory you want to test
- `mono ./../../lib/csharpdotnet/AutoTest.NET/AutoTest.Console.exe ./`

There's a catch, inside the AutoTest.config file, you have to specify two paths (now hardcoded, add to `$PATH` to resolve this)

- `<BuildExecutable>C:\Program Files (x86)\Mono-3.2.3\bin\xbuild.bat</BuildExecutable>`
- `<NUnitTestRunner>C:\Program Files (x86)\Mono-3.2.3\bin\nunit-console4.bat</NUnitTestRunner>`

#### IronPython

Uses MSVSC12 & the latest IronPython nuget package, translating into Python 2.7.

### Javascript

Uses grunt and builds with nodejs 1.4.3.

Running tests - written with jasmine:

```
npm test
```

or simply ```grunt``` if there's a `Gruntfile.js` specified, otherwise everything you need is inside the `package.json` file generated from executing `npm init`. We use jasmine-node as the test command; because of `"jasmine-node": "~1.14.2"` in the package file. The default grunt command should also be executing the tests. Take a look at the [04_crawler Gruntfile](https://github.com/wgroeneveld/polyglata/blob/master/04_crawler/javascript/Gruntfile.js) and note `grunt.registerTask('default', ['jasmine_node']);`.

Requires packages jasmine-node locally installed (use `npm init` please).

## Languages & Sublime Text integration

Let's talk a bit about integration between integration of languages, the build system and Sublime Text 2.

### Node/Javascript

Package control:

* Sublime-JSLint
* SublimeREPL (Node in PATH)

![Screenshot](http://i60.tinypic.com/1418cn.png)

CTRL+B triggers JSLint. `"use strict;"` works but the jasmine watcher will tigger "Exception loading [file]". 
 