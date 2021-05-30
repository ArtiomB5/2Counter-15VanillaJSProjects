let counterData = 0;

let buttons = document.querySelectorAll('div > button');
buttons.forEach(function (item) {
    item.addEventListener('click', buttonClick)
});


/**
 * Увеличивает, лиюо уменьшает, либо обнуляет счетчик
 *
 * @param {object} eventObject ивент
 */
function buttonClick(eventObject) {
    let clickElement = eventObject.currentTarget;
    console.log(clickElement.classList);

    if (clickElement.classList == 'buttons__decrease') {
        console.log('buttons__decrease');
        counterData--;
        document.getElementById('counter-data').textContent = String(counterData);
        if (counterData < 0) {
            document.getElementById('counter-data').style.color = 'red';    
        } else if (counterData == 0) {
            document.getElementById('counter-data').style.color = 'black'; 
        }
    }

    if (clickElement.classList == 'buttons__reset') {
        console.log('buttons__reset');
        counterData = 0;
        document.getElementById('counter-data').textContent = String(counterData);
        document.getElementById('counter-data').style.color = 'black';
    }
    
    if (clickElement.classList == 'buttons__increase') {
        console.log('buttons__increase');
        counterData++;
        document.getElementById('counter-data').textContent = String(counterData);
        if (counterData > 0) {
            document.getElementById('counter-data').style.color = 'green';    
        } else if (counterData == 0) {
            document.getElementById('counter-data').style.color = 'black'; 
        }
    }
}


