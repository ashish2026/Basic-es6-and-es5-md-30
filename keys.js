const glass = {
          name: 'glass',
          color: 'golden',
          price: 12,
          isCleaned: true
}
console.log(glass)
const keys = Object.keys(glass)
// [ 'name', 'color', 'price', 'isCleaned' ];

const values = Object.values(glass)
console.log(keys)
console.log(values)

const entries = Object.entries(glass)
//  [
//   [ 'name', 'glass' ],
//   [ 'color', 'golden' ],
//   [ 'price', 12 ],
//   [ 'isCleaned', true ]
//  ]
console.log(entries)

// delete glass.isCleaned;

// freeze
// Object.freeze(glass)
Object.source = 'Bangladesh'
console.log(glass)