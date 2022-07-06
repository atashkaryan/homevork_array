

// Tnayin handznararutyunner

// ex.1
// function foo(operand1,operator,operand2){
// return "[oprd1] [opr] [oprd2]"
// }


// console.log(foo());

// ex.2
// let obj = {
//     name : "david",
// } 
// obj.surName = "Atashkaryan";
// obj['fullName']= 'davidatashkaryan'

// Object.defineProperty(obj,"age",{
//     value: 25,
//     enumerable: true,
//     configurable: true
// })

// console.log(obj);


//  ex.3

// function getOddElem(arr){
    
//     for ( let i =0;i<arr.length;i++){
//         if(arr[i]===arr[i+1]){
//             continue
//         }else if(arr[i]===arr[i+2]){
//             return arr[i+1]
//         }
//         return arr[i]
   
//     }
// }
// console.log(getOddElem(["b", "a", "a", "a"] ));

// ex. 4

// function getSmollAndBig(arr){
//     let min = Infinity
//     let max = -Infinity
//     for(let el of arr){
//         if(el>max){
//             max = el 
//         }
//         if(el<min){
//             min = el
//         }
//     }
//     return [min,max]
// }
// console.log(getSmollAndBig([1,2,5,3,4,5,6,7,8,9]));

// ex. 5

// function oddEven(arr){
//     let odd = [];
//     let even =[];
//     for(let el of arr){
//         el%2?odd.push(el):even.push(el)
//     }
//     return [odd,even]
// }
// console.log(oddEven([7,8,5,4,5,6,3,1,12,9,3,4]));

// ex. 6
// function removeDuplicateElems(arr){
//   let res = [];
//   let obj = {};
//   for(let el of arr){
//     if(obj[el]===undefined){
//         obj[el]= 0
//     }
//     else{
//         obj[el]++
//     }   
//   }
//   for(let key in obj){
//     if(!obj[key]){
//         res.push(key)
//     }
//   }
//   return res
// }
//  console.log(removeDuplicateElems([1,1, 1, 2, 3, 3, 4, 4, 5]));


// ex. 7
// function CommonWord(arr1,arr2){
//     let res = []
// for(let el of arr1){
//    if( arr2.includes(el)){
//     res.push(el)
//    }
// }
// return res
// }

// console.log(CommonWord( ["dog", "cat", "parrot"] , ["lizard", "rat", "cat"]));


// ex. 8
// function samOrNot(arr1,arr2){
//     if(arr1.length!==arr2.length){
//         return false
//     }
//     for(let el of arr1){
//         if (!arr2.includes(el)) {
//             return false
//         }
//     }
//     return true

// }

// console.log(samOrNot(["monday", "tuesday"], ["tuesday","monday"]));


// ex. 9

// function newArray(arr){
//     let res = [];
//     for(let el of arr){
//         if(typeof(el)=== "number"){
//             res.unshift(el)
//         }
//         else{
//             res.push(el)
//         }
//     }
//     return res

// }
// console.log(newArray(["b", 6, "a", "q", 7, 2]));

// ex.10
// function getElemsBaseIndexes(weekdays,indexes){
//     let res = []
//     for(let i = 0;i<indexes.length;i++){
//         res.push(weekdays[indexes[i]])
//     }
//     return res

// }
// console.log(getElemsBaseIndexes(["mon", "tue", "wed", "thur", "fri"], [1, 3, 4]));


// ex. 11
// function revers(str){
//     str = str.split("")
// for(let i = 0; i<(str.length-1)/2;i++){
//     let el = str[i];
//     str[i]=str[str.length-1-i];
//     str[str.length-1-i]= el
// }
// return str
// }
// console.log(revers("barev"));

// ex.12*

// function foo (lookup, strings){
//     let res = [];
//     for(let i = 0;i<lookup.length;i++){
//         let count = 0;
//         for(let j=0;j<strings.length;j++){
//             if(lookup[i]===strings[j]){
//                 count++
//             }
            
