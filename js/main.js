// Elements
const editor = document.getElementById('editor');
const boldButton = document.getElementById('bold');
const italicButton = document.getElementById('italic');
const underlineButton = document.getElementById('underline');
const subscriptButton = document.getElementById('subscript');
const superscriptButton = document.getElementById('superscript');
const alignLeft = document.getElementById('left');
const alignCenter = document.getElementById('center');
const alignRight = document.getElementById('right');
const justify = document.getElementById('justify');

// Boolean keys
let isSubscript = false;
let isSuperscript = false;

// Download file
function downloadFile(filename, text, element) {
	element.setAttribute('href', `data:text/plain;charset=utf-8, ${encodeURIComponent(text)}`);
	element.setAttribute('download', filename);
}

// Download in doc
document.getElementById('doc').addEventListener('click', () => {
	let element = document.getElementById('doc');
	let text = editor.innerHTML;
	downloadFile('myFile.doc', text, element);	
});	

// Download in odt 
document.getElementById('odt').addEventListener('click', () => {
	let element = document.getElementById('odt');
	let text = editor.innerHTML;
	downloadFile('myFile.odt', text, element);
})

// Download in PDF
document.getElementById('pdf').addEventListener('click', () => {
	let element = document.getElementById('pdf');
	let text = editor.innerHTML;
	downloadFile('myFile.pdf', text, element);
})

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

// Align left 
alignLeft.addEventListener('click', () => {
	document.execCommand('justifyLeft');
})

// Align Center
alignCenter.addEventListener('click', () => {
	document.execCommand('justifyCenter');
})

// Align right
alignRight.addEventListener('click', () => {
	document.execCommand('justifyRight');
})

// Justify
justify.addEventListener('click', () => {
	document.execCommand('justifyFull');
})