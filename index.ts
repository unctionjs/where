import reduceWithValueKey from "@unction/reducewithvaluekey";
import dig from "@unction/dig";
import arrayify from "@unction/arrayify";
import {PredicateFunctionType} from "./types";
import {KeyedEnumerableType} from "./types";

export default function where<A, B, C> (matcher: PredicateFunctionType<A>) {
  return function whereMatcher (keyedEnumerable: KeyedEnumerableType<B>): boolean {
    return reduceWithValueKey(
      (latest: KeyedEnumerableType<B>) =>
        (value: B) =>
          (key: C): KeyedEnumerableType<B> =>
            latest && value(
              dig(
                arrayify(key)
              )(
                keyedEnumerable
              )
            )
    )(
      true
    )(
      matcher
    );
  };
}
