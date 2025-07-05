const header = document.getElementsByTagName("header")[0];

// Menu Element
const menuElm = () => {
    return `
        <div id="offcanvas" class="fixed top-0 bottom-0 left-0 right-0 bg-black 400 opacity-75 z-96"></div>
        <div class="fixed top-0 bottom-0 right-0 w-3/5 bg-white z-99 shadow-xl rounded-2xl"></div>
    `
}

document.getElementById("menu-btn").addEventListener("click", function() {
    document.body.insertBefore(navbar, menuElm());
});