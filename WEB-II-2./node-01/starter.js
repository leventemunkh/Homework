class User {
    constructor(name = '', age = 33, email = '') {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    greeting() {
        return `Hello, my name is ${this.name} and my email is ${this.email}!`;
    }
}


const piri = new User('Nagy Piroska', 18, 'piri@gmail.com');
console.log( piri.name );
console.log( piri.age );
console.log( piri.email );

console.log( piri.greeting() );