# unique-map-by

Filters a Map or Object by testing entry uniqueness with a callback.

(If you merely want a Map/Object with no duplicate values, use the [`unique-map`](https://github.com/lamansky/unique-map-by) module instead.)

Optionally lets you set a numeric limit on total entries in the returned Map/Object.

## Installation

```bash
npm install unique-map-by --save
```

The module exports a single function.

## Usage Example

Let’s say you have a Map with person objects and you only want one person with any given name.

```javascript
const uniqueMapBy = require('unique-map-by')

const map = new Map([
  [1, {name: 'John'}],
  [2, {name: 'John'}],
  [3, {name: 'Stephen'}],
])

const u = uniqueMapBy(map, (key, value) => value.name)
u.size // 2
u.get(1) // {name: 'John'}
u.get(2) // undefined
u.get(3) // {name: 'Stephen'}
```

Although the above example uses the `name` property of the value as the basis for testing uniqueness, you could just as well test a property of the key.

You can use the `limit` argument to cap the number of total entries returned:

```javascript
const u = uniqueMapBy(map, (key, value) => value.name, {limit: 1})
u.size // 1
u.get(1) // {name: 'John'}
u.get(2) // undefined
u.get(3) // undefined
```

The module also works just as well with Objects:

```javascript
const uniqueMapBy = require('unique-map-by')

const obj = {
  1: {name: 'John'},
  2: {name: 'John'},
  3: {name: 'Stephen'},
}

const u = uniqueMapBy(obj, (key, value) => value.name)
u[1] // {name: 'John'}
u[2] // undefined
u[3] // {name: 'Stephen'}
```

## Related Projects

* [deduplicate](https://github.com/lamansky/deduplicate)
* [unique-array-by](https://github.com/lamansky/unique-array-by)
* [unique-iterable](https://github.com/lamansky/unique-iterable)
* [unique-iterable-by](https://github.com/lamansky/unique-iterable-by)
* [unique-map](https://github.com/lamansky/unique-map)
