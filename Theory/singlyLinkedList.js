// It is used when we want to do very frequent operations on head and tail (push and pop) - In array when we push at the start every other index needs to be changed.
//Connected through nodes that point to next node except the last node
//Random access is not allowed

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val, "-----");
      current = current.next;
    }
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head || this.length === 0) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }
  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    let current = this.get(index);
    if (current) {
      current.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if(index<0 || index>this.length) return false;
    if (index == 0) {
      this.unshift(val);
      return true;
    } 
     if (index == (this.length)) {
      this.push(val);
      return true;
    } 

      let newNode = new Node(val);
      let preNode = this.get(index - 1);
      if (preNode) {
        let temp = preNode.next
        preNode.next=newNode
        newNode.next = temp
      }
    this.length++
    return true;
  }
  remove(index){
    if(index<0 || index>this.length) return false;
    if (index == 0) {
      this.shift();
      return true;
    } 
     if (index == (this.length-1)) {
      this.pop();
      return true;
    } 

    let preNode = this.get(index-1)
    let removed = preNode.next
    // let postNode = this.get(index+1)
    preNode.next = removed.next
    this.length--;
    return true
  }

  reverse(){
    let current = this.head
    this.head = this.tail
    this.tail = current
    
    let prev =null;
    let next ;

    for(let i=0;i<this.length ; i++){
        next = current.next
        current.next = prev
        prev = current
        current = next     
    }
    return this
  }


}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
// list.pop();
// list.shift();
// console.log(list.set(4,11))
// list.shift()
// list.unshift(1)
// list.unshift(2)
// list.unshift(3)
// console.log(list.length)
// list.insert(7,11)
// list.remove(6)
list.reverse()
list.traverse();
console.log(list.get(0))
console.log(list)
// console.log(list.length)
