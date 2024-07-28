type A = {
    a: string;
    b: boolean;
    c: number;
    d: {
        hello?: string
        world: number
    },
    e: {
        world?: string;
    }[] 
}   

export type Json =
  | { [key: string]: string | number | boolean | null | undefined | Json }
  | Json[]

type Replace<T extends Json, U extends T extends Json[]? {[id in keyof T[number]]:any}:{[id in keyof T]:any} > = T extends Json[] ? (Omit<T[number], keyof U> & U)[] : (Omit<T, keyof U> & U)


type B = Replace<A['e'], {world: number}>;

type C = B[number]['world']


type Partials <T extends Json> = T extends Json[] ? {
    [id in keyof T[number]]-?: undefined extends T[number][id] ? id : never
}[keyof T[number]]: {
    [id in keyof T]-?: undefined extends T[id] ? id : never
}[keyof T];