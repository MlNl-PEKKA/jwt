import type { Json } from './json'
import type { Types } from './types'

type Partials<T extends Json> = T extends Json[]
  ? {
      [id in keyof T[number]]-?: undefined extends T[number][id] ? id : never
    }[keyof T[number]]
  : {
      [id in keyof T]-?: undefined extends T[id] ? id : never
    }[keyof T]

export type Replace<
  T extends Json,
  U extends T extends Json[]
    ? { [id in keyof T[number]]?: Types | Json }
    : { [id in keyof T]?: Types | Json },
> = T extends Json[]
  ? (Omit<T[number], keyof U> &
      Omit<U, Partials<T[number]>> &
      Partial<Pick<U, Partials<T[number]>>>)[]
  : Omit<T, keyof U> &
      Omit<U, Partials<T>> &
      Partial<Omit<U, Exclude<keyof T, Partials<T>>>>
