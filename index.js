function checkLogin(imageUrl) {
    // Simulate login check
    const loggedIn = localStorage.getItem('loggedIn') === 'true';

    if (loggedIn) {
        window.location.href = `bookdetails.html?img=${encodeURIComponent(imageUrl)}`;
    } else {
        window.location.href = 'loginpage.html';
    }
}