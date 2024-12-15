var User = /** @class */ (function () {
    // constructor
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    // method
    User.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
// object
var user1 = new User("Anisul Islam", 23);
user1.display();
