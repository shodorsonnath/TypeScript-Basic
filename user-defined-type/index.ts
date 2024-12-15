// user can define any datatype string or number
let userId: (number | string | boolean);
userId = 101;
userId = "BD";
console.log(userId);

function displayUserInfo(userId: string | number) {
    console.log(userId);
}

displayUserInfo("101");
displayUserInfo(101);