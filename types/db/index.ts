/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Replace } from '../utils/replace'
import type { Database } from './schema'
import type { CustomTables } from './tables'

export type PublicDatabase = Database['public']

export type DB = Replace<PublicDatabase, { Tables: CustomTables }>
