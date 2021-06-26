Object.defineProperty(window, 'MySweetApp', {value: 'v1.0.0', writable: true});

function deliveryMethod() {
    // TODO
    return 'overnight';
}

function shipWeight() {
    const el: HTMLElement | null = document.getElementById('weight');
    if (!el) {
        return 0;
    }
    return parseInt(el.innerHTML);
}

function sendUpdates(emailAddr: string | string[]) {
    function sendEmail(addr: string) {
        // можно исполльзовать //@ts-ignore чтобы отключить проверку для любой строки
        console.log(`Shipping to ${addr} via ${deliveryMethod() | 'standard'} delivery`);

        if (shipWeight() > 100) {
            console.log('WARNING: Oversize package');
        }
    }

    if (Array.isArray(emailAddr)) {
        emailAddr.forEach((val: string, _idx: number) => {
            sendEmail(val.trim());
        });
    } else {
        sendEmail(emailAddr.trim());
    }
}

const dates = [12,3,45];
const isDate = dates.includes(12);

