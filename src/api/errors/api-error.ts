export interface ValidationErrors {
  [field: string]: string[]
}

export class ApiError extends Error {
  readonly status: number

  readonly code?: string

  readonly errors?: ValidationErrors

  readonly original?: unknown

  constructor(options: {
    message: string
    status: number
    code?: string
    errors?: ValidationErrors
    original?: unknown
  }) {
    super(options.message)

    this.name = 'ApiError'

    this.status = options.status

    this.code = options.code

    this.errors = options.errors

    this.original = options.original
  }
}
