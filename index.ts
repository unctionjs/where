import reduceWithValueKey from "@unction/reducewithvaluekey";
import dig from "@unction/dig";
import arrayify from "@unction/arrayify";
export default function where (matcher) {
  return function whereMatcher (keyedEnumerable) {
    return reduceWithValueKey((latest) => (value) => (key) => latest && value(dig(arrayify(key))(keyedEnumerable)))(true)(matcher);
  };
}
