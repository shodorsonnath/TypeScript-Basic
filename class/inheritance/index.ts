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

class Student extends User {
      studentId: number;
    //   extended constructor
    constructor(userName: string, age: number, studentId: number) {
        super(userName, age)
    }
}

let Student1 = new Student ("BD", 1);
Student1.