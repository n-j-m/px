function getPics() {
  return fetch('/api/pics')
    .then(res => res.json())
}

function getPic(id) {
  return fetch(`/api/pics/${id}`)
    .then(res => res.json())
}

export default {
  getPics,
  getPic
}