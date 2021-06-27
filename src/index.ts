// function average(a: number, b: number, c: number): string {
//     const avg = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 2);
// average(1, 2, '3');
// const v: number = average(1, 2, 4);

// function average(a: number, b?: number, c?: number): string {
//     if (b === undefined) {
//         b = 0;
//     }
//     if (c === undefined) {
//         c = 0;
//     }
//     const avg = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 2);
// average(1, 2, '3');
// const v: number = average(1, 2, 4);


// function average(a: number, b = 0, c = 0): Promise<string> {
//     const avg = (a + b + c) / 3;
//     return Promise.resolve().then(() => `Average is ${avg}`);
// }
//
// average(1);
// average(1, 2);
// average(1, 2, '3');
// const v: number = average(1, 2, 4);


// function isString(arg: string | number): arg is string {
//     return typeof arg === 'string';
// }
//
//
// function average(a: string, b: number): string
// function average(a: number, b: string): string
// function average(a: number, b: number, c: number): string
// function average(...args: (number | string)[]): string {
//     let total = 0;
//     for (const arg of args) {
//         if (isString(arg)) {
//             total += Number(arg);
//             continue;
//         }
//         total += arg;
//     }
//     const avg = total / args.length;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average('1', 2);
// average(1, '2');
// average(1, 2, '3');
// average(1, 2);
// average(1, '2', '3');
// average(1, 2, 1);
// average(1, 2, 1, 3, 4);
// const v: string = average(1, 2, 4);
//
//

// interface IA { test: number, value?: () => string; }
//
// function test(show: true): Required<IA>;
// function test(show: false): Exclude<IA, 'value'>;
// function test(show: boolean): IA {
//     if (show) {
//         return {
//             test: 1,
//             value: () => 'sss',
//         }
//     }
//     return {
//         test: 1
//     }
// }
//
// test(true).value()  // { test: number; value: () => string; }
// test(false).test // { test: number; }


// function getFullName(this: { name: string, surname: string }) {
//     return `${this.name} ${this.surname}`;
// }
//
// const account = {
//     name: 'Ihor',
//     surname: 'Nepipenko',
//     getFullName
// }
