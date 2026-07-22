/**
 * --------------------------------------------------------------------------
 * Primitive
 * --------------------------------------------------------------------------
 */

export type ID = number

export type UUID = string

export type Timestamp = string

/**
 * --------------------------------------------------------------------------
 * Generic Utility
 * --------------------------------------------------------------------------
 */

export type Nullable<T> = T | null

export type Optional<T> = T | undefined

export type ValueOf<T> = T[keyof T]

/**
 * --------------------------------------------------------------------------
 * Key Value
 * --------------------------------------------------------------------------
 */

export interface KeyValue<T = string> {
  key: string

  value: T
}

/**
 * --------------------------------------------------------------------------
 * Option
 * --------------------------------------------------------------------------
 */

export interface Option<T = string | number> {
  label: string

  value: T

  disabled?: boolean
}

/**
 * --------------------------------------------------------------------------
 * Sort
 * --------------------------------------------------------------------------
 */

export type SortDirection = 'asc' | 'desc'

/**
 * --------------------------------------------------------------------------
 * Audit
 * --------------------------------------------------------------------------
 */

export interface Timestampable {
  createdAt: Timestamp

  updatedAt: Timestamp

  deletedAt?: Nullable<Timestamp>
}

export interface Blameable {
  createdBy?: Nullable<ID>

  updatedBy?: Nullable<ID>
}
