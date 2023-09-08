

class maxBinaryHeap{
    constructor(){
        this.values = []
    }

    insert(value){
        this.values.push(value)
        if(this.values.length==1)return this.values

        let index = this.values.length-1
        let parentIndex = Math.floor((index-1)/2)
        while(this.values[parentIndex]<this.values[index]){
            if(this.values[parentIndex]>this.values[index]) break;

            let temp = this.values[parentIndex]
            this.values[parentIndex] = this.values[index]
            this.values[index] = temp 
            index = parentIndex
            parentIndex = Math.floor((index-1)/2)
        }
        return this.values
    }
    
}

let maxHeap = new maxBinaryHeap()
maxHeap.insert(41)
maxHeap.insert(39)
maxHeap.insert(33)
maxHeap.insert(18)
maxHeap.insert(27)
maxHeap.insert(12)
maxHeap.insert(55)
maxHeap.insert(1)
maxHeap.insert(45)
console.log(maxHeap)