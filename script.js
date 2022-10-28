let nameForm = document.getElementById('card_name_form')
let cardName = document.getElementById('card_name')
let nameError = document.getElementById('name_error')
let numberForm = document.getElementById('card_number_form')
let cardNumber = document.getElementById('card_number')
let numberError = document.getElementById('number_error')
let monthForm = document.getElementById('card_month_form')
let cardMonth = document.getElementById('card_month')
let yearForm = document.getElementById('card_year_form')
let cardYear = document.getElementById('card_year')
let dateError = document.getElementById('date_error')
let cvcForm = document.getElementById('card_cvc_form')
let cardCvc = document.getElementById('card_cvc')
let cvcError = document.getElementById('cvc_error')
let form = document.querySelector('.form')
let thank_you = document.querySelector('.thank_you')
let button = document.querySelector('.btn_primary')
const reg1 = /[a-z]/
const reg2 = /[A-Z]/
let nameVerification = false
let numberVerification = false
let monthVerification = false
let yearVerification = false
let cvcVerification = false

nameForm.addEventListener('input', () => {
    cardName.innerHTML = ''
    cardName.innerHTML = nameForm.value

    if (nameForm.value == '') {
        cardName.innerHTML = 'Jane Appleseed'
    }
})

numberForm.addEventListener('input', () => {
    cardNumber.innerHTML = ''
    cardNumber.innerHTML = numberForm.value

    if (numberForm.value == '') {
        cardNumber.innerHTML = '0000 0000 0000 0000'
    }
})

monthForm.addEventListener('input', () => {
    cardMonth.innerHTML = ''
    cardMonth.innerHTML = monthForm.value

    if (monthForm.value == '') {
        cardMonth.innerHTML = '00'
    }
})

yearForm.addEventListener('input', () => {
    cardYear.innerHTML = ''
    cardYear.innerHTML = yearForm.value

    if (yearForm.value == '') {
        cardYear.innerHTML = '00'
    }
})

cvcForm.addEventListener('input', () => {
    cardCvc.innerHTML = ''
    cardCvc.innerHTML = cvcForm.value

    if (cvcForm.value == '') {
        cardCvc.innerHTML = '000'
    }
})

function verification() {
    if (cardName.innerHTML == 'Jane Appleseed') {
        nameError.innerHTML = "Can't be blank"
        nameForm.style.border = '1px solid hsl(0, 100%, 66%)'
    } else if (!reg1.test(nameForm.value) || !reg2.test(nameForm.value)) {
        nameError.innerHTML = "Wrong format, numbers only"
        nameForm.style.border = '1px solid hsl(0, 100%, 66%)'
    } else if (cardName.innerHTML.length <= 5) {
        nameError.innerHTML = "Must be more than 5 letters"
        nameForm.style.border = '1px solid hsl(0, 100%, 66%)'
    } else {
        nameError.innerHTML = ""
        nameForm.style.border = '1px solid hsl(270, 3%, 87%)'
        nameVerification = true
    }

    if (cardNumber.innerHTML == '0000 0000 0000 0000') {
        numberError.innerHTML = "Can't be blank"
        numberForm.style.border = '1px solid hsl(0, 100%, 66%)'
    } else if (reg1.test(numberForm.value) || reg2.test(numberForm.value)) {
        numberError.innerHTML = "Wrong format, numbers only"
        numberForm.style.border = '1px solid hsl(0, 100%, 66%)'
    } else if (cardNumber.innerHTML.length != 19) {
        numberError.innerHTML = "Must have 16 numbers"
        numberForm.style.border = '1px solid hsl(0, 100%, 66%)'
    } else {
        numberError.innerHTML = ""
        numberForm.style.border = '1px solid hsl(270, 3%, 87%)'
        numberVerification = true
    }

    if (cardMonth.innerHTML == '00') {
        dateError.innerHTML = "Can't be blank"
        monthForm.style.border = '1px solid hsl(0, 100%, 66%)'
    } else if (reg1.test(monthForm.value) || reg2.test(monthForm.value)) {
        dateError.innerHTML = "Wrong format, numbers only"
        monthForm.style.border = '1px solid hsl(0, 100%, 66%)'
    } else if (cardMonth.innerHTML.length != 2) {
        dateError.innerHTML = "Must have 2 numbers"
        monthForm.style.border = '1px solid hsl(0, 100%, 66%)'
    } else {
        dateError.innerHTML = ""
        monthForm.style.border = '1px solid hsl(270, 3%, 87%)'
        monthVerification = true
    }

    if (cardYear.innerHTML == '00') {
        dateError.innerHTML = "Can't be blank"
        yearForm.style.border = '1px solid hsl(0, 100%, 66%)'
    } else if (reg1.test(yearForm.value) || reg2.test(yearForm.value)) {
        dateError.innerHTML = "Wrong format, numbers only"
        yearForm.style.border = '1px solid hsl(0, 100%, 66%)'
    } else if (cardYear.innerHTML.length != 2) {
        dateError.innerHTML = "Must have 2 numbers"
        yearForm.style.border = '1px solid hsl(0, 100%, 66%)'
    } else {
        dateError.innerHTML = ""
        yearForm.style.border = '1px solid hsl(270, 3%, 87%)'
        yearVerification = true
    }

    if (cardCvc.innerHTML == '000') {
        cvcError.innerHTML = "Can't be blank"
        cvcForm.style.border = '1px solid hsl(0, 100%, 66%)'
    } else if (reg1.test(cvcForm.value) || reg2.test(cvcForm.value)) {
        cvcError.innerHTML = "Wrong format, numbers only"
        cvcForm.style.border = '1px solid hsl(0, 100%, 66%)'
    } else if (cardCvc.innerHTML.length != 3) {
        cvcError.innerHTML = "Must have 3 numbers"
        cvcForm.style.border = '1px solid hsl(0, 100%, 66%)'
    } else {
        cvcError.innerHTML = ""
        cvcForm.style.border = '1px solid hsl(270, 3%, 87%)'
        cvcVerification = true
    }

    if (nameVerification == true && numberVerification == true && monthVerification == true && yearVerification ==
        true && cvcVerification == true) {
        form.classList.add('hide')
        thank_you.classList.remove('hide')
        button.value = 'Continue'

        if (button.value == 'Continue') {
            button.addEventListener('click', () => {
                form.classList.remove('hide')
                thank_you.classList.add('hide')
                cardName.innerHTML = 'Jane Appleseed'
                cardNumber.innerHTML = '0000 0000 0000 0000'
                cardMonth.innerHTML = '00'
                cardYear.innerHTML = '00'
                cardCvc.innerHTML = '000'
                nameForm.value = ''
                numberForm.value = ''
                monthForm.value = ''
                yearForm.value = ''
                cvcForm.value = ''
                button.value = 'Confirm'
            })
        }
    }
}