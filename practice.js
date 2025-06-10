
// function Circle(radius) {

//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     };

//     let defaultLocation = { x: 0, y: 0 };

//     Object.defineProperty(this, 'defaultLocation', {
//         get: function () {
//             return defaultLocation;
//         },
//         set: function (value) {
//             if (!value.x || !value.y)
//                 throw new Error('Invalid Location');
//             defaultLocation = value;
//         }
//     })
// }

// const circle = new Circle(10);

// circle.defaultLocation = { x: 0, y: 0 };

// -------------------------------------------------------------

// 1. task

// Public property - username
// Private property - password
// Metode - login
// Object.defineProperty with get and set

// function User(userName, password) {
//     this.name = userName;
//     let _password = password;

//     Object.defineProperty(this, 'password', {
//         get: function () {
//             return "********";
//         },
//         set: function (value) {
//             if (value.length < 6) { throw new Error('Password too short.') }
//             _password = value;
//         }
//     });

//     this.login = function (passCheck) {
//         if (passCheck === _password) return 'Access granted';
//         return 'Access denied';
//     }

// }

// const user1 = new User('Mark', 'tajna123');

// user1.password = 'nova123';

// console.log(user1.password);

// console.log(user1.login('tajna123'));


// -------------------------------------------------------------


// 2. task - number of logs


// function User(userName, password) {
//     this.name = userName;
//     let _password = password;
//     let _attempts = 0;
//     let _locked = false;

//     Object.defineProperty(this, 'password', {
//         get: function () {
//             return "********";
//         },
//         set: function (value) {
//             if (value.length < 6) { throw new Error('Password too short.') }
//             _password = value;
//         }
//     });

//     this.login = function (passCheck) {

//         if (_locked) {
//             return 'Account locked';
//         }

//         if (passCheck === _password) {
//             _attempts = 0;
//             return 'Access granted'
//         }

//         if (_attempts < 3) {
//             _attempts++;
//             if (_attempts === 3) {
//                 _locked = true;
//                 return `Access denied ${_attempts}. time - Account locked.`;
//             }
//             return `Access denied ${_attempts}. time.`;
//         }

//     }

// }

// const user1 = new User('Mark', 'tajna123');

// user1.password = 'nova123';

// console.log(user1.password);

// console.log(user1.login('tajna123'));
// console.log(user1.login('tajna123'));
// console.log(user1.login('nova123'));
// console.log(user1.login('nova1234'));
// console.log(user1.login('nova1234'));
// console.log(user1.login('nova1234'));
// console.log(user1.login('nova123'));
// console.log(user1.login('nova123'));


// 3. tast - 

// setInterval, setTimeout and clearInterval

let ids = setInterval(() => {
    console.log('Radi...');
}, 1000);

setTimeout(() => {
    clearInterval(ids);
    console.log('Zaustavljeno!');
}, 5000);

// ----------------------------------

let count = 1;

let id = setInterval(() => {
    console.log(count);
    count++;
    if (count > 5) clearInterval(id);
}, 1000);

// ----------------------------------

let count2 = 1;

let id2 = setInterval(() => {
    console.log(count);
    count++;
    if (count > 5) clearInterval(id2);
}, 1000);

setTimeout(() => {
    clearInterval(id2);
    console.log('Zaustavljeno');
}, 5000);




// function CountdownTimer(seconds) {
//     this.start =
// }



// const timer = new CountdownTimer(10);



