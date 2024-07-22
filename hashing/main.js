class HashMap {
  constructor(size = 16) {
    this.buckets = new Array(size)
    this.size = size
  }
  hash(key) {
    let hashCode = 0

    const primeNumber = 31
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i)
      hashCode = hashCode % this.size
    }

    return hashCode
  }
  set(key, value) {
    let index = this.hash(key)
    this.buckets[index] = []
    this.buckets[index].push([key, value])
  }
  get(key) {
    let index = this.hash(key)
    if (!this.buckets[index]) return null
    else return this.buckets[index][0][1]
  }
  has(key) {
    let index = this.hash(key)
    if (!this.buckets[index]) return false
    else return true
  }
  remove(key) {
    let index = this.hash(key)
    if (!this.buckets[index]) return false
    else {
      delete this.buckets[index]
    }
  }
  length() {
    let size = 0
    this.buckets.map((item) => {
      if (item) size += 1
    })
    return size
  }
  clear() {
    this.buckets = new Array(this.size)
  }
  keys() {
    let keysAraay = []
    this.buckets.map((item) => {
      keysAraay.push(item[0][0])
    })
    return keysAraay
  }
  values() {
    let keysAraay = []
    this.buckets.map((item) => {
      keysAraay.push(item[0][1])
    })
    return keysAraay
  }
  entries() {
    let keysAraay = []
    this.buckets.map((item) => {
      keysAraay.push(item[0])
    })
    return keysAraay
  }
}

const test = new HashMap() // or HashMap() if using a factory
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
console.log(test.get('apple'))
