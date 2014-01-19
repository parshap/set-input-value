# set-input-value

Set an input's value without losing the user's cursor position.

## Example

```javascript
var set = require("set-input-value");
var input = document.getElementById("my-input");

// Uppercase the value
set(input, input.value.toUpperCase());

// Add a prefix and shift the cursor accordingly
var prefix = "A: ";
set(input, prefix + input.value, prefix.length);
```

## API

### `set(input, value, shift)`

Update the value of the given input element.

 * *input*: input element to update
 * *value*: new value
 * *shift*: amount to shift the previous cursor by (*default: `0`*)

## Browser Support

This module currently uses the
[`input.setSelectionRange`](https://developer.mozilla.org/en-US/docs/Web/API/Input.setSelectionRange)
which is not supported in IE before version 9. A polyfill is possible -
see http://jsfiddle.net/EXH2k/6/.

## Installation

```
npm install set-input-value
```
