import reduceWithValueKey from "@unction/reducewithvaluekey"
import keyChain from "@unction/keychain"
import arrayify from "@unction/arrayify"

export default function where (matcher: KeyedFunctorType<PredicateType>): UnaryFunctionType {
  return function whereMatcher (functor: KeyedFunctorType): boolean {
    return reduceWithValueKey(
      (latest: boolean): UnaryFunctionType =>
        (value: PredicateType): UnaryFunctionType =>
          (key: KeyType): boolean => latest && value(keyChain(arrayify(key))(functor))
    )(
      true
    )(
      matcher
    )
  }
}
