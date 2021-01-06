const editor = document.getElementById('editor');
const boldButton = document.getElementById('bold');
const underlineButton = document.getElementById('underline');
const subscriptButton = document.getElementById('subscript');

window.addEventListener('load', () => {
	document.getElementById('editor').setAttribute('contenteditable', true);
});

boldButton.addEventListener('click', () => {
	document.execCommand('bold');
});

underlineButton.addEventListener('click', () => {
	document.execCommand('underline');
});

subscriptButton.addEventListener('click', () => {
	document.execCommand('subscript');
});