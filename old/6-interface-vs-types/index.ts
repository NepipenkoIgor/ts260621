// interface IUser {
//     firstName: string;
//     age: number;
// }
//
// type TUser = {
//     firstName: string;
//     age: number;
// }
//
// const user: TUser = {
//     firstName: 'Ihor',
//     age: 35
// }


// /**Object/Function*/
//
// interface IPoint {
//     x: number;
//     y: number;
// }
//
// type TPoint = {
//     x: number;
//     y: number;
// }
//
//
// interface ISetPoint {
//     (x: number, y: number): void
// }
//
// type TSetPoint = (x: number, y: number) => void;
//
//
// const p: TPoint = {x: 10, y: 10};
// const setPoint: TSetPoint =  (_x: number, _y: number) {
//
// }

/***Extends**/

interface IX {
    x: number;
}

interface IY {
    y: number;
}

type TX = {
    x: number;
}

type TY = {
    y: number;
}


interface IPoint extends IX, TY {
    z: number
}

type TPoint = TX & IY & { z: number };

const p: TPoint = {
    x: 10,
    y: 11,
    z: 10
}

type sbn = string | number | boolean;
/**Implements**/
class Point implements IPoint {
    x = 10;
    y = 11;
    z = 10;
}




interface IAccount {
    firstName: string;
}

let u: IAccount = {
    firstName: 'Ihor'
}





interface IAccount {
    male: boolean;
}
