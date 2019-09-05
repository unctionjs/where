# @unction/where

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> PredicateFunctionType<A> => KeyedEnumerableType<B> => boolean

Compares a Keyed Enumerable of Predicate Functions to a Enumerable of values. It is partial and prefers truthiness (meaning it only checks a key on the Functor if there is a key on the matcher).

``` javascript
where(
  {name: equals("Kurtis Rainbolt-Greene")}
)({
  name: "Kurtis Rainbolt-Greene",
  age: 30,
}) // true
```

``` javascript
where(
  {name: equals("Kurtis Rainbolt-Greene")}
)(
  new Map([
    [
      "name",
      "Kurtis Rainbolt-Greene",
    ],
    [
      "age",
      30,
    ],
  ])
)
```

``` javascript
where(
  new Map([
    [
      [
        "attributes",
        "name",
      ],
      equals("Kurtis Rainbolt-Greene"),
    ],
  ])
)({
  attributes: {
    name: "Kurtis Rainbolt-Greene",
    age: 30,
  },
}) // true
```

``` javascript
where(
  [
    equals("Kurtis Rainbolt-Greene"),
  ]
)(
  [
    "Kurtis Rainbolt-Greene",
    30,
  ]
) // true
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/where.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/where.svg?maxAge=2592000&style=flat-square