//         }
//         // res.push(count);
//         res[i] = count;
//     }
//     return res
// }
// console.log(foo(['i', 'love', 'sadakhlo', 'esminich'],
//  ['i', 'i', 'sadakhlo', 'i']
// ));


// ex. 13*
// function sumOfMaxAndMin(arr){
//     let obj = {};
//     let max = -Infinity;
//     let min = Infinity;
//     let sum = 0;
//     for(let el of arr){
//         if(el > max){
//             max = el;
//         }
//         if(el < min){
//             min = el; 
//         }
//         sum +=el;
//     }
    
//     obj.min = sum - max;
//     obj.max = sum - min;
//     return obj
// } 

// console.log(sumOfMaxAndMin([1,2,3,4]));


// ex.14*
// function getUnrepeatableElems(Array){
//     for(let i =0;i<Array.length;i++){
//         for(let j = i+1;j<Array.length;j++){
//             if(Array[i]===Array[j]){
//                 Array.splice(j,1);
//                 Array.splice(i,1);

//                 i--;
//                 break;
//             }
//         }
//     }
//     return Array
// }
// console.log(getUnrepeatableElems([1,2,2,1,3,4,4,3,5]));



// ex.15*
// function sumOfDiaganal(matrix){
//     let rigthSum = 0;
//     let root = Math.sqrt(matrix.length)
// for(let i = 0; i < matrix.length; i += root+1){
//     rigthSum += matrix[i]
// }
// return rigthSum
// }
// console.log(sumOfDiaganal([ 1, 2, 3, 4,
//                             5, 6, 7, 8,
//                             9, 10, 11, 12,
//                             13, 14, 15, 16]));



// classroom.

// const payments = [
//     {
//       studentId: 1, // Unique identifier for each student
//       studentName: "John Doe", // Name of the student
//       payedAmount: 1600, // Amount payed with this transaction
//       year: 2020, // The payment year
//     },
//     {
//       studentId: 1, // Unique for each student
//       studentName: "John Doe",
//       payedAmount: 1500,
//       year: 2021
//     },
//     {
//       studentId: 1, // Unique for each student
//       studentName: "John Doe",
//       payedAmount: 1400,
//       year: 2022
//     },
//     {
//       studentId: 1, // Unique for each student
//       studentName: "John Doe",
//       payedAmount: 1300,
//       year: 2023
//     },
//     {
//       studentId: 2, // Unique for each student
//       studentName: "Lu Kang",
//       payedAmount: 1500,
//       year: 2020
//     },
//     {
//       studentId: 2, // Unique for each student
//       studentName: "Lu Kang",
//       payedAmount: 1400,
//       year: 2021
//     },
//     {
//       studentId: 2, // Unique for each student
//       studentName: "Lu Kang",
//       payedAmount: 1300,
//       year: 2023
//     },
//     {
//       studentId: 2, // Unique for each student
//       studentName: "Lu Kang",
//       payedAmount: 1200,
//       year: 2023
//     }
//    ];
   

//    ex. 8 
// function findMaxPayment(payments){
//     let max = -Infinity
//     for(let obj of payments){
//         if(obj.payedAmount >max ){
//             max= obj.payedAmount
//         }
//     }
//     return max
// }

// console.log(findMaxPayment(payments))

//  ex.9

// function sumPayments(payments){
//     let sum = 0;
// for(let obj of payments){
//     sum = sum + obj.payedAmount
// }
// return sum
// }

// console.log( sumPayments(payments));

// ex.10
// function countAll(payments){
//     let count = 0;
//     for(let obj of payments){
//         if(obj.payedAmount>1500){
//             count++
//         }
//     }
//     return count
// }

// console.log( countAll(payments))

// ex.11
// function averageOfAllPayments(payments){
//     let sum = 0;
// for(let obj of payments){
//     sum= sum + obj.payedAmount
// }
// return sum/payments.length
// }
// console.log(averageOfAllPayments(payments));

// ex.12



