 
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
        let current = this.head;
        let prev =null, next;
        while(current !== null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            
        }
        this.head = prev;
        return prev
         
    }
    visitNodes(head){
        if(!this.length) return undefined;
        
        let current = head;
        const visited = [];
        while(current !== null){
            
            visited.push(current.val);
            current = current.next;
            
        } 
        return visited;
    }
    isPalindrome(){
         const datas = this.visitNodes(this.head);         
         
         datas.reverse();
         let i = 0; 
         let current = this.head;
         while(current !== null){
             
             if(datas[i] !== current.val){
                 return false;
             }
             current = current.next;
             i++;
         }
         return true;
          

    }
        
    
}
const sll = new SinglyLinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);
sll.push(5);

 
console.log(sll.isPalindrome())
