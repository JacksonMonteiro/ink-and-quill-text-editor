const italic = document.getElementById('italic');
const bold = document.getElementById('bold');
const editor = document.getElementById('editor');

window.addEventListener('load', () => {
	document.getElementById('editor').setAttribute('contenteditable', true);
});

bold.addEventListener('click', () => {
	document.execCommand('bold');
});