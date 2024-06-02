document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('[state="counter"]');
    const containers = document.querySelectorAll('[type="counter"]');

    counters.forEach(counter => {
        const container = [...containers].find(cont => cont.getAttribute('name') === counter.getAttribute('name'));
        if (container) {
            container.innerText = container.getAttribute('value');
            counter.addEventListener('click', () => {
                const operationType = counter.getAttribute('operation');
                const changeValue = Number(counter.getAttribute('value'));
                let currentValue = Number(container.getAttribute('value'));

                currentValue = operation(operationType, currentValue, changeValue);

                container.setAttribute('value', currentValue);
                container.innerText = Number.isInteger(currentValue) ? currentValue : currentValue.toFixed(2);
            });
        }
    });

    function operation(type, initial, count) {
        switch (type) {
            case 'increase':
                return initial + count;
            case 'decrease':
                return initial - count;
            case 'multiply':
                return initial * count;
            case 'divide':
                return initial / count;
            case 'modulo':
                return initial % count;
            default:
                return initial;
        }
    }
});
