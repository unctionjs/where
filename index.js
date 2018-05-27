import reduceWithValueKey from "@unction/reducewithvaluekey"
import dig from "@unction/dig"
import arrayify from "@unction/arrayify"

import type {KeyedEnumerableType} from "types"
import type {PredicateFunctionType} from "types"
import type {UnaryFunctionType} from "types"
import type {KeyType} from "types"

export default function where (matcher: KeyedEnumerableType<PredicateFunctionType>): UnaryFunctionType {
  return function whereMatcher (keyedEnumerable: KeyedEnumerableType): boolean {
    return reduceWithValueKey(
      (latest: boolean): UnaryFunctionType =>
        (value: PredicateFunctionType): UnaryFunctionType =>
          (key: KeyType): boolean => latest && value(dig(arrayify(key))(keyedEnumerable))
    )(
      true
    )(
      matcher
    )
  }
}
