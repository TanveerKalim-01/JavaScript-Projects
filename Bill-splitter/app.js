const billAmountInp = document.querySelector('#amount')
const customTipInp = document.querySelector('.custom-tip-input')
const peopleInp = document.querySelector('.people-input')
const tipAmount = document.querySelector('.tip-amount span')
const totalAmount = document.querySelector('.total span')
const eachPersonBill = document.querySelector('.person-bill span')
const genBillBtn = document.querySelector(".generate")
const resetBtn = document.querySelector('#reset-btn')
const tipBtns = document.querySelector(".tip-btns-container")
const btns = document.querySelectorAll(".btn")

let tipPercentage;

billAmountInp.addEventListener('input', () => {
    if (parseInt(billAmountInp.value) < 1) {
        return;
    } else
        if (billAmountInp.value) {
            customTipInp.disabled = false;
            peopleInp.disabled = false;
            btns.forEach((btn) => {
                btn.classList.add('true')
                btn.disabled = false
            })
        }
        else {
            customTipInp.disabled = true;
            peopleInp.disabled = true;
            customTipInp.value = ''
            peopleInp.value = ''
            tipPercentage = null
            genBillBtn.disabled = true;
            genBillBtn.classList.remove('active')
            btns.forEach((btn) => {
                btn.classList.remove('true')
                btn.classList.remove('active')
                btn.disabled = true
            })
        }
})

tipBtns.addEventListener("click", (e) => {
    if (e.target !== tipBtns) {
        customTipInp.value = ''
        tipPercentage = e.target.innerText
        btns.forEach((btn) => {
            btn.classList.remove('active')
        })
        e.target.classList.add('active')

    }
})

customTipInp.addEventListener('input', () => {
    tipPercentage = customTipInp.value;
    btns.forEach((btn) => {
        btn.classList.remove('active')
    })

    if (parseInt(tipPercentage) && parseInt(peopleInp.value)) {
        genBillBtn.disabled = false;
        genBillBtn.classList.add('active')
    }
    else {
        genBillBtn.disabled = true;
        genBillBtn.classList.remove('active')
    }
})

peopleInp.addEventListener('input', () => {

    if (parseInt(tipPercentage) && parseInt(peopleInp.value)) {
        genBillBtn.disabled = false;
        genBillBtn.classList.add('active')
    }
    else {
        genBillBtn.disabled = true;
        genBillBtn.classList.remove('active')
    }
})


genBillBtn.addEventListener('click', () => {
    const billAmounValue = parseInt(billAmountInp.value)
    const personNumber = parseInt(peopleInp.value)
    const tipAmountValue = (parseInt(tipPercentage) / 100) * billAmounValue
    const totalAmoutValue = billAmounValue + tipAmountValue
    const eachPersonBillValue = totalAmoutValue / personNumber

    tipAmount.innerText = `₹${tipAmountValue.toFixed(2)}`
    totalAmount.innerText = `₹${totalAmoutValue.toFixed(2)}`
    eachPersonBill.innerText = `₹${eachPersonBillValue.toFixed(2)}`

    resetBtn.disabled = false;
    resetBtn.classList.add('active')
})


resetBtn.addEventListener('click', () => {
    customTipInp.value = ''
    peopleInp.value = ''
    billAmountInp.value = ''
    tipAmount.innerText = ''
    totalAmount.innerText = ''
    eachPersonBill.innerText = ''

    customTipInp.disabled = true
    peopleInp.disabled = true
    resetBtn.disabled = true;
    genBillBtn.disabled = true;
    resetBtn.classList.remove('active')
    genBillBtn.classList.remove('active')
    tipPercentage = null

    btns.forEach((btn) => {
        btn.disabled = true;
        btn.classList.remove('active');
        btn.classList.remove('true')
    })
})

