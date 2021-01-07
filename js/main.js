// Elements
const editor = document.getElementById('editor');
const boldButton = document.getElementById('bold');
const italicButton = document.getElementById('italic');
const underlineButton = document.getElementById('underline');
const subscriptButton = document.getElementById('subscript');
const superscriptButton = document.getElementById('superscript');

// Boolean keys
let isSubscript = false;
let isSuperscript = false;

// Set the contenteditable attribute of the div#editor to true
window.addEventListener('load', () => {
	document.getElementById('editor').setAttribute('contenteditable', true);
});

/* Mouse events to change text formatting */
// Turn text into bold
boldButton.addEventListener('click', () => {
	document.execCommand('bold');
});

// Turn text into italic
italicButton.addEventListener('click', () => {
	document.execCommand('italic');
})

// Turn text into underline
underlineButton.addEventListener('click', () => {
	document.execCommand('underline');
});

// Turn text into subscript
subscriptButton.addEventListener('click', () => {
	if (isSubscript === false) {
		document.execCommand('subscript');
		isSubscript = true;
	} else {
		document.execCommand('undo');
		isSubscript = false;
	}
});

// Turn text into superscript
superscriptButton.addEventListener('click', () => {
	if (isSuperscript === false) {
		document.execCommand('superscript');
	} else {
		document.execCommand('undo');
		isSuperscript = false;
	}
});