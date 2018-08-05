is_valid_cc = (number) ->
    digits = number.split('')
    total = 0
    parity = digits.length % 2
    for digit, i in digits
        digit = parseInt(digit)
        if i % 2 == parity
            digit = digit *= 2
            if digit > 9
                digit -= 9
        total += digit

    (total % 10) == 0

window.validate = (node) ->
    card_number = document.getElementById(node).value
    if card_number
        if is_valid_cc(card_number)
            alert("Card is valid!!")
        else
            alert("Card is NOT valid!!")