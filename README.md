[![npm version](https://badge.fury.io/js/uno-js.svg)](https://www.npmjs.com/package/uno-js)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=unosquare_uno-js&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=unosquare_uno-js)

# uno-js

Unosquare Typescript/JavaScript Library, zero dependencies.

String, array, and Date manipulation, easy-to-use fetch controller, and more, written in Typescript.

### Installation (npm)

To install uno-js through npm, you only need to run the following command:

```sh
    npm install uno-js --save
```

Check the documentation of this library at [https://unosquare.github.io/uno/uno-js](https://unosquare.github.io/uno/uno-js).

## Functions and classes

### Migration Notes

The following functions have been removed from the library as they are now covered by newer versions of Node.js, ECMAScript, or browsers. Here are the recommended alternatives:

- `debounce`: Use the `debounce` function from the `lodash` library.
- `abortController`: Use the native `AbortController` available in modern browsers and Node.js.
- `nameof`: Use TypeScript's `keyof` operator.
- `withEnter`: Use native event listeners for `onEnterKey` and `asyncOnEnterKey` functions.
- `trimText`: Use the native `String.prototype.trim` method.

### Removed Functions from dateUtils

The following functions have been removed from `dateUtils` as they are now redundant. Here are the recommended alternatives:

- `getDateUtc`: Use the native `Date` object and its methods.
- `compareDates`: Use the native comparison operators for `Date` objects.
