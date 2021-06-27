import { CheckTypeInRunTime, Debounce, LogInputValue, Validate, Range } from './decorators';

class SearchComponent {

    //@SavePersistence
    @CheckTypeInRunTime
    public initialValue!: string;

    public constructor(
        private readonly inputEl: HTMLInputElement
    ) {
        console.log(this.initialValue);
        this.inputEl.addEventListener('input', this.onSearch.bind(this))
    }

    @Debounce(300)
    @LogInputValue
    private onSearch(this: this, _e: Event) {
        this.initialValue = (_e.target as HTMLInputElement).value;
    }
}

const inputEl = document.querySelector('input') as HTMLInputElement;
const s = new SearchComponent(inputEl);

setTimeout(() => {
    (s.initialValue as any) = 1231231;
}, 5000)


class Calculator {
    @Validate
    public updatePercentage(
        _oldValue: number,
        @Range(30, 70) _newValue: number
    ): void {
        console.log(_oldValue, _newValue)
    }
}

const calc = new Calculator();
calc.updatePercentage(0, 50);

setTimeout(()=>{
    calc.updatePercentage(50, 80);
}, 7000)
