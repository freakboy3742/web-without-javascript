	(function () {
		var __name__ = '__main__';
		var is_valid_cc = function (number) {
			var digits = (function () {
				var __accu0__ = [];
				var __iterable0__ = number;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var x = __iterable0__ [__index0__];
					__accu0__.append (int (x));
				}
				return __accu0__;
			}) ();
			var total = 0;
			var parity = __mod__ (len (digits), 2);
			var __iterable0__ = enumerate (digits);
			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
				var __left0__ = __iterable0__ [__index0__];
				var i = __left0__ [0];
				var digit = __left0__ [1];
				if (__mod__ (i, 2) == parity) {
					digit *= 2;
				}
				total += __mod__ (Math.floor (digit / 10), 10);
			}
			return __mod__ (total, 10) == 0;
		};
		var validate = function (node) {
			var card_number = document.getElementById (node).value;
			if (card_number) {
				if (is_valid_cc (card_number)) {
					alert ('Card is valid!!');
				}
				else {
					alert ('Card is NOT valid!!');
				}
			}
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.is_valid_cc = is_valid_cc;
			__all__.validate = validate;
		__pragma__ ('</all>')
	}) ();
