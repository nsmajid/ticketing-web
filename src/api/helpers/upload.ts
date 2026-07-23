export type FormDataPrimitive = string | number | boolean

export type FormDataValue = FormDataPrimitive | Blob | File | null | undefined

export type FormDataObject = Record<string, FormDataValue | FormDataValue[]>

/**
 * Creates a FormData instance from a plain object.
 */
export function createFormData(data: FormDataObject): FormData {
  const formData = new FormData()

  for (const [key, value] of Object.entries(data)) {
    appendFormData(formData, key, value)
  }

  return formData
}

/**
 * Appends a value to FormData.
 */
export function appendFormData(
  formData: FormData,
  key: string,
  value: FormDataValue | FormDataValue[],
): void {
  if (value === null || value === undefined) {
    return
  }

  if (Array.isArray(value)) {
    value.forEach((item) => {
      appendFormData(formData, key, item)
    })

    return
  }

  if (value instanceof Blob) {
    formData.append(key, value)

    return
  }

  formData.append(key, String(value))
}
