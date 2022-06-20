const calcInputSum = document.querySelector('.calculator__input-sum');
const calcNdsInput = document.querySelector('.form-group__input');
const calcButtonResult = document.querySelector('.form-group__submit');
const calcForm = document.querySelector('.calculator__form');


calcButtonResult.addEventListener('click', function() {
    const calcTemplate = document.querySelector('#template-result').content;
    const templateClone = calcTemplate.querySelector('.element-result').cloneNode(true);
    let numberPercent = calcInputSum.value / 100 * calcNdsInput.value;
    // calcTemplate.querySelector('.element-result__item_type_sum') = 1111;
    calcForm.append(`Результат с НДС: ${numberPercent}`);
    console.log(numberPercent);
})
