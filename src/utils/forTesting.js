const palindrome = (string) => {
  if (string === '' || typeof string === 'undefined') return false

  return string.split('').reverse().join('')
}

const average = (arr) => {
  if (!arr || !arr.length) return 0

  let sum = 0
  arr.forEach((n) => {
    sum += n
  })
  return sum / arr.length
}

module.exports = {
  average,
  palindrome
}
