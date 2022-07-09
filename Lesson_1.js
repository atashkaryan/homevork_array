

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

// let arr = [2,2,1,1,1,2,2,3,3]

// function bigind(arr){
//    let b = [];
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


// ex.10

// let arr = [7, 7, 7, 7, 7, 7, 7, 7, 7, 2,2,1,1,1,2,2,3,3, 4, 4, 4, 4, 4]
// let arr = [7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1];

// function foo(arr){
//    let obj = {};
// for(let el of arr){
// if(obj[el]===undefined){
//    obj[el]= [1, el];
// } else{
//    obj[el][0] += 1
// }
// }
// let res = Object.values(obj).sort();
// return res[res.length - 3][1];
// }

// console.log(foo(arr));


// ex.11

// let arr = ["i","love","leetcode","apples"];
// let s = "iloveleetcode"
// function prefixString(s, arr){
//    let str = arr.join("")
//   str= str.slice(0,s.length)
// if(str===s){
//    return true
// }
// }



// console.log(prefixString(s, arr));





// ex.12

// const phoneCountryCodes = {
//    '+374': 'Armenia',
//    '+375': 'Somali',
//    '+376': 'Russia',
//    '+377': 'Hoktemberyan',
// }

// const arrOfObjects = [

//    {
//        name: 'sarah',
//        age: 32,
//        phoneNumber: '+374000000',
//        relation: 'nelly'
//    },
//    {
//        name: 'nelly',
//        age: 11,
//        phoneNumber: '+3750020000',
//        relation: 'sarah'
//    }
// ];

// function Users(name,age,phoneNumber,country,relation){
//    this.name = name;
//    this.age =age;
//    this.phoneNumber= phoneNumber;
//    this.country = country;
//    this.relation = relation
// }


// function foo(phoneCountryCodes, arrOfObjects){
//    let res = [];
//    for(let user of arrOfObjects){
//       for(let code in phoneCountryCodes){
//          if(user.phoneNumber.slice(0,4) === code ){
//             let a = new Users(user.name.toUpperCase(), user.age,user.phoneNumber,phoneCountryCodes[code],user );
//             res.push(a);
//          }
//       }
      
//    }
//    return res
// }

// console.log(foo(phoneCountryCodes, arrOfObjects));

// const arrOfObjects = [

//    {
//        name: 'SARAH',
//        age: 32,
//        phoneNumber: '+374000000',
//        country: 'Armenia',
//        relation: referancetoSarahObject,
//    },
//    {
//        name: 'NELLY',
//        age: 11,
//        phoneNumber: '+3750020000',
//        country: 'Somali',
//        relation: referanceToNellyObject,

//    }
// ];
// ---------------------------------------------------------
