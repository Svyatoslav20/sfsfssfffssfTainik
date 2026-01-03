const btnStart = document.querySelector(".btn__start")
const btnEnd = document.querySelector(".btn__delete")
const btnToggle = document.querySelector(".togglebtn")
const noneBtn = document.querySelector('#none');
const openBtn = document.querySelector('.open')
// Кнопки 
const svgStart = document.querySelector(".send")
const svgEnd = document.querySelector(".del")
const instruction = document.querySelector('.instruction')
// Доп. констанция 

let firstInput = document.querySelector(".first")
let secondInput = document.querySelector(".second")
let thirdInput = document.querySelector(".third")
let basement = document.querySelector(".bas")
let tempDiv = document.querySelector('.tempDiv')
let tempNew = document.querySelector('#template').cloneNode(true).content;
function numB(event) {
    event.preventDefault()
    let frt = firstInput.value 
    let scd = secondInput.value 
    let thd = thirdInput.value 
    let userProV = document.querySelector('.deinput')
    let result = parseInt(frt) + parseInt(scd) + parseInt(thd)
    let userRes = result / userProV.value 
    if (userRes !== Math.floor(userRes)) {          // Заметка самому себе: "!==" - НЕ РАВНО. Слон (a) не равен(!==) ежу (b) = a !== b
        userRes = userRes.toFixed(2)
    }
    let tempNew = document.querySelector('#template').cloneNode(true).
    content;
    let p = tempNew.querySelector(".list")
    if(frt === "" || scd === "" || thd === "") {
        p.textContent = "Вы не вписали число в одну из строк."
    }
    else {
        p.textContent = "Успех! Вот ваш сюрприз: " + userRes
    }
    
    if (Number(userProV.value === 0)) {
        p.textContent = "Измените значение."
    }
    btnEnd.addEventListener('click', delnumB)
    tempDiv.append(tempNew)
    
}
btnStart.addEventListener('click', numB)
function delnumB(event) {
    event.preventDefault();
    let lists = basement.getElementsByClassName('list');
    if (lists.length > 0) lists[lists.length - 1].remove();
}
btnEnd.addEventListener('click', delnumB)
// Функции очистки и расчета

btnToggle.onclick = () => {
    noneBtn.style.display = 'block'
}
noneBtn.style.display = 'none'
// Функция кнопки ВКЛЮЧИТЬ

const deMenu = document.querySelector('.debugMenu')
let debugOpen = false;
function opDebug(event) {
    event.preventDefault()
    console.log('Консоль открыта!')

    if (!debugOpen) {
        // гарантируем стартовое состояние
        deMenu.classList.remove('active');
        // следующий кадр - ВКЛ
        requestAnimationFrame(() => {
            deMenu.classList.add('active');
        });
    } else {
        deMenu.classList.remove('active');
    }

    debugOpen = !debugOpen;
}
openBtn.addEventListener('click', opDebug)
// функция включения и выкл. менюшки

function delInst(event) {
    event.preventDefault()
    instruction.remove()
}
instruction.addEventListener('click', delInst)
// Функция удаления инструкции
let deinput = document.querySelector('.deinput')
const minval = 1 ;
const maxval = 9999;
deinput.addEventListener('input', () =>{
    let val = Number(deinput.value)
    if (val > maxval) deinput.value = maxval      // отбираем возможность бесконечного числа
    if(val < minval) deinput.value = minval
})
