
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

function User(userName, password) {
    this.name = userName;
    let _password = password;

    Object.defineProperty(this, 'pasSetup', {
        get: function () {
            return password = "*****";
        },
        set: function (value) {
            if (value < 6) throw new Error('To short...')
            _password = value;
        }
    });

    this.login = function () {

    }

}


const user1 = new User('Mark', 'tajna123');

console.log(user1.password);
