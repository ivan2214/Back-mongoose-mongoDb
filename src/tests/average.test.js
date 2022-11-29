const { average } = require('../utils/forTesting')

describe('Average', () => {
  test('of one value is the value itself', () => {
    expect(average([1])).toBe(1)
  })
  test('should of mani calculate saccsefuls ', () => {
    expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5)
  })
  test('should empty array is zero', () => {
    expect(average([])).toBe(0)
  })
  test('should empty is zero', () => {
    expect(average()).toBe(0)
  })
})