// const evaluations = [
//     {
//       studentId: 1, // Unique identifier for each student
//       studentName: "John Doe",
//       courseId: 1, // Unique identifier for each course
//       courseName: "JS Bootcamp",
//       score: 70
//     },
//     {
//       studentId: 1, // Unique identifier for each student
//       studentName: "John Doe",
//       courseId: 2, // Unique identifier for each course
//       courseName: "JS Level 0",
//       score: 60
//     },
//     {
//       studentId: 1, // Unique identifier for each student
//       studentName: "John Doe",
//       courseId: 3, // Unique identifier for each course
//       courseName: "JS Level 1",
//       score: 50
//     },
//     {
//       studentId: 2, // Unique identifier for each student
//       studentName: "Tom Colins",
//       courseId: 1, // Unique identifier for each course
//       courseName: "JS Bootcamp",
//       score: 60
//     },
//     {
//       studentId: 2, // Unique identifier for each student
//       studentName: "Tom Colins",
//       courseId: 2, // Unique identifier for each course
//       courseName: "JS Level 0",
//       score: 50
//     },
//     {
//       studentId: 2, // Unique identifier for each student
//       studentName: "Tom Colins",
//       courseId: 3, // Unique identifier for each course
//       courseName: "JS Level 1",
//       score: 40
//     },
//     {
//       studentId: 3, // Unique identifier for each student
//       studentName: "Sarah Conor",
//       courseId: 1, // Unique identifier for each course
//       courseName: "JS Bootcamp",
//       score: 45
//     },
//     {
//       studentId: 3, // Unique identifier for each student
//       studentName: "Sarah Conor",
//       courseId: 2, // Unique identifier for each course
//       courseName: "JS Level 0",
//       score: 35
//     },
//     {
//       studentId: 3, // Unique identifier for each student
//       studentName: "Sarah Conor",
//       courseId: 3, // Unique identifier for each course
//       courseName: "JS Level 1",
//       score: 25
//     }
//    ];

//    {
//     jsbootcamp: 78,
//     jslevel1: 12,
//     jslevel2: 34
//    }
  
//    ex.13
// function minScoure(students){
//     let min = Infinity
// for(let obj of students){
// if(obj.score<min){
//     min= obj.score
// }
// }
// return min
// }
// console.log(minScoure(evaluations));

// ex.14
// function NameIsMinScoure(students){
//     // let min = Infinity;
//     let min = [Infinity, null];
//     for(let obj of students){
//     if(obj.score<min[0]){
//         min[0]= obj.score
//         min[1] = obj.studentName
//     }

//     }
//     return min[1]
    
// }

// console.log(NameIsMinScoure(evaluations));

// ex.15
// function arrayOfStudentsMoreThan60(students){
// let arr = students.filter( student => {
//     return student.score > 60
// })
//     return arr
// }

// console.log(arrayOfStudentsMoreThan60(evaluations));

//  ex.16

// function  lessThan40(students){
//     let arr =[]
//     for(let student of students){
//        if(student.score < 40){
//         arr.push(student)
//        } 
       
//     }
//     return arr
// }


// console.log(lessThan40(evaluations));


// function arrayOfCoursesAverage(students){
//     let res = {};
//     for(let student of students){
//         res[student.courseName]= null
//     }
//     return res
// }
  

// console.log(arrayOfCoursesAverage(evaluations));




// ex.17
// function arrayOfCoursesAverage(students){
//         let res = {};
//         for(let student of students){
//             if(res[student.courseName]===undefined){
//                 res[student.courseName]=[student.score, 1]
               
//             }
//             else{
//                 res[student.courseName][0] += student.score 
//                 res[student.courseName][1]++;
//             }
//         }
    
//         for(let key in res){
//             res[key] = res[key][0] / res[key][1]
//         }
//         return res
//     }
      
    
//     console.log(arrayOfCoursesAverage(evaluations));


// function global(){
// let count = 0;
// return function generator(){
//     return () => ++ count 
// }

// }
// let gen = global()

