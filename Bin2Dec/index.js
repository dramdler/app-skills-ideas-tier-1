// ковертер систем исчисления 
// #1. из 10 в 2. Делим чило на 2 до тех пор пока не получим 1 и записываем остаток от деления в обратном порядке 62 -> 111110 (62/2 ; 31/2 ; 15/2 ; 7/2 ; 3/2 ; 1/2) или 40 ->101000 (40/2 ; 20/2 ; 10/2 ; 5/2 ; 2/2 ; 1/2)
// #2. из 2 в 10. Возводим в степень в соответствии индексу эллемента и складываем. 111110 -> 2**5 + 2**4 +2**3 + 2**2 + 2**0 = 62 

document.addEventListener('DOMContentLoaded', () => {
    const binaryInput = document.querySelector('input#binary');
    const decimalInput = document.querySelector('input#decimal');
    decimalInput.addEventListener('input', toBinary);
    binaryInput.addEventListener('input', toDecimal);

    function toBinary() {
        const decimal = decimalInput.value;
        let res = [];
        let remainder;
        let temp = decimal;

        while (temp > 0) {
            remainder = temp % 2
            res.unshift(remainder);
            temp = (temp - remainder) / 2;
        }
        binaryInput.value = res.join('');
    }

    function toDecimal() {
        const binary = (binaryInput.value).split('');
        console.log(binary);
        let res = 0;

        for (let i = binary.length; i > 1; i--) {
            if (binary[i - 1] !== 0) {
                res += 2 ** (i - 1)
            }
        }
        decimalInput.value = res;
    }
})

