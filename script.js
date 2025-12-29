let btnStart = document.querySelector(".btn__start")
let btnEnd = document.querySelector(".btn__delete")
let btnToggle = document.querySelector(".togglebtn")
// Кнопки

let firstInput = document.querySelector(".first")
let secondInput = document.querySelector(".second")
let thirdInput = document.querySelector(".third")
let basement = document.querySelector(".bas")
let tempNew = document.querySelector('#template').cloneNode(true).content;
function numB(event) {
    let frt = firstInput.value 
    let scd = secondInput.value 
    let thd = thirdInput.value 
    event.preventDefault()
    let result = parseInt(frt) + parseInt(scd) + parseInt(thd)
    let userRes = Math.floor(result /3)
    let tempNew = document.querySelector('#template').cloneNode(true).
    content;
    let p = tempNew.querySelector(".list")
    if(frt === "" || scd === "" || thd === "") {
        p.textContent = "Вы, вероятно, не вписали число в одну из строк..."
    }
    else {
        p.textContent = "Успех! Вот оно: " + userRes
    }
    btnEnd.addEventListener('click', delnumB)
    basement.append(tempNew)

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
    let noneBtn = document.querySelector('#none');
    noneBtn.hidden = !noneBtn.hidden;
}
