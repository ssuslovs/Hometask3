# Hometask

# How to Install and Run test:
   
    1. Clone repository from github to your local machine.
    2. Install yarn in "..\Hometask3" folder by typing "yarn" command in the terminal.
    3. Run test by typing "yarn test" command in the terminal.

# Console output should be like this: 

```
yarn run v1.22.19
$ jest
  console.log
    The perimeter of a rectangle is 26 and the area is 25

      at log (js/rectangle.js:13:20)

  console.log
    undefined

      at Object.log (tests/rectangle.test.js:15:39)

 PASS  tests/rectangle.test.js
  √ should properly output Perimeter (2 ms)
  √ should properly output Area (1 ms)
  √ should properly output Info (35 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.98 s, estimated 1 s
Ran all test suites.
Done in 1.92s.
```
