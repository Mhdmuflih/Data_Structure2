// Hash Table Implementaion
// ---------------------------------------
// class HashTable {
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let total = 0;
//         for(let i=0 ; i<key.length ; i++){
//             total += key.charCodeAt(i);
//         }
//         return total % this.size
//     }

//     set(key,value){
//         const index = this.hash(key);
//         this.table[index] = value;
//     }

//     get(key){
//         const index = this.hash(key);
//         return this.table[index]
//     }

//     remove(key){
//         const index = this.hash(key);
//         this.table[index] = undefined;
//     }

//     display(){
//         for(let i=0 ; i<this.table.length ; i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const table = new HashTable(50);

// table.set("name","Manu");
// table.set("age","22");
// table.display();

// console.log("get : ",table.get("name"));

// table.remove("name");

// console.log("second display :");
// table.set("mane","muflih")
// table.display();


// =====================================================================================================


// hashtable chaining
// ----------------------------

// class HashTableChaining {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }

//     hash(key) {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }

//     set(key, value) {
//         const index = this.hash(key);
//         if (!this.table[index]) {
//             this.table[index] = [];
//         }
//         for (let i = 0; i < this.table[index].length; i++) {
//             if (this.table[index][i][0] === key) {
//                 this.table[index][i][1] = value;
//                 return;
//             }
//         }
//         this.table[index].push([key, value]);
//     }

//     get(key) {
//         const index = this.hash(key);
//         const bucket = this.table[index];
//         if (bucket) {
//             for (let i = 0; i < bucket.length; i++) {
//                 if (bucket[i][0] === key) {
//                     return bucket[i][1];
//                 }
//             }
//         }
//         return undefined;
//     }

//     remove(key) {
//         const index = this.hash(key);
//         const bucket = this.table[index];
//         if (bucket) {
//             this.table[index] = bucket.filter(pair => pair[0] !== key);
//         }
//     }

//     display() {
//         this.table.forEach((val, i) => {
//             if (val && val.length > 0) {
//                 console.log(i, val);
//             }
//         });
//     }
// }



// =====================================================================================================

// open addressing 
// -----------------------------

// class HashTableLinearProbing {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }

//     hash(key) {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }

// set(key,value) {
//     let index = this.hash(key);
//     while(this.table[index] && this.table[index] !== key) {
//         if(this.table[index][0] === key) {
//             this.table[index][1] = value;
//             return
//         }
//         index = (index + 1) % this.size;
//     }
//     this.table[index] = [key,value];
// }

//     get(key) {
//         let index = this.hash(key);
//         while (this.table[index]) {
//             if (this.table[index][0] === key) {
//                 return this.table[index][1];
//             }
//             index = (index + 1) % this.size;
//         }
//         return undefined;
//     }

//     remove(key) {
//         let index = this.hash(key);
//         while (this.table[index]) {
//             if (this.table[index][0] === key) {
//                 this.table[index] = null; // use null to mark "deleted"
//                 return;
//             }
//             index = (index + 1) % this.size;
//         }
//     }

//     display() {
//         this.table.forEach((val, i) => {
//             if (val) {
//                 console.log(i, val);
//             }
//         });
//     }
// }



// =====================================================================================================

// double hahing 
// --------------------------

// class HashTableDoubleHashing {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }

//     hash1(key) {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }

//     hash2(key) {
//         return 7 - (this.hash1(key) % 7);
//     }

//     set(key, value) {
//         let index = this.hash1(key);
//         const step = this.hash2(key);

//         while (this.table[index] && this.table[index][0] !== key) {
//             index = (index + step) % this.size;
//         }
//         this.table[index] = [key, value];
//     }

//     get(key) {
//         let index = this.hash1(key);
//         const step = this.hash2(key);

//         while (this.table[index]) {
//             if (this.table[index][0] === key) {
//                 return this.table[index][1];
//             }
//             index = (index + step) % this.size;
//         }
//         return undefined;
//     }

//     remove(key) {
//         let index = this.hash1(key);
//         const step = this.hash2(key);

//         while (this.table[index]) {
//             if (this.table[index][0] === key) {
//                 this.table[index] = null; // mark deleted
//                 return;
//             }
//             index = (index + step) % this.size;
//         }
//     }

//     display() {
//         this.table.forEach((val, i) => {
//             if (val) {
//                 console.log(i, val);
//             }
//         });
//     }
// }
