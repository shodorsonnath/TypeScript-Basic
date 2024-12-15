// built-in data type data type: number, string, boolean, void, undefined, null

let userId: number = 101;
let userName: string = "Bd IT";
let isActivated: boolean = true;
let firstName: string = "SM";
let lastName: string = "Technology";
console.log(`Your id: ${userId}, username: ${userName}, activated account: ${isActivated}`);

// string concat or join
let fullname = firstName.concat(lastName);
console.log(`Your full name is ${fullname}`);

// spilt, uppercase, lowercase
console.log(fullname.split("."));
console.log(fullname.toUpperCase());
console.log(fullname.toLowerCase());

// void function type

function displayName (): void {
    console.log("HI I am calling");
}

displayName();