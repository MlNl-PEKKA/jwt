/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Replace } from '@/types/utils/replace'
import type { Database } from '../schema'

type Views = Database['public']['Views']

export type CustomViews = Replace<Views, {}>

export type CustomView<
  T extends keyof Views,
  Row extends Partial<Views[T]['Row']> = {},
> = Replace<
  Views[T],
  //@ts-expect-error
  {
    //@ts-expect-error
    Row: Replace<Views[T]['Row'], Row>
  }
>
