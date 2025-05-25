// Check if uid exists in localStorage
if (!localStorage.getItem('uid')) {
    window.location.href = 'sign.html';
}