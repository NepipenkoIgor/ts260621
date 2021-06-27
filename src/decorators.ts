import 'reflect-metadata';

export function LogInputValue(target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalValue = descriptor.value;
    return {
        ...descriptor,
        value(e: Event) {
            const value = (e.target as HTMLInputElement).value;
            console.log(`Input value in method ${key} of ${target.constructor.name} equal to ${value}`);
            return originalValue.call(this, e);
        }
    }
}


export function Debounce(ms: number) {
    let timeId: number | null;
    return (_target: any, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
        const originalValue = descriptor.value;
        return {
            ...descriptor,
            value(e: Event) {
                if (timeId) {
                    clearTimeout(timeId)
                }
                timeId = window.setTimeout(() => {
                    originalValue.call(this, e);
                }, ms)
            }
        }
    };

}

// TODO need additional comments
// export function SavePersistence(target: any, key: string): void {
//     console.log(target)
//     const localKey = `ts260621_${target.constructor.name}_${key}`;
//     //
//     // const getter = () => {
//     //     debugger
//     //     return localStorage.getItem(localKey);
//     // }
//     //
//     // const setter = (newValue: string) => {
//     //     debugger;
//     //     localStorage.setItem(localKey, newValue);
//     // }
//
//
//     // Object.defineProperty(target, key, {
//     //     get() {
//     //         debugger
//     //         return localStorage.getItem(localKey);
//     //     },
//     //     set(newValue: string) {
//     //         debugger;
//     //         localStorage.setItem(localKey, newValue);
//     //     },
//     //     enumerable: true,
//     //     configurable: true
//     // })
//     //
//     // console.log((Object.getOwnPropertyDescriptors(target) as any).initialValue.get)
// }


export function CheckTypeInRunTime(target: any, key: string): void {
    const { name: type } = Reflect.getMetadata('design:type', target, key);
    console.log(type);
    let value: any;
    Object.defineProperty(target, key, {
        get() {
            return value;
        },
        set(newValue: any) {
            const realType = typeof newValue;
            const actualType = type.toLowerCase();
            if (realType !== actualType) {
                throw Error(`type of ${key} in not ${actualType}. You tried to set ${realType}`)
            }
            value = newValue;
        },
        enumerable: true,
        configurable: true
    })
}


const RANGE_KEY = 'design:RANGE_KEY';

export function Range(min: number, max: number) {
    return (target: any, key: string, index: number) => {
        const existingRange = Reflect.getMetadata(RANGE_KEY, target, key) ?? {};
        existingRange[index] = [min, max];
        Reflect.defineMetadata(RANGE_KEY, existingRange, target, key);
    }
}

export function Validate(target: any, key: string, desc: PropertyDescriptor): void {
    const originalValue = desc.value;
    desc.value = function (...args: unknown[]) {
        const existingRange = Reflect.getMetadata(RANGE_KEY, target, key) ?? {};
        for (const [paramIndex, range] of Object.entries(existingRange)) {
            const [min, max] = range as [number, number];
            const numParamIndex = Number(paramIndex);
            const paramValue = args[numParamIndex] as number;
            if (paramValue < min || paramValue > max) {
                throw Error(`Error in ${target.constructor.name} instance. 
                Parameter of method ${key} on position ${numParamIndex + 1} out of range [${[min, max]}].
                Current value ${paramValue}
                `)
            }

        }
        return originalValue.call(this, ...args);
    }
}
