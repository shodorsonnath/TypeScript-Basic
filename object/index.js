// let user1: { userName: string, userId: number };
// user1 = { userName: "Anisul", userId: 101 };
// let users: object[];
// users = [{name: "Anis"}, {name: "Call"}];
var users;
users = [];
var user1;
user1 = { userName: "BD", userId: 101 };
users.push(user1);
var user2;
user2 = { userName: "BD", userId: 101 };
users.push(user2);
for (var key in users) {
    console.log(users[0]);
}
