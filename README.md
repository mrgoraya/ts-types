# Typescript Advanced Types

The contents includes the followings

# Table of contents

1. [Introduction](#introduction)
2. [Advanced Types](#advanced)
   1. [Intersection](#intersection)
   2. [Index Signature Parameter](#index-signature)
   3. [Function Overloads](#overloads)

## Introduction <a name="introduction"></a>

This repo includes typescript advanced types with examples.

## Advanced Types <a name="advanced"></a>

### Intersection <a name="intersection"></a>

Intersection types are closely related to union types, but they are used very differently. An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need.
For further explanation, please read the official documentation [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html).

### Index Signature Parameter <a name="index-signature">

If we want create the object with unknown prop names and values then index properties
or index signature parameter can be used.
An index signature parameter type must be 'string', 'number', 'symbol', or a template literal type.
It gives extra flexibility that which property we need and how many properties we need.

### Function Overloads <a name="overloads">

Some JavaScript functions can be called in a variety of argument counts and types. For example, you might write a function to produce a Date that takes either a timestamp (one argument) or a month/day/year specification (three arguments).

In TypeScript, we can specify a function that can be called in different ways by writing overload signatures. To do this, write some number of function signatures (usually two or more), followed by the body of the function:
For further explanation can be found here [Function Overloads](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)

```
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);

```
