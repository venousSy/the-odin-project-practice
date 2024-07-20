class nood {
  constructor(data = null, next = null) {
    this.data = data
    this.next = next
  }
}

class linkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  //   insert nood at the very first of the list
  insertFirst(data) {
    this.head = new nood(data, this.head)
    this.size = this.size + 1
  }
  //   pop removes the last element from the list
  pop() {
    let current = this.head
    let temp = this.head
    while (current.next != null) {
      current = current.next
      if (current.next != null) {
        temp = temp.next
      }
    }
    temp.next = null
  }

  //   adds a new node containing value to the end of the list

  append(data) {
    let current = this.head
    while (current.next != null) {
      current = current.next
    }
    this.size = this.size + 1
    current.next = new nood(data)
  }
  //   return the  last node in the list
  tail() {
    let current = this.head
    while (current.next != null) {
      current = current.next
    }
    return current
  }
  // at(index) returns the node at the given index
  at(index) {
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    return current
  }

  // print data of the list
  printListData() {
    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}
