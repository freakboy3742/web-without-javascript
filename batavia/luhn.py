import dom
import sys

def is_valid_cc(number):
    digits = [int(x) for x in number]
    total = 0
    parity = len(digits) % 2
    for i, digit in enumerate(digits):
        if i % 2 == parity:
            digit *= 2
        total += (digit // 10) % 10
    return total % 10 == 0

card_number = dom.document.getElementById(sys.argv[1]).value
if card_number:
    if is_valid_cc(card_number):
        dom.window.alert("Card is valid!!")
    else:
        dom.window.alert("Card is NOT valid!!")
