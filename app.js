let button = document.getElementById('button1');

button.addEventListener('click', function () {
    let features = "menubar=no, width=500, height=800, status=no, toolbar=no"
    let myWindows = window.open("https://www.google.com","", features);

    myWindows.resizeBy(700, 500);
    myWindows.moveBy(-200,100)

    document.getElementById("button2").addEventListener("click", () => myWindows.close())
});