type sn = string | number;

interface IPoint {
    readonly x: sn;

    sum(): number;
}


class Point implements IPoint {
    #p: number = 1;

    public constructor(x: string, y: number, z: number)
    public constructor(x: number, y: string, z: number)
    public constructor(
        public readonly x: sn,
        protected readonly y: sn,
        private readonly z: number,
    ) {
    }

    public sum() {
        return Number(this.x) + Number(this.y) + this.z + this.#p;
    }
}


class CustomPoint extends Timestamped(Tags(Point)) {
    public constructor(x: number, y: string, z: number) {
        super(x, y, z);
    }

    public override sum() {
        return super.sum();
    }
}

const p = new CustomPoint(1, '1', 1);
console.log(p.timestamp);
console.log(p.tag);

class Singleton {
    private static instance: Singleton;

    private constructor() {
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

const inst1 = Singleton.getInstance();
const inst2 = Singleton.getInstance();
const inst3 = Singleton.getInstance();
const inst4 = Singleton.getInstance();

console.log(inst2 === inst4);

type Constructable = new  (...args: any[]) => any;

function Timestamped<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public timestamp = new Date()
    }
}


function Tags<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public tag = ['ts', 'js']
    }
}


abstract class AbstractControl<T = string> {
    public abstract model: T;

    public abstract getModel(): T;


    public onFocus() {

    }

    public onBlur() {

    }
}

abstract class AbstractControlWithSet<T = string> extends AbstractControl<T> {
    public abstract setModel(value: T): void;
}


class MHSearch extends AbstractControl {
    public model = '';

    public getModel(): string {
        return this.model;
    }
}

interface IDropDownItem {
    text: string;
    value: string;
}

class MHDropDown extends AbstractControlWithSet<IDropDownItem[]> {
    public model: IDropDownItem[] = [];

    public getModel(): IDropDownItem[] {
        return this.model;
    }

    public setModel(value: IDropDownItem[]) {
        this.model = value;
    }
}






