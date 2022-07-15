

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



// deepJS.addStudent(311, "Frank",/*paid=*/true);
// deepJS.addStudent(410, "Suzy",/*paid=*/true);
// deepJS.addStudent(709, "Brian",/*paid=*/false);
// deepJS.addStudent(105, "Henry",/*paid=*/false);
// deepJS.addStudent(502, "Mary",/*paid=*/true);
// deepJS.addStudent(664, "Bob",/*paid=*/false);
// deepJS.addStudent(250, "Peter",/*paid=*/true);
// deepJS.addStudent(375, "Sarah",/*paid=*/true);
// deepJS.addStudent(867, "Greg",/*paid=*/false);

// deepJS.enrollStudent(410);
// deepJS.enrollStudent(105);
// deepJS.enrollStudent(664);
// deepJS.enrollStudent(375);

// deepJS.printCurrentEnrollment();
// console.log("----");
// deepJS.enrollPaidStudents();
// console.log("----");
// deepJS.remindUnpaidStudents();

// // ------------------------------------------------------------------------

//  deepJS = {
//  currentEnrollment:  [],
//  studentRecords:  [],



//     addStudent(id,name,paid) {
//        this.studentRecords.push({ id, name, paid, });
//    },

//     enrollStudent(id) {
//        if (!this.currentEnrollment.includes(id)) {
//            this.currentEnrollment.push(id);
//        }
//    },

//     printCurrentEnrollment() {
//        this.printRecords(this.currentEnrollment);
//    },

//     enrollPaidStudents() {
//        this.currentEnrollment = this.paidStudentsToEnroll();
//        this.printCurrentEnrollment();
//    },

//     remindUnpaidStudents() {
//        this.remindUnpaid(this.currentEnrollment);
//    },

//     getStudentFromId(studentId) {
//        return this.studentRecords.find(matchId.bind(this));

//        // *************************

//        function matchId(record) {
//            return (record.id == studentId);
//        }
//    },

//     printRecords(recordIds) {
//        let records = recordIds.map(this.getStudentFromId.bind(this));

//        records.sort(this.sortByNameAsc);

//        records.forEach(this.printRecord);
//    },

//     sortByNameAsc(record1,record2){
//        if (record1.name < record2.name) return -1;
//        else if (record1.name > record2.name) return 1;
//        else return 0;
//    },

//     printRecord(record) {
//        console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
//    },

//    paidStudentsToEnroll() {
//       let recordsToEnroll = this.studentRecords.filter(this.needToEnroll.bind(this));

//       let idsToEnroll = recordsToEnroll.map(this.getStudentId);

//       return [...this.currentEnrollment, ...idsToEnroll];
//   },

//     needToEnroll(record) {
//        return (record.paid && !this.currentEnrollment.includes(record.id));
//    },

//     getStudentId(record) {
//        return record.id;
//    },

//     remindUnpaid(recordIds) {
//        let unpaidIds = recordIds.filter(this.notYetPaid);

//        this.printRecords(unpaidIds);
//    },

//     notYetPaid(studentId) {
//        let record = this.getStudentFromId(studentId);
//        return !record.paid;
//    },
//    remindUnpaidStudents() {

//          },
// }
// ------------------------------------------------
// ---------------------------------------------------------------------------
// -------------------------------------------------------------------------
// ex.1
// const toyota1 = {
//    model: 'Toyota',
//    type: 'Camry',
//    logModel(){
//        console.log(this.model, this.type);
//    }
// }

// const toyota2 = {
//    model: 'Toyota',
//    type: 'Rav4',
  
// }


// let res = toyota1.logModel.bind(toyota2)

// console.log(res());


// ex.2

// const flights = {

//    flights: [],

//    priorityFlights: [],

//    scheduleFlight(flight){
//        this.flights.push(flight);
//    },

