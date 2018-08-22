from browser import document, alert


def is_valid_cc(number):
    digits = [int(x) for x in number]
    total = 0
    parity = len(digits) % 2
    for i, digit in enumerate(digits):
        if i % 2 == parity:
            digit *= 2
            if (digit > 9):
                digit -= 9
        total += digit
    return total % 10 == 0

def validate(node):
    def handler(ev):
        card_number = document[node].value
        if card_number:
            if is_valid_cc(card_number):
                alert("Card is valid!!")
            else:
                alert("Card is NOT valid!!")

    return handler
