 

const deleteNode = function(node) {
    let removed = node;
    let next = node.next;
    let temp = removed.val;
    removed.val = next.val
    removed.next = next.next;
    next.val = temp;
    
    next.next = null;
    next.val = temp;
   
    
};