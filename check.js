const name = document.getElementById('n1')
const surname = document.getElementById('n2')
const mail = document.getElementById('n3')
const form = document.getElementById('form')
const check = document.getElementById('n4')
const check2 = document.getElementById('n5')
const NameError = document.getElementById('NameError')
const SurnameError = document.getElementById('PasswordError')
const MailError = document.getElementById('MailError')
const CheckError = document.getElementById('CheckError')

form.addEventListener('submit', (e) => {
    let norm = true

    if (!/.{3,}/.test(n1.value)) {
        norm = false
        NameError.innerText = 'В имени должно быть три буквы или больше'
    }

    else if (/[^А-ЯA-ZЁ]/.test(n1.value)) {
        norm = false
        NameError.innerText = 'Первая буква имени должна быть заглавная'
    }

    else if (/[^а-яА-Яa-zA-ZёЁ]/.test(n1.value)) {
        norm = false
        NameError.innerText = 'В имени должны быть только буквы'
    }

    else { NameError.innerText = 'Обязательно для заполнения' }

    if (!/.{3,}/.test(n2.value)) {
        norm = false
        SurnameError.innerText = 'В фамилии должно быть три буквы или больше'
    }

    else if (/[^А-ЯA-ZЁ]/.test(n2.value)) {
        norm = false
        SurnameError.innerText = 'Первая буква фамилии должна быть заглавная'
    }

    else if (/[^а-яА-Яa-zA-ZёЁ]/.test(n2.value)) {
        norm = false
        SurnameError.innerText = 'В фамилии должны быть только буквы'

    }

    else { SurnameError.innerText = 'Обязательно для заполнения' }


    if (!/.{1,}/.test(n3.value)) {
        norm = false
        MailError.innerText = 'Введите e-mail'
    }

    else if (!/@/.test(n3.value) || !/\./.test(n3.value)) {
        norm = false
        MailError.innerText = 'Неверный формат почты'
    }

    else { MailError.innerText = 'Обязательно для заполнения' }

    if(!n4.checked || !n5.checked) {
        norm=false
        CheckError.innerText = "Примите условия"
    }

    else { CheckError.innerText = "Заполнено" }

    if (norm===false) {
        e.preventDefault();
    }
})