//    removeFlight(flight){
//        this.flights = this.flights.filter(flightFilter.bind(flights));
//        function flightFilter(f){
//            if (flight === f){
//                return this.priorityFlights.includes(flight);
//            }
//            return true
//        }
//    },

//    makePriorityFlight(flight){
//        this.priorityFlights.push(flight);
//    }

// }


// flights.scheduleFlight('1');

// flights.makePriorityFlight('1');

// flights.removeFlight('1')

// console.log(flights.flights);


// ex.3

// function CarConstructor(model, year){
//    this.mode = model;
//    this.year = year;
//    return "please call me with new keyword";
// }

// let toyota = new CarConstructor("camry", 2000)

// console.log(toyota);

// ex.4


// const objArr = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }]

// function logName(){
//     console.log(this.name);
// }
// for(let el of objArr){
//    el.logName = logName
   
// }
// console.log(objArr);


// ex.5


// const arrayOfObjectNames = [{ name: '1' }, { name: '2' }, { name: '3' }]

// function logArrayObjectNames(){
//     console.log(this.name);
// }


// arrayOfObjectNames.forEach((el)=>{
//  console.log(logArrayObjectNames.call(el))
// })

// ex.6

// const mappedFunc = arrayOfObjectNames.map( (item) => {
//     let res = function(){
//         console.log(this.name);
//     }.bind(item)
//     return res
// } );

// console.log(mappedFunc);
// mappedFunc.forEach(i => i());



// ex.7

// function CreateCar (id,model,year,color,driveTrain){
//     this.id = id
//     this.model = model
//     this.year = year 
//     this.color = color
//     this.driveTrain  = driveTrain 
// }

// const inventory = {

//     cars: [],

//     addCar(car) {
//         this.cars.push(car)
//     },

//     removeCar(id) {
//        this.cars =  this.cars.filter((car)=>{
//             return car.id!==id
//         })

//     },

//     listCars(){
//         return this.cars
        
//     },
//     listCarsByConditionCallback(conditionCallback){
//     console.log( this.cars.filter(conditionCallback))
//     }

// }

// inventory.addCar(new CreateCar(1, 'Toyota', '1996', 'red', '4x4'));
// inventory.addCar(new CreateCar(2, 'Mercedes', '2000', 'white', 'rear wheel drive'));
// inventory.addCar(new CreateCar(3, 'BMW', '2020', 'black', 'rear wheel drive'));
// inventory.addCar(new CreateCar(4, 'BMW', '2020', 'red', 'rear wheel drive'));
// inventory.addCar(new CreateCar(5, 'BMW', '2020', 'blue', 'rear wheel drive'));
// inventory.addCar(new CreateCar(6, 'BMW', '2020', 'yello', 'rear wheel drive'));
//  inventory.removeCar(2);
//  inventory.listCars();
//  inventory.listCarsByConditionCallback( (car) => car.model === 'BMW' && car.year === '2020' )

// ex.8

// function Song(title,artist){
// this.title = title,
// this.artist = artist

// }

// Song.prototype.play = function (){
//     console.log("pleying "+ this.artist);
// }

// let song1 = new Song("Hayi acher", "Aram asatryan");

// console.log(song1);


// ex.11


// const checkKnow = {
//     surname: 'surname',
//     name: 'checkKnow',
//     foo: {
//         name: 'foo',
//         logName(){
//             console.log(this.surname);
//         }
//     },
//     boo(){
//         const obj = {
//             name: 'boo method',
//             check: () => {
//                 console.log(this.name);
//             }
//         }
//         obj.check();
//     }
// }


// checkKnow.foo.logName();

// checkKnow.boo();
// // 1 depqum tpum e undefinde qani vor logName funkciayi dhisy foo e ev foo i
// // mej chka surname
// // 2 depqum ktpi checkknow qani vor ro funchtion i dhisy checknov objectn e 
// // aysinqn iranic mi makardak vervinn e dra hamar ktpi checknov 




