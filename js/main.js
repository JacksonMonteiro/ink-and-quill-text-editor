const boldButton = document.getElementById('bold');
const underlineButton = document.getElementById('underline');
const editor = document.getElementById('editor');

window.addEventListener('load', () => {
	document.getElementById('editor').setAttribute('contenteditable', true);
});

boldButton.addEventListener('click', () => {
	document.execCommand('bold');
});

underlineButton.addEventListener('click', () => {
	document.execCommand('underline');
})
