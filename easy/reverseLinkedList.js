 
class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(data){
        // YOUR CODE GOES HERE
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next,prev =null;
        
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
/**
 *  1 -> 2 -> 3 -> 4 -> 5 -> null
 *  1) node.next->null      next(var)2->3->4->5     prev(var) = 1->null     1->null = 2->3->4->5->null
 *  2) node.next->1->null   next(var)3->4->5     prev(var) = 2->1->null     2->1->null = 3->4->5->null
 *  3) node.next->2->1->null    next 4->5      prev(var) = 3->2->1->null    3->2->1->null = 4->5->null
 *  4) node.next->3->2->1->null    next 5->null    prev(var) =  4->3->2->1->null  4->3->2->1->null =5->null
 *  5) node.next->4->3->2->1->null     next->null   prev(var) = 5->-4->3->2->1->null    5->4->3->2->1->null
 *  */ 
   
        }
    return this;
    }
    
}
const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

console.log(list.reverse());