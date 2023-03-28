const passcodeSubmitBtn = document.getElementById('passcode-submit');
const passcodeInput = document.getElementById('passcode-input');

passcodeSubmitBtn.addEventListener('click', () => {
	if (passcodeInput.value === '611503') { // Replace with your desired passcode
		window.location.href = 'https://docs.google.com/document/d/1TT1WhI96hStzMmgF4FM62FG22pNuxaWfRk7ZDXugOPI/edit'; // Replace with your desired redirect URL
	} else {
		alert('Access Denied');
	}
});
