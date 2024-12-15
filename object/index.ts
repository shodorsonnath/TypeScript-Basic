// let user1: { userName: string, userId: number };
// user1 = { userName: "Anisul", userId: 101 };

// let users: object[];
// users = [{name: "Anis"}, {name: "Call"}];
let users: object[];
users = [];
let user1: { userName: string, userId: number };
user1 = {userName: "BD", userId: 101};
users.push(user1);

let user2: { userName: string, userId: number };
user2 = {userName: "BD", userId: 101};
users.push(user2);

for (const key in users) {
    console.log(users[0]);
}


