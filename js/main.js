/* Constants and variables */
const editor = document.getElementById('editor');

const boldButton = document.getElementById('bold');
const italicButton = document.getElementById('italic');
const underlineButton = document.getElementById('underline');
const subscriptButton = document.getElementById('subscript');
const superscriptButton = document.getElementById('superscript');

/* Set the contenteditable attribute of the div#editor to true*/
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
	document.execCommand('subscript');
});

// Turn text into superscript
superscriptButton.addEventListener('click', () => {
	document.execCommand('superscript');
});