// gen()
// let c1 = gen()

// console.log(c1);


// clojer

// /////////////
// add()1
// add()2
// sub() 1
// sub() 0

// rekursyaov rey ba





// function foo (a){
//     return function f(n){
//         return Math.pow(n,a)
//     }
// }
// let qarakusi = foo(2);
// let xoranard = foo(3);
// console.log(qarakusi(5));
// console.log(xoranard(3));

// function global(){
// let a = 0 ;
//    return function (bul){
    
//         return function (){
//          if(bul){
//              return ++a
//          }else return --a
     
//          }
//      }
// }

// let calc = global()
 
// let add = calc(true)
// let sub = calc(false)

// console.log(add());
// console.log(add());
// console.log(sub());
// console.log(add());

// function global() {

// function recurs(arr){
//     let res = [];
//      for(let i = 0;i<arr.length;i++){
//         if(typeof(arr[i])!=="number"){
//            res = res.concat(recurs(arr[i]))
//      }
//      else{
//         console.log(res);
//         res.push(arr[i])
//      }
//      }
//      return res
     
    
// }

// console.log(recurs([2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0]));



// function func(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			// элемент - массив
// 		} else {
// 			// элемент - примитив
// 			console.log(elem);
// 		}
// 	}
// }

// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);




// function func(arr) {
// 	let sum = "";
	
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			sum += func(elem);
// 		} else {
//             console.log(sum);
// 			sum += elem;
// 		}
// 	}
	
// 	return sum;
// }

// console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));


// try to implement the same by using Object.defineProperty




// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// gorcnakani xndirner

// const obj1 = {};

//  obj1.a = 1;

// // // Solved

// let obj = {
//    name:"Vazgen"
// }

// Object.defineProperty(obj,"b",{
//     value:"1",
   // writable: false,  ches karoxanum poxe;
//    enumerable: true, ches karoxanum cikl fral
//    configurable: true, ches karoxanum mejic jnjel
// })

// console.log(obj);
//  console.log( Object.getOwnPropertyDescriptors(obj) );
// console.log( Object.getOwnPropertyDescriptors(obj1) );



// let obj = {
//    name:" hayk"
// }


// function foo (obj,key,value){
// let descripotrs = Object.getOwnPropertyDescriptor(obj,key);
// if( descripotrs&&descripotrs.writable){
//    obj[key] = value
//    return true
// }else{
//     return false

// }

// }

// console.log(foo(obj,"name","Anun"));
// console.log(obj);






// let obj = {
//     name:"hayk",
//     age: 26
// }

// function foo (obj){
//     return Object.keys(obj)
// }

// console.log(foo(obj));


// let obj = {
//     name: "vlad",
//     age: "25",

// }
// function entries(){
//    let  arr = [];
//     for(let key in obj){
//         const value = obj[key]
//       arr.push([key,value])  
//     }
//     return arr

// }
// console.log(entries(obj));



// function klon(obj1,obj2){
//    return Object.assign(obj2,obj1)
// }
// let obj1 = {
//     name: "dav",
//     age: "25"
// }
// let obj2 = {}



// console.log(klon(obj1,obj2));

// let n = 12
// n = n++;
// n = n++;
// console.log(n);

// function rediucer(arr,colbeck,naxord){
//    let akumlyator = (naxord===undefined)? 0: naxord
//    for(let i =0;i<arr.length;i++){
//       akumlyator = colbeck(akumlyator,arr[i])
//    }
//    return akumlyator
   
// }
// const arr = [1,2,3,4]
// const sum = (a,b)=>{
//    return a+b
// }
// console.log(rediucer(arr,sum,5));



// let arr1= [1,2,3,4,5,6];
// let arr2 = [4,5,6,7,8,9]
//  let res = [];
// function concat (arr1,arr2){
// for(let el in arr1){
//     res.push(arr1[el]) 
// }
// for(let item in arr2){
//     res.push(arr2[item])
//    } 
// return res

// }

// console.log(concat(arr1,arr2));


