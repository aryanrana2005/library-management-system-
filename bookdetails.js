 // Function to get the query parameter value
 function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Set the book image based on the query parameter
document.addEventListener('DOMContentLoaded', () => {
    const bookImage = document.getElementById('bookImage');
    const imageUrl = getQueryParam('img');
    if (imageUrl) {
        bookImage.src = decodeURIComponent(imageUrl);
    }
});