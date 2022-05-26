const cpfButton = document.querySelector('.btn')

function isCpfValid(cpf) {
    if (cpf.length != 11) {
        return false
    } else {

        let numbers = cpf.substring(0, 9)
        let chars = cpf.substring(9)

        let increment = 0
        for (let i = 10; i > 1; i--) {
            increment += numbers.charAt(10 - i) * i
        }

        let result = increment % 11 < 2 ? 0 : 11 - (increment % 11)

        if (result != chars.charAt(0)) {
            return false
        }

        increment = 0
        numbers = cpf.substring(0, 10)

        for (let k = 11; k > 1; k--) {
            increment += numbers.charAt(11 - k) * k
        }

        result = increment % 11 < 2 ? 0 : 11 - (increment % 11)

        if (result != chars.charAt(1)) {
            return false
        }

        
        return true
    }
}

function cpfValidation() {
    const cpf = document.getElementById('cpf_digitado').value
    document.getElementById('success').style.display = 'none'
    document.getElementById('error').style.display = 'none'

    let validationResult = isCpfValid(cpf)


    validationResult ? document.getElementById('success').style.display = 'block'
        : document.getElementById('error').style.display = 'block'

    console.log(cpf)
}

cpfButton.addEventListener('click', cpfValidation)