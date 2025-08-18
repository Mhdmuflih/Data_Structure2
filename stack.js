

// class LinkedListStack {
//     constructor() {
//         this.list = new LinkedList()
//     }

//     push(value){
//         this.list.prepend(value)
//     }

//     pop(){
//         this.list.remove()
//     }

//     peek(){
//         return this.head.value
//     }

//     isEmpty(){
//         return this.list.isEmpty()
//     }

//     getSize(){
//         return this.list.getSize()
//     }

//     print(){
//         return this.list.print()
//     }
// }

// const stack = new LinkedList();

// console.log(stack.isEmpty());

// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// console.log(stack.getSize());

// stack.print();




// sort of stack
// ---------------------------------

// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         return this.items.pop();
//     }

//     peek() {
//         return this.items[this.items.length - 1];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     print() {
//         console.log(this.items);
//     }
    
//     sort() {
//         const tempStack = [];

//         while (!this.isEmpty()) {
//             let temp = this.pop();

//             // Move elements from tempStack back to original stack if they are greater than temp
//             while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
//                 this.push(tempStack.pop());
//             }

//             tempStack.push(temp);
//         }

//         // Optional: copy back to original stack
//         while (tempStack.length > 0) {
//             this.push(tempStack.pop());
//         }
//     }
// }

// // Example usage
// const stack = new Stack();
// stack.push(30);
// stack.push(10);
// stack.push(50);
// stack.push(20);
// stack.print();  // Before sort

// stack.sort();
// stack.print();  // After sort (ascending order)



// remove a index value 
// ---------------------------------

// class Stack {
//     constructor() {
//         this.item = [];
//     }

//     push(element) {
//         this.item.push(element);
//     }

//     pop() {
//         return this.item.pop();
//     }

//     isEmpty() {
//         return this.item.length === 0;
//     }

//     getSize() {
//         return this.item.length;
//     }

//     peek() {
//         if (!this.isEmpty()) {
//             return this.item[this.item.length - 1];
//         }
//         return null;
//     }

//     print() {
//         console.log(this.item);
//     }

//     removeAt(indexToRemove) {
//         if (indexToRemove < 0 || indexToRemove >= this.item.length) {
//             console.log("Invalid index");
//             return;
//         }

//         const tempStack = [];

//         // Pop items until we reach the index to remove
//         while (this.item.length - 1 > indexToRemove) {
//             tempStack.push(this.pop());
//         }

//         // Remove the target element
//         this.pop();

//         // Push elements back into original stack
//         while (tempStack.length > 0) {
//             this.push(tempStack.pop());
//         }
//     }
// }

// // Example usage
// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// stack.print(); // [10, 20, 30, 40, 50]

// stack.removeAt(2); // Remove value at index 2 (value 30)
// stack.print(); // [10, 20, 40, 50]