// function recurs(arr){
//     let res = [];
//      for(let i = 0;i<arr.length;i++){
//         if(typeof(arr[i])!=="number"){
//            res = res.concat(recurs(arr[i]))
//      }
//      else{
//         // console.log(res);
//         res.push(arr[i])
//      }
//      }
//      return res
     
    
// }

// console.log(recurs([2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0]));


// let arr = [1,2,3,4,5,6,7]


// function withi(arr,target,start,end){
// if(target<0){
//    target = target +this.length
// }  
// if(start<0){
//    start = start +arr.length
// } 
//     this.length = end
//   let res = arr.slice(start,end)
//    for(let i = 0;i<res.length;i++){
//       arr[target]= res[i]
//       target++
//       if(target>res.length){
//          break
//       }
//    }
//    return arr

// }


// console.log(withi(arr,2,0,4));
// console.log(arr.copyWithin(2,0,4));


// let arr = [1,2,3,4,5,6,7,8,9]

// function evr(arr){
// for (let el of arr){
// if(el<5){
//    return false
// }else{
//    return true
// }

// }
// }


// console.log(evr([1,2,3,4,5,6,7,8,9]));


// function every(arr,callbeck){
//    for(let i =0;i<arr.length;i++){
//       let conditition = callbeck(arr[i],i,arr);
//       if(!conditition){
//          return false
//       }
//       else return true
//    }
// }

// //////////////////////////////////////////////////
//  tunny grel mapi filtri reduci flati implamentacia
// //////////////////////////////////////////////////






// function reduce(arr,callbeck){
//    const res = [];
//    for (let i =0; i < arr.length; i ++){
      
//        if(nax===undefined){
//          nax=arr[0]
//        }else{
//          res.push(callbeck(arr[i],i,arr))
//        }
//    }

//    return res;
// }


// console.log(reduce([1, 2, 3], (item) => item + 1));




// function reduce(array, callback, el) {
//   let accumulator = (el === undefined) ? 0 : el;

//   for (let i = 0; i < array.length; i++) {
//     accumulator = callback(accumulator, array[i]);
//   }

//   return accumulator;
// }

// let arr = [2, 3, 4];

// let sum = (a, b) => a + b;

// console.log(reduce(arr, sum, 1))


// const studentsArray = [
//    {
//        name: 'Armen',
//        age: 20,
//        gpa: 3,
//        grades: [1,50,30,55,88,100]
//    },
//    {
//        name: 'Anna',
//        age: 28,
//        gpa: 4,
//        grades: [1,3,5,7]
//    },
//    {
//       name: 'Kim',
//        age: 24,
//        gpa: 1,
//        grades: [6,88,5,99]
//    }
// ]







//    function ever(arr,callbeck){
//       for(let i =0;i<arr.length;i++){
//          let conditition = callbeck(arr[i],i,arr);
//          if(!conditition){
//             return false
//          }
//          else return true
//       }
//    }



// console.log(students(studentsArray,));



// function foo(stidents){
//    return stidents.every((item)=>item.gpa>2)
// }
//  console.log(foo(studentsArray,));






// const studentsArray = [
//    {
//        name: 'Armen',
//        age: 20,
//        gpa: 3,
//        grades: [1,50,30,55,88,100]
//    },
//    {
//        name: 'Anna',
//        age: 28,
//        gpa: 4,
//        grades: [1,3,5,7]
//    },
//    {
//       name: 'Kim',
//        age: 24,
//        gpa: 1,
//        grades: [6,88,5,99]
//    }
// ]

// function foo(studentsArray){
// studentsArray.map((obj)=>{
// obj.averagegreads = obj.grades.reduce((n,el)=>n+el)/obj.grades.length
// })
// return studentsArray   
// }


// console.log(foo(studentsArray));


// Array.prototype.mymap = function(callback) {
//    const resultArray = [];
//    for (let index = 0; index < this.length; index++) {
//     resultArray.push(callback(this[index], index, this));
//    }
//    return resultArray;
//   }













  




