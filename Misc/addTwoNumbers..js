
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var addTwoNumbers = function(l1, l2) {
    // Solution I: initiate a stack, and put all the nodes in the linekd list into a stack 
    /*
    var stack1 = []; 
    var stack2 = []; 
    while ( l1.val !== null){
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while ( l2.val !== null){
        stack1.push(l1.val);
        l2 = l2.next;
    }
    */
    
    // Solution II: 
    // Issue -- track the pointer to the start of the result linkedList
    var rollover = 0; 
    var dummyHead = new ListNode(-1);
    var curr = dummyHead; 
    while ( l1 !== null  && l2!== null){
        var sum = l1.val + l2.val  + rollover;
        rollover = (sum >= 10)? 1: 0; 
        curr.next = new ListNode(sum%10);   
        curr = curr.next;        
        l1 = l1.next;
        l2 = l2.next;
    }
    
    if (l1 !== null ){
        while (l1.val !== null || rollover === 1 ){
            sum = l1.val||0 + rollover 
            rollover = (sum>10)? 1: 0; 
            l1.val = sum%10;
            l1 = l1.next;
        }
        tracker.next = l1
        return origin;
    }
    
    
    if (l2 !== null){
        while (l2.val !== null || rollover === 1 ){
            sum = l2.val||0 + rollover 
            rollover = (sum>10)? 1: 0; 
            l2.val = sum%10;
            l2 = l2.next;
        }
        tracker.next = l2
        return origin;
    }
    return origin.next;
};

// function ListNode(val) {
//     var node = {}
//     node.val = val;
//     node.next = null;
//     return node;
// }

// var listA = new ListNode(5);
// var listB = new ListNode(5);
// debugger;
// addTwoNumbers(listA, listB);