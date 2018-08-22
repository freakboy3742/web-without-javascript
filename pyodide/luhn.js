function is_valid_cc(number) {
    return pyodide.runPython(
        "digits = [int(x) for x in '" + number + "']\n" +
        "total = 0\n" +
        "parity = len(digits) % 2\n" +
        "for i, digit in enumerate(digits):\n" +
        "    if i % 2 == parity:\n" +
        "        digit *= 2\n" +
        "        if digit > 9:\n" +
        "            digit -= 9\n" +
        "    total += digit\n" +
        "result = (total % 10 == 0)\n" +
        "result"
    )
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

(function () {
    languagePluginLoader.then(function () {
        for (let b of document.getElementsByTagName('button')) {
            b.disabled = false
        }
    })
})()