// Queue Implementation
// ---------------------------------------

// class Queue {
//     constructor(){
//         this.items = []
//     }

//     enqueue(element){
//         this.items.push(element);
//     }

//     dequeue(){
//         return this.items.shift();
//     }

//     isEmpty(){
//         return this.items.length === 0;
//     }

//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }
//         return null;
//     }

//     size(){
//         return this.items.length
//     }

//     print(){
//         console.log(this.items.toString());
//     }
// }

// const queue = new Queue();

// console.log(queue.isEmpty());
// console.log(queue.size());

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.print();

// console.log(queue.isEmpty());
// console.log(queue.size());

// queue.dequeue();
// queue.print();


// =====================================================================================================

// Queue Implementation Optimised
// ---------------------------------------
// class Queue {
//     constructor() {
//         this.items = {};
//         this.rear = 0;
//         this.front = 0;
//     }

//     enqueue(element){
//         this.items[this.rear] = element;
//         this.rear++;
//     }

//     dequeue(){
//         const item = this.items[this.front]
//         delete this.items[this.front];
//         this.front++
//         return item
//     }

//     isEmpty(){
//         return this.rear - this.front === 0;
//     }

//     peak(){
//         return this.items[this.front]
//     }

//     size(){
//         return this.rear - this.front
//     }

//     print(){
//         console.log(this.items);
//     }

// }

// const queue = new Queue();

// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(50);
// queue.print();

// queue.dequeue()
// queue.print();

// console.log(queue.peak());
// console.log(queue.size());
// console.log(queue.isEmpty());


// =====================================================================================================

// Circular Queue Implementation
// ---------------------------------------
// class CircularQueue {
//     constructor(capacity){
//         this.items = new Array(capacity)
//         this.capacity = capacity;
//         this.currectLength = 0;
//         this.rear = -1;
//         this.front = -1;
//     }

//     isFull(){
//         return this.currectLength === this.capacity;
//     }

//     isEmpty(){
//         return this.currectLength === 0;
//     }

//     enqueue(element){
//         if(!this.isFull()){
//             this.rear = (this.rear + 1) % this.capacity;
//             this.items[this.rear] = element
//             this.currectLength += 1
//             if(this.front === -1){
//                 this.front = this.rear
//             }
//         }
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return null;
//         }
//         const item = this.items[this.front];
//         this.items[this.front] = null;
//         this.front = (this.front + 1) % this.capacity;
//         this.CircularLength -= 1
//         if(this.isEmpty()){
//             this.front = -1
//             this.rear = -1
//         }
//         return item;
//     }

//     peek(){
//         if(!this.isEmpty()){
//             return this.items[this.front]
//         }
//         return null;
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('this is empty');
//         }else{
//             let i
//             let str = ''
//             for(i=this.front ; i !== this.rear ; i=(i+1) % this.capacity){
//                 str += `${this.items[i]} `
//             }
//             str += this.items[i];
//             console.log(str);
//         }
//     }
// }

// const queue = new CircularQueue(5);

// console.log(queue.isEmpty());
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);

// console.log(queue.isFull());
// queue.print();
// console.log("this is peek",queue.peek());

// console.log("this is dequeue that means delete in first element",queue.dequeue());

// console.log("this is last printing",queue.print());


// =====================================================================================================

// remove Middle element using stack
// ---------------------------------------
// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     push(item) {
//         this.items.push(item);
//     }

//     pop() {
//         if (!this.isEmpty()) {
//             return this.items.pop();
//         }
//         return null;
//     }

//     size() {
//         return this.items.length;
//     }

//     removeMiddle() {
//         const middleIndex = Math.floor(this.size() / 2);
//         this._removeMiddleUtil(middleIndex);
//     }

//     _removeMiddleUtil(currentIndex) {
//         if (currentIndex === 0) {
//             this.pop();
//             return;
//         }

//         const topElement = this.pop();
//         this._removeMiddleUtil(currentIndex - 1);
//         this.push(topElement);
//     }

//     toString() {
//         return this.items.toString();
//     }
// }

// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);

// stack.print();

// stack.remove();

// stack.print()
// stack.remove();
// stack.print();


