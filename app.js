const mobx = require('mobx')


var person = mobx.observable({
    firstName: 'Asaad',
    lastName: 'Saad',
    age: 37,
    fullName: function () {
        this.firstName + ' ' + this.lastName;
    }
});

mobx.autorun(function () {
    console.log('first name: ' + person.firstName);
});

person.age = 38;
person.lastName = 'Falk';
person.firstName = 'Miles'; 