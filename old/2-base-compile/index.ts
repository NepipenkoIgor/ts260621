/** let/cont **/

const a = 1;
const period = 12;

/* object**/

let firstName = 'Ihor';


const account = {
    firstName,
    getName() {
        return this.firstName;
    }
}


/**spread***/

const person = {...account};
const dates = [...[11, 22, 33]];

/**destruct*/

const {firstName: username} = account;
const [, secondDate] = dates;


/**template str*/
function userMessage([start, end]: TemplateStringsArray, {firstName: myName}: typeof account): string {
    return `${start}${myName}${end}`
}

console.log(userMessage`Good day, ${person} !!!`)


/**for of*/
for (const date of dates) {
    console.log(date);
}

/***arrow**/
const sum = (a: number, b: number) => a + b;


/**Class**/

class Point {
    x = 1;
}


/** ? optional chaining */
const  user: any = {};
const info = user?.info?.data;

/** ?? */
let admin;
const cond = admin ?? user;
