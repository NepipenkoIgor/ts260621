interface IInfo {
    male: boolean;
}

interface IUser {
    readonly firstName: string;
    readonly age: number;
    readonly info: IInfo
}

const user: IUser = {
    firstName: 'Ihor',
    age: 35,
}

user.firstName = 'Eugene';
user.info.male = true;

const hashUserMap: {
    [id: string]: IUser;
} = {
    'asdas124124qsrqwrxf1243': user,
    'asdasdasd123123': 1
}


const users: readonly IUser[] = [user];

users[100] = user;
users.push(user);


const user1: readonly [id:string, user?: IUser] = ['asdasd123123qsea', user];

user1[1000]= user;
user1.push(user)

// let nums: (string | number)[] = [12, '123', 'asdasd']
const  nums: [number, ...string[], number] = [1, 'sd', 'sd', 'sd', 'sd',  1]
