// interface UserAccount {
//     firstName: string;
//     age: number;
// }
//
// const p = UserAccount;


// const userAccount = {
//     firstName: 'Ihor',
//     age: 35
// }
//
// interface userAccount1 {
//     firstName: string;
//     age: number;
// }
//
// const p: userAccount1 = userAccount;


// class Point {
//     x = 1;
// }
//
// const p: Point = new Point();

// function fn() {
// }
//
//
// const fn1= new fn();


// let a: number = 1;
// a = NaN;
// a = Infinity;
// a = 0x0101;
//
//
// let s: string = 's';
// s = `${a}`;
//
// let b: boolean = true;
// b = false;
//
//
// let nill: null = null;
// let und: undefined = undefined;
//
//
// let b: bigint = 1n;
//
//
// const key1: symbol = Symbol('my_key');
// const key2: unique symbol = Symbol('my_key');
// const key3 = Symbol('my_key');
//
// const strObj = {
//     [key1]: 100,
//     [key2]: 100,
//     [key3]: 100,
// }
//
// const v1 = strObj[key3];
//
//
// function method(_key: typeof key1) {
//
// }
//
// method(key3);

// let anyType: any = 1;
// anyType.a = 1;
// anyType['d'] = () => {
// };
// anyType = null;
// anyType();
//
//
// let unkType: unknown = 1;
// unkType.a = 1;
// unkType['d'] = () => {
// };
// unkType = null;
// unkType();
//
//
// let v: void = undefined;
//
// function fn(): void {
//
// }

//
// let num: 1 | 2 | 3 | 4 | 5 = 1;
// num = 23;

type BaseType = 'ease' | 'cubic';
type Direction = 'in' | 'out';

enum AnimateType {
    EASE_IN = 'ease-in',
    EASE_OUT = 'ease-out'
}


const v = Object.keys(AnimateType).map((key: string)=>{
    return AnimateType[key as keyof typeof AnimateType];
})

const v1 = Object.values(AnimateType);
v1.push('sdsdadsad');



interface IAnimationOptions {
    delay: number;
    type: AnimateType // `${BaseType}-${Direction}`  // 'ease-in' | 'ease-out';
}


function animation(_options: IAnimationOptions) {

}


animation({delay: 0, type: AnimateType.EASE_IN});
animation({delay: 0, type: 'easeoutyre-in'});


interface IFact {
    factId: number;
    userId: number;
    useTo: string;
    male: boolean;
}


const dataList: { action: string, data: IFact } [] = [];

// const a = 'factId' as const;
// let b: typeof a = 'asdasda';

const uniqueValue = () => {  //  'factId' | 'userId' |  'useTo'
    return  'factId' as const;
}


dataList.map((item: { action: string, data: IFact }) => {
    if (item.data[uniqueValue()] === 2) {
        //....
    }
    return item;
})


const values: IFact[keyof IFact] // number | string |  boolean;
const values1: IFact['factId' | 'useTo'] // number | string;





// TODO maybe later ?
// const createSimpleReducer = (name: string) => ({ // type?
//     [`${name}Start`]: () => { console.log(`${name}Start`) },
//     [`${name}Ok`]: () => { /** ... */},
//     [`${name}Fail`]: () => { /** ... */},
// });
//
//
// createSimpleReducer('test').


