
# C++ Solution

## Build ecosystem

Uses [scons](http://www.scons.org/) with multiple `SConscript` files, starting with the root `SConstruct` file.

For example:

```python
env = Environment(CXX = 'g++')	# gtest is using std::string etc, so no gcc.

gtest = env.SConscript('lib/gtest/SConscript', 'env')
src = env.SConscript('src/SConscript', 'env')
out = env.SConscript('test/SConscript', 'env gtest src')

# output is an array with path to built binaries. We only built one file - run it (includes gtest_main).
test = Command( target = "testoutput",
                source = str(out[0]),
                action = str(out[0]) )
AlwaysBuild(test)
```

- compiles dependencies (google test)
- compiles source in src
- compiles and links tests with dependencies and source
- executes via `Command()` - if linked with `gtest_main`, will auto-run all tests.

## Testing with gtest

After executing `scons`in the root dir, you should see something like this:

```
Running main() from gtest_main.cc
[==========] Running 6 tests from 2 test cases.
[----------] Global test environment set-up.
[----------] 3 tests from FactorialTest
[ RUN      ] FactorialTest.Negative
[       OK ] FactorialTest.Negative (0 ms)
[ RUN      ] FactorialTest.Zero
[       OK ] FactorialTest.Zero (0 ms)
[ RUN      ] FactorialTest.Positive
[       OK ] FactorialTest.Positive (0 ms)
[----------] 3 tests from FactorialTest (0 ms total)

[----------] 3 tests from IsPrimeTest
[ RUN      ] IsPrimeTest.Negative
[       OK ] IsPrimeTest.Negative (0 ms)
[ RUN      ] IsPrimeTest.Trivial
[       OK ] IsPrimeTest.Trivial (0 ms)
[ RUN      ] IsPrimeTest.Positive
[       OK ] IsPrimeTest.Positive (0 ms)
[----------] 3 tests from IsPrimeTest (0 ms total)

[----------] Global test environment tear-down
[==========] 6 tests from 2 test cases ran. (1 ms total)
[  PASSED  ] 6 tests.
```

Take a look at the [Google Test Primer](https://code.google.com/p/googletest/wiki/Primer) for info on assertions etc.
Uses googletest-1.7, compiled working & tested under

- OSX Mavericks 10.9 (XCode 5.1, cmdline tools, homebrew for scons and python 2.7 packages)
- Win7 & Cygwin (g++, scons, python 2.7 packages)
