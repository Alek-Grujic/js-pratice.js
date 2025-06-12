
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


// 3. tast - timer

// setInterval, setTimeout and clearInterval

// let ids = setInterval(() => {
//     console.log('Radi...');
// }, 1000);

// setTimeout(() => {
//     clearInterval(ids);
//     console.log('Zaustavljeno!');
// }, 5000);

// // ----------------------------------
// // first way

// let count = 1;

// let id = setInterval(() => {
//     console.log(count);
//     count++;
//     if (count > 5) clearInterval(id);
// }, 1000);

// // ----------------------------------
// // second way

// let count2 = 1;

// let id2 = setInterval(() => {
//     console.log(count);
//     count++;
//     if (count > 5) clearInterval(id2);
// }, 1000);

// setTimeout(() => {
//     clearInterval(id2);
//     console.log('Zaustavljeno');
// }, 5000);


// function CountdownTimer(seconds) {

//     let _timer;
//     let _time = seconds;
//     let _currentSeconds = seconds;
//     let _running = false;

//     this.start = function () {
//         if (_running) {
//             // throw new Error('Timer si working!');
//             return 'Timer is working!';

//         }
//         _running = true;
//         if (_currentSeconds === 0) {
//             _currentSeconds = _time;
//         }
//         _timer = setInterval(() => {
//             console.log(`Time left: ${_currentSeconds}`);
//             _currentSeconds--;
//             if (_currentSeconds === 0) {
//                 console.log(`Time's up!`);
//                 clearInterval(_timer);
//                 _currentSeconds = 0;
//                 _running = false;
//             }
//         }, 1000)
//     };
//     this.pause = function () {
//         if (!_running) console.log(`Timer isn't started yet.`);
//         if (_running) {
//             console.log(`Seconds left: ${_currentSeconds}`);
//             clearInterval(_timer);
//             _running = false;
//         }
//     };

//     this.restart = function () {
//         if (!_running) console.log(`Timer isn't running. Nothing to restart.`);
//         if (_running) {
//             clearInterval(_timer);
//             _currentSeconds = _time;
//             _running = false;
//         }

//     };
//     this.status = function () {
//         if (_currentSeconds === 0 && !_running) console.log('Finished');
//         if (_currentSeconds === _time && !_running) console.log('Ready');
//         if (_running && _currentSeconds < _time) console.log('Running');
//         if ((!_running && _currentSeconds < _time) && !(_currentSeconds === 0)) console.log('Paused');
//     }

// };
// const timer = new CountdownTimer(10);

// timer.start();


// -----------------------------------------------------------


// 4. task - Stopwatch

function Stopwatch() {

    this.duration = 0;
    let _timer;
    let _currentSeconds = this.duration;
    let _running = false;


    this.start = function () {
        if (_currentSeconds > 0 && _running) {
            throw new Error('Stopwatch has already started!');
        }
        _running = true;
        _timer = setInterval(() => {
            console.log(`Time: ${_currentSeconds + 1}`);
            _currentSeconds++;
            this.duration = _currentSeconds;
        }, 1000);
    };

    this.stop = function () {
        if (!_running) throw new Error('Stopwatch is not started!')
        if (_running) {
            console.log('Stopwatch is stopped!');
            _running = false;
            clearInterval(_timer);
        }
    };

    this.reset = function () {
        if (!_running && _currentSeconds > 0) {
            console.log(`Stopwatch reseted! Final time: ${_currentSeconds}`);
            this.duration = 0;
            _currentSeconds = this.duration;
            _running = false;

        }
        if (_running) {
            clearInterval(_timer);
            console.log(`Stopwatch reseted! Final time: ${_currentSeconds}`);
            this.duration = 0;
            _currentSeconds = this.duration;
            _running = false;
            // console.log('Stopwatch reseted!');
        }
    }

}

const sw = new Stopwatch();

sw.start();
