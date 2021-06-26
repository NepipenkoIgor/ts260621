let v1 = 1 + 3;
let v2 = 3 + 4;

function fn(a: number, b: number) {
    return a + b;
}

// Type/Interface/function/Class


interface IAccount<Info extends { male: boolean } = { male: true }, Id = number> {
    id: Id,
    name: string
    info: Info
}

const user: IAccount = {
    id: 1,
    name: 'Eugene',
    info: {male: true}
}

const admin: IAccount<{ male: boolean, subjects: string[] }, string> = {
    id: 'asdasd123123',
    name: 'Eugene A',
    info: {
        male: true,
        subjects: ['TS', 'React']
    }
}


let a: Array<number>
