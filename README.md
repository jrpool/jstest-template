# jstest-template

Template for any Learners Guild project without a forkable repository requiring the creation, linting, and testing of JavaScript ES2015 functions.

Project: adjective-noun

Project Members:

[Jonathan Pool](https://github.com/jrpool)

## Functions

```
stringLength.js
```

## Installation and Setup

0. If not yet installed, install [node][node].

1. This remote repository is at git@github.com:jrpool/jstest-template.git. Clone it into any local directory in which you can read and write. Make that directory your working directory. Do this by executing:

  `git clone git@github.com:jrpool/jstest-template.git`

  `cd jstest-template`

2. Install required dependencies (see `package.json`) by executing:

  `npm i`

3. Perform these operations by executing scripts (see `package.json`):

  `npm test`: Perform the tests in the `test` directory.

  `npm run lint`: Check whether the files in the `src` and `test` directories comply with the rules in `.eslintrc.json`. If the files fully comply, there is no output.

  `npm run lintfix`: Correct automatically correctable format error and then do the same as `npm run lint`.

4. Edit `.eslintrc.json` to customize the linting rules.

## Example

In a freshly cloned repository, the `npm test` command should produce the following output:

```
> jstest-template@1.0.0 test …/jstest-template
> mocha --compilers js:babel-register test/*.js

  stringLength()
    ✓ is a function
    valid arguments
      ✓ returns a number
      ✓ returns 5 when given “hello”
      1) incorrect test: returns 5 when given “hello there”
    invalid arguments
      ✓ returns undefined if anyString is a number
      ✓ returns undefined if anyString is an array
      ✓ returns undefined if anyString is an object


  6 passing (69ms)
  1 failing

  1) stringLength() valid arguments incorrect test: returns 5 when given “hello there”:

      AssertionError: expected 11 to equal 5
      + expected - actual

      -11
      +5

      at Context.<anonymous> (test/fn_test.js:21:49)

npm ERR! Test failed.  See above for more details.
```

## Resources

- [JS Doc][jsdoc]
- [Documentation generator][npm-documentation]

[chai]: https://chaijs.org/
[github-pages]: https://pages.github.com/
[jsdoc]: http://usejsdoc.org/
[mocha]: https://mochajs.org/
[node]: https://nodejs.org/en/
[npm]: https://www.npmjs.com/
[npm-documentation]: https://www.npmjs.com/package/documentation
