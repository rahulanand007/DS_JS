class Node{
    constructor(val){
        this.val = val;
        this.next=null;
        this.prev=null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head =null;
        this.tail =null;
        this.length = 0
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.tail = newNode
            this.head = newNode
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length++
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let poppedNode = this.tail
        if(this.head == this.tail){
            this.head= null
            this.tail =null
        }else{
            this.tail = poppedNode.prev
            this.tail.next=null
            poppedNode.prev = null
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if(!this.head) return undefined;
        let shiftedNode =this.head
        if(this.head== this.tail){
            this.head= null
            this.tail =null
        }else{
            this.head = shiftedNode.next
            this.head.prev = null
            shiftedNode.next = null
        }
        this.length--;
        return shiftedNode;
    }
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode 
        }else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode   
        }
        this.length++;
        return this
    }
    get(index){
        if(index<0 || index>=this.length ) return undefined
        if(index<=(this.length/2)){
            let counter=0
            let current = this.head
            while(counter<index){
                current = current.next
                counter++;
            }
            return current
        }else{
            let counter = this.length-1
            let current = this.tail
            while(counter>index){
                current = current.prev
                counter--;
            }
            return current
        }
    }
    set(index,val){
        let newSet =this.get(index)
        if(newSet){
            newSet.val = val
            return true
        }
        return false
    }
    insert(index,val){
        if(index<0 || index>this.length ) return false
        if(index===0){
            this.unshift(val)  
        }else if(index===this.length){
            this.push(val)
        }else{
            let newNode = new Node(val)
            let current = this.get(index)
            current.prev.next = newNode
            newNode.prev = current.prev
            newNode.next = current
            current.prev= newNode 
            this.length++    
        }
        return true
    }
    remove(index){
        if(index<0 || index>=this.length ) return undefined
        let removed = this.get(index)
        if(index===0){
            this.shift()
        }else if(index==this.length-1){
            this.pop()
        }else{
            let prev =removed.prev
            let next = removed.next
            prev.next =next
            next.prev= prev
            removed.next =null
            removed.prev =null
            this.length--
        }
        return removed
    }

}


let list = new DoublyLinkedList()
list.push(0)
list.push(1)
list.push(2)
list.push(3)
list.push(4)
console.log(list.remove(5))
// console.log(list.insert(5,100))
// console.log(list.set(1,11))
// list.pop()
// list.pop()
// list.pop()
// list.unshift(0)
// console.log(list.get(1))

console.log(list)