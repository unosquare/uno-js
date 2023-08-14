[![npm version](https://badge.fury.io/js/uno-js.svg)](https://www.npmjs.com/package/uno-js)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=unosquare_uno-js&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=unosquare_uno-js)
![GitHub Actions - CI](https://github.com/unosquare/uno-js/workflows/Node%20CI/badge.svg)

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

### Maybe

The Maybe class is a generic class that represents an optional value of type `T`. It can be used to avoid the use of `null` and `undefined` in code, which can help prevent runtime errors.

The Maybe class has two constructors:

* `constructor(value: T)`: Creates a new instance of `Maybe` with the specified value.
* `constructor()`: Creates a new instance of `Maybe` with the value `null`.

The Maybe class has two public methods:

* `map(fn: (value: T) => T): Maybe<T>`: Applies the function `fn` to the value of the `Maybe` instance and returns a new `Maybe` instance with the result. If the value of the `Maybe` instance is `null`, the new instance will also be `null`.
* `getOrDefault(defaultValue?: T): T`: Returns the value of the `Maybe` instance, or the value specified by `defaultValue` if the value of the instance is `null`.

```
const maybeNumber = new Maybe(10);
const doubledNumber = maybeNumber.map(x => x * 2);
console.log(doubledNumber); // 20

const maybeNull = new Maybe(null);
const defaultValue = 100;
const defaultNumber = maybeNull.getOrDefault(defaultValue);
console.log(defaultNumber); // 100
```

The code above creates two `Maybe` instances: one with the value 10 and one with the value null. It then uses the map and getOrDefault methods to process the values of the instances. In the first case, the map method doubles the value of the Maybe instance and returns a new instance with the doubled value. In the second case, the getOrDefault method returns the value specified by defaultValue (100) because the value of the Maybe instance is null.

The Maybe class is a useful tool for avoiding the use of null and undefined in code. By using Maybe, you can write more secure and robust code that is less prone to runtime errors.
