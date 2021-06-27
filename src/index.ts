interface IUser {
    name: string;
    permission: string[];
    male: boolean
}

// interface IAdmin extends Omit<IUser, 'permission'> {
//     permission: { [section: string]: string[] }
// }
//
// type OptionalButReadonly<T> = {
//    readonly [P in  keyof T]?: T[P]
// }
//
//
// const p: OptionalButReadonly<IUser> = {
//     permission: ['add']
// }
//
// p.permission = [];
//
// type KeysWithoutType<T, E> = {
//     [P in keyof T]: T[P] extends E  ? never : P
// }[keyof T]
//
//
// let k0: keyof IUser // 'name' | 'permission' | 'male'
// const k: KeysWithoutType<IUser, string> = 'name' // 'permission' | 'male'
//
// type RemoveByFieldName<T,E> = {
//     [P in keyof T as Exclude<P, E>]: T[P]
// }
//
// const obj: RemoveByFieldName<IUser, 'permission' | 'name' > = {
//     male: true,
// }
//
//
// type CapitalizedKeysAndGetter<T> = {
//     [P in keyof T as `get${Capitalize<P&string>}`]: ()=> T[P]
// }
//
// const getUser: CapitalizedKeysAndGetter<IUser> = {
//     getMale: ()=> true,
//     getName: ()=> 'Ihor',
//     getPermission: ()=> ['TS', 'Angular'],
// }


// conditional `value` depending on show=true

// TODO overloads
// type ConditionalResult<T, U, Z extends string> = T extends true ? Required<U> : Omit<U, Z>
//
// const test = <T extends boolean>(show: T) => {
//     type result = ConditionalResult<T, { test: number, value?: () => string}, 'value'>;
//     if (show) {
//         return {
//             test: 1,
//             value: () => 'sss',
//         } as result
//     }
//     return {
//         test: 1
//     } as result
// }
//
// test(true);  // { test: number; value: () => string; }
// test(false); // { test: number; }


type TypedObject<T, U> = {
    [P in keyof T as `${U & string}${string & P}`]: T[P]
}

const createSimpleReducer = <T extends string>(name: T) => {
    const obj = {
        Start: (): IUser => {
            throw new Error()
        },
        Ok: () => {
            return 's'
        },
        Fail: () => {
            return true
        }
    }
    type prefixedObj = TypedObject<typeof obj, T>;
    const result = {} as any;
    for (const [key, value] of Object.entries(obj)) {
        result [`${name}${key}` as keyof prefixedObj] = value;
    }
    return result as prefixedObj
};


const v1: string = createSimpleReducer('foo').