// function one(item){
//    return item*4;
//   }
//   function map(arr, callback) {
//       const result = [];
//   for (let  i=0; i<arr.length; i++)
//   {
//       result.push(callback(arr[i], i, arr))
//   }
//   return result;
//   }
//   console.log(map ([1,2,3], one))


// /////////////////////////////////////////////////////////////////////////////////


// let obj = {

// }

// Object.defineProperty(obj,"key",{
//    value: "hayk",
//    configurable: false,
//    enumerable:true,
//    writable: true,
   
// })

// console.log(obj);

// console.log( Object.getOwnPropertyDescriptors(obj))

// let obj = {
//    age:25
// }


// function foo(obj,key,value){
//   let descriptor = Object.getOwnPropertyDescriptor(obj,key)
//   if(descriptor.writable){
//    obj[key] = value
//   }else{
//    return false
//   }

// }
// console.log(foo(obj,"name","vlad"));



// function foo (obj,key,value){
// let descripotrs = Object.getOwnPropertyDescriptor(obj,key);
// // if(descripotrs.writable){
// //    obj.name = value
// // }else{
// //     return false

// // }
//    return descripotrs;
// }

// console.log(foo(obj,"name","Anun"));




// let obj = {
//    name:"hrant",
//    age:"25",
//    phone: 985556
// }

// let a = o => Object.entries(o) 
// console.log(a(obj));


// function myEntries(obj){
//    let res = [];
//    for(let key in obj){
//       res.push([key,obj[key]])
//    }
//    return res
// }

// console.log(myEntries(obj) );


// let user1 = {
//    name:"hrant",
//    age:25,
//    phone:58967
// };

// let user2 = {
// name:"aram",
// age:24,
// phone:985746
// };
// let res = {}
// function merging(obj1,obj2){
// return {...obj1,...obj2}

// }

// console.log(merging(user1,user2));




// function klon(obj1,obj2){
//    return Object.assign(obj2,obj1)
// }
// let obj1 = {
//     name: "dav",
//     age: "25"
// }
// let obj2 = {}

// console.log(obj2);

// console.log(klon(obj1,obj2));


// let arr = [1,2,3,4,5,6,7,8,9,10]



// Array.prototype.myCopyWithin = function (target,start=0,end=this.length){
//   let res = [];
  
//   if(target < 0){
//    target = target + this.length;
// }

// if( start < 0){
//    start = start + this.length;
// }
// if( end <0){
//    end = end + this.length;
// }
// if (start > end) {
//    return this;
// }

//   console.log(start);
//   for(let i =0; i<this.length;i++){
//    if(i !== target){
//       res.push(this[i]);
//    } else if(i === target){
//       res.push(this[start]);
//       if (start !== end-1) {
//          start++;
//          target++;
//       }
//    }
//   }
//   return res;
// }


// console.log(arr.myCopyWithin(1, -2, 5));
// console.log(arr.copyWithin(1,-2, 5));


//  let arr = [1,2,3,4,5,6,7]
// function myEvery(arr,callbeck){
// for(let i =0;i<arr.length;i++){
//     let res = callbeck(arr[i],i,arr)
//       if(!res){
//          return false
//       }
//    }
//    return true
// }

// let a = (el)=>{
//   return el>0
// }
// console.log(myEvery(arr,a));

// let arr = [1,2,3,4,5,6,7]

// function myMap(arr,callbeck){
// let res = [];
// for(let i = 0;i<arr.length;i++){
//    res.push(callbeck(arr[i],i,arr))
// }
// return res
// }
// let a =  (el)=>{
//    return el*2
// }
// console.log(myMap(arr,a));


// let arr = [1,2,3,4,5,6,7]

// function myReduce(arr,callback,accumlator=0){
//    for(let i = 0;i<arr.length;i++){
//       accumlator = callback(accumlator,arr[i])
//    }
//    return accumlator
// }

// let a = (el,i)=>{
//    return el+i
// }
// console.log(myReduce(arr,a));

