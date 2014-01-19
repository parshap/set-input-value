"use strict";

// Set an input's value without losing the user's cursor position.
// input: input element to change value of
// value: new value
// shift: amount to shift the previous cursor by (default 0)
module.exports = function(input, value, shift) {
	// Just set the value for unsupported browsers
	if ( ! input.setSelectionRange) {
		input.value = value;
		return;
	}

	shift = shift || 0;

	// Store current selection
	var start = input.selectionStart,
		end = input.selectionEnd;

	// Update input value
	input.value = value;

	// Set new selection
	input.setSelectionRange(start + shift, end + shift);
};
