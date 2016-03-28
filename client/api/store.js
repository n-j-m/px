const storeKey = 'px_store'
let cache = {}

function persist() {
  localStorage.setItem(storeKey, JSON.stringify(cache))
}

function load() {
  const data = localStorage.getItem(storeKey)
  if (data) {
    cache = JSON.parse(data)
  }
}

function clone(value) {
  if (typeof value === 'string') {
    return value
  }
  return Object.assign({}, value)
}

load()

export default {
  get(key) {
    if (typeof key !== 'undefined') {
      const value = cache[key]
      return value ? clone(value) : null
    }
    return clone(cache)
  },

  set(key, value) {
    cache[key] = clone(value)
    persist()
    return value
  },

  del(key) {
    const oldValue = clone(cache[key])
    delete cache[key]
    persist()
    return oldValue
  }
}