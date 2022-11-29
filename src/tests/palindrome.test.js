const { palindrome } = require('../utils/forTesting')

test('palindrome of midudev', () => {
  const result = palindrome('midudev')

  expect(result).toBe('vedudim')
})

test('palindrome of empity string', () => {
  const result = palindrome('')

  expect(result).toBe(false)
})

test('palindrome of empity undefine', () => {
  const result = palindrome()

  expect(result).toBe(false)
})
