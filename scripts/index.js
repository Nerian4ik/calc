const calcInputSum = document.querySelector('.calculator__input-sum');
const calcVat = document.querySelector('.form-group__input');
const template = document.querySelector('#template-result').content;
const button = document.querySelector('.form-group__submit');
const form = document.querySelector('.calculator__form');
const radioType = document.querySelectorAll('input[name="action"]');
const selected = document.querySelector('#selecttheme');


// Начисления НДС
function calcPercent() {

    return +calcInputSum.value / 100 * +selected.value;

}
// Вычисление выделение НДС
function allocateVat() {

    return +calcInputSum.value * +selected.value / (+selected.value + 100);

}

button.addEventListener('click', function() {
    const templateClone = document.querySelector('.element-result');
    templateClone.classList.add('element-result_active')
    if (radioType[0].checked === true) {
        templateClone.querySelector('.element-result__item_type_sum').textContent = `Cумма без НДС: ${(+calcInputSum.value - +allocateVat().toFixed(2)).toFixed(2)} ₽`;
        templateClone.querySelector('.element-result__item_type_vat').textContent = `НДС ${selected.value}%: ${allocateVat().toFixed(2)} ₽`;
        templateClone.querySelector('.element-result__item_type_result-sum').textContent = `Всего: ${(+calcInputSum.value).toFixed(2)} ₽`;
        form.append(templateClone);

    } else if (radioType[1].checked === true) {
        templateClone.querySelector('.element-result__item_type_sum').textContent = `Cумма без НДС: ${(+calcInputSum.value).toFixed(2)} ₽`;
        templateClone.querySelector('.element-result__item_type_vat').textContent = `НДС ${+selected.value}%: ${calcPercent().toFixed(2)} ₽`;
        templateClone.querySelector('.element-result__item_type_result-sum').textContent = `Всего: ${(+calcInputSum.value + +calcPercent()).toFixed(2)} ₽`;
        form.append(templateClone);
    }
})
