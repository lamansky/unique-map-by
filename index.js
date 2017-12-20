'use strict'

const {reconstruct, entries} = require('m-o')
const uniqueIterableBy = require('unique-iterable-by')

module.exports = (map, getValue, options) => reconstruct(map, uniqueIterableBy(entries(map), e => getValue(...e), options))
