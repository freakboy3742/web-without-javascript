
int char_value(const char ch) {
    return (int) (ch - '0');
}

int str_length(const char *str) {
    int len = 0;
    while (str[len] != '\0') {
        len++;
    }
    return len;
}

int is_valid_cc(const char *number)
{
    int n_digits = str_length(number);
    int total = 0;
    int parity = n_digits % 2;
    for (int i = 0; i < n_digits; i++)
    {
        int digit = char_value(number[i]);
        if (parity == i % 2) {
            digit = digit * 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        total += digit;
    }
    return 0 == (total % 10);
}
