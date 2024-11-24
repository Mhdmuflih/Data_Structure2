// Bubble Sort a Array
// ---------------------------
// function BubbleSort(array){
//     let swapped;
//     do{
//         swapped = false
//         for(let i=0 ; i<array.length - 1 ; i++){
//             if(array[i]>array[i+1]){
//                 let temp = array[i];
//                 array[i] = array[i+1]
//                 array[i+1] = temp
//                 swapped = true
//             }
//         }
//     }while(swapped)
//     return array
// }

// const array = [8,4,-6,20,-2]
// console.log(BubbleSort(array))

// Time Complexity = Big-O = O(n^2)

// ==============================================================================

// Insert Sort a Array
// ---------------------------

// function InserSort(arr){
//     for(let i=1 ; i<arr.length ; i++){
//         let numbertoInsert = arr[i]
//         let j = i - 1
//         while( j>=0 && arr[j]>numbertoInsert ){
//             arr[j+1] = arr[j]
//             j = j - 1
//         }
//         arr[j+1] = numbertoInsert
//     }
//     return arr
// }

// let arr = [10,4,6,3,7,-2]
// console.log("array: ", arr);
// InserSort(arr)
// console.log("insert Sort:", arr);

// Time Complexity = Big-O = O(n^2)


// ==============================================================================

// Quick Short in a Array
// ---------------------------

// function QuickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];
//     for(let i=0 ; i<arr.length - 1 ; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i]);
//         }
//     }
//     return [...QuickSort(left),pivot,...QuickSort(right)]
// }

// const arr = [8,20,4,-2,-6]
// console.log(QuickSort(arr));


// ==============================================================================

// Merge Sort in a Array
// ---------------------------
// function MergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     const mid = Math.floor(arr.length / 2)
//     const leftArr = arr.slice(0,mid);
//     const rightArr = arr.slice(mid);

//     return Merge(MergeSort(leftArr),MergeSort(rightArr))
// }

// function Merge(leftArr,rightArr){
//     let sortedArray = []
//     while (leftArr.length && rightArr.length){
//         if(leftArr[0]<=rightArr[0]){
//             sortedArray.push(leftArr.shift());
//         }else{
//             sortedArray.push(rightArr.shift());
//         }
//     }
//     return [...sortedArray,...leftArr,...rightArr]

// }

// const arr = 7
// console.log(MergeSort(arr));

// Time Complexity = Big-O = O(nlogn)


// ==============================================================================

// selection Sort
// -------------------------
// function SelectionSort(arr) {
//     for(let i=0 ; i<arr.length - 1 ; i++) {
//         for(let j=i+1 ; j<arr.length ; j++) {
//             if(arr[j] < arr[i]) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// let arr = [20,6,-6,4,-2];
// console.log(SelectionSort(arr));

// ==============================================================================


