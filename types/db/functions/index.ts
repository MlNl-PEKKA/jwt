/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Replace } from '@/types/utils/replace'
import type { Database } from '../schema'

type Functions = Database['public']['Functions']

export type CustomFunctions = Replace<Functions, {}>

export type CustomFunction<
  T extends keyof Functions,
  Args extends Partial<Functions[T]['Args']> = {},
  Returns extends Partial<Functions[T]['Returns']> = {},
> = Replace<
  Functions[T],
  //@ts-expect-error
  {
    //@ts-expect-error
    Args: Replace<Functions[T]['Row'], Args>
    //@ts-expect-error
    Returns: Replace<Functions[T]['Row'], Returns>
  }
>
