function is_valid_cc(number) {
    let digits = number.split('')
    let total = 0
    let parity = digits.length % 2
    for (let i = 0; i < digits.length; i++) {
        let digit = parseInt(digits[i])
        if (i % 2 == parity) {
            digit = digit *= 2
            if (digit > 9) {
                digit -= 9
            }
        }
        total += digit
    }
    return (total % 10) == 0
}

function validate(node) {
    card_number = document.getElementById(node).value
    if (card_number) {
        if (is_valid_cc(card_number)) {
            alert("Card is valid!!")
        } else {
            alert("Card is NOT valid!!")
        }
    }
}
