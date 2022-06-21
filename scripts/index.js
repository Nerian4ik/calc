const calcInputSum = document.querySelector('.calculator__input-sum');
const calcVat = document.querySelector('.form-group__input');
const template = document.querySelector('#template-result').content;
const button = document.querySelector('.form-group__submit');
const form = document.querySelector('.calculator__form');
const radioType = document.querySelectorAll('input[name="action"]');

// Начисления НДС
function calcPercent() {

    return +calcInputSum.value / 100 * +calcVat.value;

}
// Вычисление выделение НДС
function allocateVat() {

    return +calcInputSum.value * +calcVat.value / (+calcVat.value + 100);

}

button.addEventListener('click', function() {

    const templateClone = template.querySelector('.element-result').cloneNode(true);

    if (radioType[0].checked === true) {
        templateClone.querySelector('.element-result__item_type_sum').textContent = `Cумма без НДС: ${(+calcInputSum.value - +allocateVat().toFixed(2)).toFixed(2)} Р`;
        templateClone.querySelector('.element-result__item_type_vat').textContent = `НДС ${calcVat.value}%: ${allocateVat().toFixed(2)} Р`;
        templateClone.querySelector('.element-result__item_type_result-sum').textContent = `Всего: ${+calcInputSum.value} Р`;
        form.append(templateClone);

    } else if (radioType[1].checked === true) {
        templateClone.querySelector('.element-result__item_type_sum').textContent = `Cумма без НДС: ${+calcInputSum.value} Р`;
        templateClone.querySelector('.element-result__item_type_vat').textContent = `НДС: ${+calcVat.value}% ${calcPercent()} Р`;
        templateClone.querySelector('.element-result__item_type_result-sum').textContent = `Всего: ${+calcInputSum.value + +calcPercent()} Р`;
        form.append(templateClone);
    }
})
