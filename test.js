'use strict'

const assert = require('assert')
const uniqueMapBy = require('.')

describe('uniqueMapBy()', function () {
  it('should return a Map if given a Map', function () {
    assert(uniqueMapBy(new Map(), 0) instanceof Map)
  })

  it('should return an Object if given an Object', function () {
    assert.strictEqual(typeof uniqueMapBy({}, 0), 'object')
  })

  it('should test uniqueness by callback', function () {
    const o = {x: 1}
    const u = uniqueMapBy(new Map([['a', o], ['b', {x: 1}]]), (key, value) => value.x)
    assert.strictEqual(u.size, 1)
    assert.strictEqual(u.get('a'), o)
    assert(!u.has('b'))
  })

  it('should support a limit argument', function () {
    const u = uniqueMapBy(new Map([[1, 1], ['1b', 1], [2, 2], [3, 3]]), (key, value) => value, {limit: 2})
    assert.strictEqual(u.size, 2)
    assert.strictEqual(u.get(1), 1)
    assert.strictEqual(u.get(2), 2)
    assert(!u.has('1b'))
    assert(!u.has(3))
  })
})