// // Example Usage
// const stack = new Stack();
// for (let i = 1; i <= 7; i++) {  // Stack will be [1, 2, 3, 4, 5, 6, 7]
//     stack.push(i);
// }

// console.log("Original Stack:", stack.toString());
// stack.removeMiddle();
// console.log("Stack after removing middle element:", stack.toString());


// =====================================================================================================

// Stack using revers a string
// ---------------------------------------
// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     isEmpty(){
//         return this.items.length === 0;
//     }

//     size(){
//         return this.items.length;
//     }

//     push(element){
//         this.items.push(element);
//     }

//     pop(){
//         if(!this.isEmpty()){
//             return this.items.pop();
//         }
//         return null;
//     }

//     print(){
//         console.log(this.items);
//     }

//     reverseString(str){
//         for(let i=0 ; i<str.length ; i++){
//             this.push(str[i])
//         }

//         let reversedStr = '';

//         while(!this.isEmpty()){
//             reversedStr += this.pop();
//         }

//         return reversedStr;
//     }
// }

// const stack = new Stack();

// console.log(stack.isEmpty());
// console.log(stack.size());

// let originalString = "Hello World"
// let reverseStrings = stack.reverseString(originalString);

// console.log("original string:",originalString);
// console.log("reverse strigng:",reverseStrings);


// =====================================================================================================

// Stack using Queue
// ---------------------------------------
// class StackUsingQueue {
//     constructor() {
//         this.queue1 = [];
//         this.queue2 = [];
//     }

//     isEmpty(){
//         return this.queue1.length === 0;
//     }

//     size(){
//         return this.queue1.length;
//     }

//     push(element){
//         this.queue1.push(element);
//     }

//     pop(){
//         if(this.isEmpty()){
//             return null;
//         }

//         while(this.queue1.length > 1){
//             this.queue2.push(this.queue1.shift());
//         }

//         let poppedElement = this.queue1.shift();

//         [this.queue1,this.queue2] = [this.queue2,this.queue1];

//         return poppedElement;
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null;
//         }

//         while(this.queue1.length > 1){
//             this.queue2.push(this.queue1.shift());
//         }

//         let topElement = this.queue1.shift();

//         this.queue2.push(topElement);

//         [this.queue1,this.queue2] = [this.queue2,this.queue1];

//         return topElement
//     }

//     print(){
//         console.log(this.queue1);
//     }
// }

// const stack = new StackUsingQueue();

// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);

// stack.print();

// console.log('this is popped element',stack.pop());
// console.log('this.is top element',stack.peek());

// stack.print()

// =====================================================================================================


// Queue using Stack
// ---------------------------------------
// class QueueUsingStack {
//     constructor() {
//         this.stack1 = [];
//         this.stack2 = [];
//     }

//     isEmpty(){
//         return this.stack1.length === 0 && this.stack2.element === 0;
//     }

//     size(){
//         return this.stack1.length + this.stack2.length;
//     }

//     enqueue(element){
//         this.stack1.push(element);
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return null;
//         }

//         while(this.stack1.length > 0){
//             this.stack2.push(this.stack1.pop())
//         }

//         return this.stack2.pop();
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null;
//         }

//         while(this.stack1.length > 0){
//             this.stack2.push(this.stack1.pop())
//         }

//         return this.stack2[this.stack2.length - 1]
//     }

//     print(){
//         console.log("stack1:" ,this.stack1);
//         console.log("stack2:" ,this.stack2);
//     }
// }

// const queue = new QueueUsingStack();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// console.log("Queue after enqueuing 10, 20, 30:");
// queue.print(); // Output: Stack1: [10, 20, 30], Stack2: []

// console.log("Front element:", queue.peek()); // Output: 10
// console.log("Dequeued element:", queue.dequeue()); // Output: 10

// console.log("Queue after dequeuing the front element:");
// queue.print(); // Output: Stack1: [], Stack2: [30, 20]

// queue.enqueue(40);
// console.log("Queue after enqueuing 40:");
// queue.print(); // Output: Stack1: [40], Stack2: [30, 20]

// console.log("Front element:", queue.peek()); // Output: 20
// console.log("Dequeued element:", queue.dequeue()); // Output: 20

// console.log("Queue after dequeuing the front element:");
// queue.print(); // Output: Stack1: [40], Stack2: [30]


// =====================================================================================================


