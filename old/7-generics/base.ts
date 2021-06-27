let v1 = 1 + 3;
let v2 = 3 + 4;

function fn(a: number, b: number) {
    return a + b;
}

// Type/Interface/function/Class

//
// interface IAccount<Info extends { male: boolean } = { male: true }, Id = number> {
//     id: Id,
//     name: string
//     info: Info
// }
//
// const user: IAccount = {
//     id: 1,
//     name: 'Eugene',
//     info: {male: true}
// }
//
// const admin: IAccount<{ male: boolean, subjects: string[] }, string> = {
//     id: 'asdasd123123',
//     name: 'Eugene A',
//     info: {
//         male: true,
//         subjects: ['TS', 'React']
//     }
// }
//
//
// let a: Array<number>


interface IUser {
    name: string;
    age: number;
}

interface IProduct {
    name: string;
    price: number;
}

interface IState {
    user: IUser,
    products: IProduct[]
}

const state: IState = {
    user: {name: 'Ihor', age: 35},
    products: [{name: 'IPhone XR', price: 100}, {name: 'IPhone X', price: 90}]
}
type Select<T> = <P extends keyof T>(storeState: T, field: P) => T[P];
const select: Select<IState> = (storeState, field) => storeState[field]; // IUser | IProduct[]
const user: number = select(state, 'products')
