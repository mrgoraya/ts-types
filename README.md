# Typescript Advanced Types

The contents includes the followings

# Table of contents

1. [Introduction](#introduction)
2. [Advanced Types](#advanced)
   1. [Intersection](#intersection)
   2. [Index Signature Parameter](#index-signature)

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