/////////////////////////////////////////////////////////////////////////////////

//tnayin handznararutyunner das 2
//ex.1


// let arr = [1,2,3,4,5,6,7]
// function dubleNumbers(arr){
// return arr.map((el)=>{
// return el*2
// })
// }

// console.log(dubleNumbers(arr));

// ex.2
// let arr = [1,2,3,4,5,6]
// function numbersMakeStrings(callback){
//    let a = "";
//   return arr.map((el)=>{
// return el+a
//    })
// }

// console.log(numbersMakeStrings(arr));


// ex.3 ????????????????????????????????????????????????????????????????????????????????????????????????
// let people = ["john", "JACOB", "jinGleHeimer", "schmidt"]

// function foo(arr){
//    return arr.map(el=> el[0].toUpperCase()+el.slice(1).toLowerCase())
   
// }
// console.log(foo(people));


// let a ="abdjkfGDDGKGD"
// let m = a[0].toUpperCase()

// let b =  a.slice(1)
// console.log(m);
// console.log(b);
// console.log(m+b);




// ex.4
// function namesOnly(arr){
//    let res = []
//    for(let el of arr){
// res.push(el.name)
//    }
//    return res
// }

// console.log(namesOnly([
//    {
//        name: "Angelina Jolie",
//        age: 80
//    },
//    {
//        name: "Eric Jones",
//        age: 2
//    },
//    {
//        name: "Paris Hilton",
//        age: 5
//    },
//    {
//        name: "Kayne West",
//        age: 16
//    },
//    {
//        name: "Bob Ziroll",
//        age: 100
//    }
// ]));

// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"];




// ex.5

// function makeStrings(arr){
//    let res = [];
//     for(let people of arr){
//       if(people.age>18){
//          res.push(`${people.name} can go to The Matrix`)
//       }else{
//          res.push(`${people.name} is under age!!`)
//       }

//     }
//     return res
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));

// ex.6

// let arr = [ 1, -4, 12, 0, -3, 29, -150]

// function sumOfPositivesOnes(arr){
  
//  let count = 0
// for(let el of arr){
//    if(el>0){
//       count += el
//    }
// }

// return count

// }

// console.log(sumOfPositivesOnes(arr));


// ex.7
// const arr = [
//    {
//        name: 'John',
//        age: 13
//    },
//    {
//        name: 'Mark',
//        age: 56,
//    },
//    {
//        name: 'Rachel',
//        age: 45,
//    },
//    {
//        name: 'Nate',
//        age: 67,
//    },
//    {
//        name: 'Jeniffer',
//        age: 65,
//    }
// ];

// function differenceInAge (arr){
   
//    let min = 0
//    let max = 0
//    let count = 0
//  let a = arr.map((el)=>{
//   return  el.age
// })

// max = Math.max(...a)
// min = Math.min(...a)
// count = max-min
// return [min,max,count]

// }

// console.log(differenceInAge(arr));

// ex.8

// const arr = [
//    ['a', 'b', 'c'],

//    ['c', 'd', 'f'],
//    ['d', 'f', 'g'],
// ];

// function foo(arr){
// let res = {}
// for(let i = 0;i<arr.length;i++){
//    for(let j = 0;j<arr[i].length;j++){
//  if(res[arr[i][j]]===undefined){
//    res[arr[i][j]]=1
//  }else{
//    res[arr[i][j]] +=1
//  }
//       }
   
//    }
//    return res
// }


// console.log(foo(arr));


// ex.9

// let arr = [2,2,1,1,1,2,2]

// function bigind(arr){
//    let max = -Infinity;
//    let res;
//    let obj = {};
// for(let el of arr){
// if(obj[el]===undefined){
//    obj[el]= 1
// }else{
//    obj[el]+=1
// }
// }
// for(let key in obj){
// if(obj[key]>max){
//    max = obj[key]
//    res = key;
// }
// }
// return res;
// }

// console.log(bigind(arr));














