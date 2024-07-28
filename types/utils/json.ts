import type { Types } from './types'

export type Json = { [key: string]: Types | Json } | Json[]
