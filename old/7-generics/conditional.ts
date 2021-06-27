// T extends U ? Z : D

// type nonUndNull<T> = T extends undefined | null ? never : T;
//
// type sbu = string | boolean | undefined | null;
//
// const v: nonUndNull<sbu> = undefined
//
//
interface IHydrantA {
    type: 'a'
}

interface IHydrantB {
    type: 'b'
}

interface IHydrantC {
    type: 'c'
}

//
// type Hydrants = IHydrantA | IHydrantB | IHydrantC;
//
//
// let h: Exclude<Hydrants, IHydrantA | IHydrantC> = {
//     type: 'a'
// }
// type NonFunction<T> = T extends Function ? never : T;
// type FunctionParamsReturnType<T extends Function> = T extends (...args: infer U) => infer Z
//     ? NonFunction<U[Exclude<keyof U, 'length'>]> | Z
//     : never
//
//
// function fn1(_p: bigint): string {
//     return 's';
// }
//
// function fn2(_a: IHydrantA, _b: IHydrantB, _c: IHydrantC): string {
//     return 's';
// }
//
// const v1: FunctionParamsReturnType<typeof fn2> = true
//
//
// const  arr = [1,2,3];
// const v:  (typeof arr)[keyof typeof arr] = true


// const arr1: [() => { a: number, b:number }, () => boolean];
// type FirstReturnType<T> =
//     T extends [infer U, ...unknown[]]
//         ? U extends (...args: unknown[]) => infer R
//            ? R
//            : never
//         : never
//
//
// const v1: FirstReturnType<typeof arr1> = true;

type flatten<T> = T extends Array<infer U> ? flatten<U> : T;

function deepFlatten<Z extends unknown[]>(_p: Z): flatten<Z>[] {
    throw new Error('')
}

const arr1: number[] = deepFlatten([[1, 2, 3], 2, [[2, 3, 3]]]);
const arr12: number[] = deepFlatten([[1, 2, [23, 34]], 2, [[2, 3, 3]]]);
