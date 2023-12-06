'use client'

export const persistence = {
  get: (key) => {
    const data = window.localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  },
  set: (key, value) => {
    const parsedValue = JSON.stringify(value)
    return value ? window.localStorage.setItem(key, parsedValue) : null
  },
  remove: (key) => {
    window.localStorage.removeItem(key)
  }
}