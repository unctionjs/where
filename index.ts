import reduceWithValueKey from "@unction/reducewithvaluekey";
import dig from "@unction/dig";
import arrayify from "@unction/arrayify";
import {PredicateFunctionType} from "./types";

export default function where<A, B, C> (matcher: PredicateFunctionType<A>) {
  return function whereMatcher (keyedEnumerable: KeyedArray<B> | Set<B> | RecordType<B, unknown> | string): boolean {
    return reduceWithValueKey(
      (latest: KeyedArray<B> | Set<B> | RecordType<B, unknown> | string) =>
        (value: B) =>
          (key: C): KeyedArray<B> | Set<B> | RecordType<B, unknown> | string =>
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
