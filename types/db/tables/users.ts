import type { CustomTable } from '.'

export type CustomUsers = CustomTable<'user', { role: 'user' | 'admin' }>
