function fadeOut() {
    const bgrnd = document.getElementById('trans');

    bgrnd.style.opacity = '1';
    bgrnd.style.zIndex = '1000';

    setTimeout(() => {
        window.location.href = "game.html";
    }, 1000);
    

}