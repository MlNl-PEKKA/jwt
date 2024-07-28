/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Replace } from '@/types/utils/replace'
import type { Database } from '../schema'
import type { CustomUsers } from './users'

type Tables = Database['public']['Tables']

export type CustomTables = Replace<Tables, { user: CustomUsers }>

export type CustomTable<
  T extends keyof Tables,
  U extends Partial<Tables[T]['Row']> = {},
> = Replace<
  Tables[T],
  //@ts-expect-error
  {
    //@ts-expect-error
    Insert: Replace<Tables[T]['Insert'], U>
    //@ts-expect-error
    Row: Replace<Tables[T]['Row'], U>
    //@ts-expect-error
    Update: Replace<Tables[T]['Update'], U>
  }
>
