/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"
import equals from "@unction/equals"

import where from "./index"

test("Deep Map vs Deep Object partial true", ({ok, end}) => {
  ok(
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
    })
  )

  end()
})

test("Object vs Object partial true", ({ok, end}) => {
  ok(
    where(
      {name: equals("Kurtis Rainbolt-Greene")}
    )({
      name: "Kurtis Rainbolt-Greene",
      age: 30,
    })
  )

  end()
})

test("Object vs Map partial true", ({ok, end}) => {
  ok(
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
  )

  end()
})

test("Array vs Array partial true", ({ok, end}) => {
  ok(
    where(
      [
        equals("Kurtis Rainbolt-Greene"),
      ]
    )(
      [
        "Kurtis Rainbolt-Greene",
        30,
      ]
    )
  )

  end()
})

test("Deep Map vs Deep Object all false", ({notOk, end}) => {
  notOk(
    where(
      new Map([
        [
          [
            "attributes",
            "name",
          ],
          equals("Zurtis Rainbolt-Greene"),
        ],
      ])
    )({
      attributes: {
        name: "Kurtis Rainbolt-Greene",
        age: 30,
      },
    })
  )

  end()
})

test("Object vs Object all false", ({notOk, end}) => {
  notOk(
    where(
      {name: equals("Zurtis Rainbolt-Greene")}
    )({
      name: "Kurtis Rainbolt-Greene",
      age: 30,
    })
  )

  end()
})

test("Object vs Map all false", ({notOk, end}) => {
  notOk(
    where(
      {name: equals("Zurtis Rainbolt-Greene")}
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
  )

  end()
})

test("Array vs Array all false", ({notOk, end}) => {
  notOk(
    where(
      [
        equals("Zurtis Rainbolt-Greene"),
      ]
    )(
      [
        "Kurtis Rainbolt-Greene",
        30,
      ]
    )
  )

  end()
})

test("Deep Map vs Deep Object partial false", ({notOk, end}) => {
  notOk(
    where(
      new Map([
        [
          [
            "attributes",
            "name",
          ],
          equals("Kurtis Rainbolt-Greene"),
        ],
        [
          [
            "attributes",
            "age",
          ],
          equals(31),
        ],
      ])
    )({
      attributes: {
        name: "Kurtis Rainbolt-Greene",
        age: 30,
      },
    })
  )

  end()
})

test("Object vs Object partial false", ({notOk, end}) => {
  notOk(
    where(
      {
        name: equals("Kurtis Rainbolt-Greene"),
        age: equals(31),
      }
    )({
      name: "Kurtis Rainbolt-Greene",
      age: 30,
    })
  )

  end()
})

test("Object vs Map partial false", ({notOk, end}) => {
  notOk(
    where(
      {
        name: equals("Kurtis Rainbolt-Greene"),
        age: equals(31),
      }
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
  )

  end()
})

test("Array vs Array partial false", ({notOk, end}) => {
  notOk(
    where(
      [
        equals("Kurtis Rainbolt-Greene"),
        equals(31),
      ]
    )(
      [
        "Kurtis Rainbolt-Greene",
        30,
      ]
    )
  )

  end()
})
