 class node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right= null;
    }
 }

 class BST {
    constructor(){
        this.root = null
    }

    insert(value){
        let newNode = new node(value)
        if(this.root===null){
            this.root = newNode
            return this
        }
        let current = this.root
        while(true){
            if(current.value===value) return undefined
            if(newNode.value<current.value){
                if(current.left===null){
                    current.left = newNode
                    return this
                }else{
                    current = current.left
                }
            }else{
                if(current.right===null){
                    current.right = newNode
                    return this
                }else{
                    current = current.right
                }
            }
        }
    }

    find(value){
        let current = this.root
        while(true){
            if(current.left===null) return false
            if(current.value===value) return current
            if(value<current.value){
                if(current.left.value===value){
                    return current.left
                }else{
                    current = current.left
                } 
            }else{
                if(current.right===null) return false
                if(current.right.value===value){
                    return current.right
                }else{
                    current = current.right
                }
            }

        }
    }


    BFS(){
        let node = this.root
        let queue = []
        let result = []
        queue.push(node)
        while(queue.length){
            node =queue.shift()
            result.push(node.value)
            if(node.left){
                queue.push(node.left)
            }
            if(node.right ){
                queue.push(node.right)
            }
        }
        return result
    }

    DFS_PreOrder(){
        let data = []
        const traverse = (node)=>{
            data.push(node.value)
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
        }
        traverse(this.root)
        return data
    }

    DFS_PostOrder(){
        let data = []
        const traverse = (node)=>{
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
            data.push(node.value)
        }
        traverse(this.root)
        return data
    }

    DFS_InOrder(){
        let data = []
        const traverse = (node)=>{
            if(node.left){
                traverse(node.left)
            }

            data.push(node.value)

            if(node.right){
                traverse(node.right)
            }  
        }
        traverse(this.root)
        return data
    }

 }

 let BST1 = new BST()
 BST1.insert(10)
 BST1.insert(6)
 BST1.insert(3)
 BST1.insert(8)
 BST1.insert(15)
 BST1.insert(20)
//  BST1.insert(16)

//  console.log(BST1.BFS())
 console.log(BST1.DFS_InOrder())