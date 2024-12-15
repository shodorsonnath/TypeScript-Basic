class User {
    // properties
    userName: string;
    age: number;

    // constructor
    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    // method
    display(): void {
        console.log(`username: ${this.userName}, age: ${this.age}`);
    }
}

// object
let user1 = new User("Anisul Islam", 23);
user1.display();
